import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { usePopShowState } from '../../shared/hooks'
import { componentClassNames, isReactElement } from '../../shared/class-util'
import './tooltip.scss'

const TOP_CENTER = 'topCenter'
const LEFT_CENTER = 'leftCenter'
const RIGHT_CENTER = 'rightCenter'
const BOTTOM_CENTER = 'bottomCenter'
const TOP_LEFT = 'topLeft'
const TOP_RIGHT = 'topRight'
const BOTTOM_LEFT = 'bottomLeft'
const BOTTOM_RIGHT = 'bottomRight'
const LEFT_TOP = 'leftTop'
const LEFT_BOTTOM = 'leftBottom'
const RIGHT_TOP = 'rightTop'
const RIGHT_BOTTOM = 'rightBottom'

export interface TooltipProps {
  /** 子组件 */
  children: string | ReactNode

  /** 类名 */
  className?: string

  /** 提示文字 */
  content: string | ReactNode

  /** 浮层渲染父节点，默认渲染到 body 上 */
  getPopupContainer?: () => HTMLElement | null

  /** 提示框最大宽度 */
  maxWidth?: string | number

  /** 气泡框位置，可选 topCenter leftCenter rightCenter bottomCenter topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom */
  placement?:
    | 'topCenter'
    | 'leftCenter'
    | 'rightCenter'
    | 'bottomCenter'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom'

  /** 样式 */
  style?: CSSProperties

  /** 触发行为 */
  trigger?: 'hover' | 'click'

  /** 用于手动控制浮层显隐 */
  visible?: boolean
}
const prefixCls = 'pui-tooltip'
const Tooltip = ({
  children,
  className,
  content,
  getPopupContainer = () => document.body,
  maxWidth = 250,
  placement = TOP_CENTER,
  style,
  trigger = 'hover',
  visible
}: TooltipProps) => {
  const [isMountedContent, setIsMountedContent] = useState(false)
  // mouseEnter、mouseLeave 显示/隐藏content
  const [visibleContent, setVisibleContent] = useState(false)
  // click 显示/隐藏content
  const [showContent, setShowContent] = usePopShowState()
  const [contentPosition, setContentPosition] = useState<
    { top: number; left: number } | undefined
  >()
  const [arrowPosition, setArrowPosition] = useState<{
    top?: number
    bottom?: number
    left?: number
    right?: number
  }>()
  const [isResized, setIsResized] = useState(false)
  const [targetDom, setTargetDom] = useState<EventTarget | null>(null)
  const [arrowPlacementCls, setArrowPlacementCls] = useState('')
  const originRef = useRef(null)
  const boxRef = useRef(null)
  const showTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>()
  // eslint-disable-next-line prefer-const
  let [firstChild, ...restChildren] = React.Children.toArray(children)
  if (!isReactElement(firstChild)) {
    firstChild = <span>{firstChild}</span>
  }
  // 计算提示框位置
  const calcTooltipPosition = (boxDom: any, targetDom: any, originDom: any) => {
    const boxPosition = boxDom.getBoundingClientRect()
    const targetPosition = targetDom.getBoundingClientRect()
    const originPosition = originDom.getBoundingClientRect()
    const gap = 16
    let contentPositionVal
    switch (placement) {
      case TOP_CENTER:
        contentPositionVal = {
          top:
            targetPosition.top - originPosition.top - gap - boxPosition.height,
          left:
            targetPosition.left -
            originPosition.left -
            (boxPosition.width - targetPosition.width) / 2
        }
        break
      case LEFT_CENTER:
        contentPositionVal = {
          top:
            targetPosition.top -
            originPosition.top -
            (boxPosition.height - targetPosition.height) / 2,
          left:
            targetPosition.left - originPosition.left - gap - boxPosition.width
        }
        break
      case RIGHT_CENTER:
        contentPositionVal = {
          top:
            targetPosition.top -
            originPosition.top -
            (boxPosition.height - targetPosition.height) / 2,
          left: targetPosition.right - originPosition.left + gap
        }
        break
      case BOTTOM_CENTER:
        contentPositionVal = {
          top: targetPosition.bottom - originPosition.top + gap,
          left:
            targetPosition.left -
            originPosition.left -
            (boxPosition.width - targetPosition.width) / 2
        }
        break
      case TOP_LEFT:
        contentPositionVal = {
          top:
            targetPosition.top - originPosition.top - gap - boxPosition.height,
          left: targetPosition.left - originPosition.left
        }
        break
      case TOP_RIGHT:
        contentPositionVal = {
          top:
            targetPosition.top - originPosition.top - gap - boxPosition.height,
          left: targetPosition.right - boxPosition.width - originPosition.left
        }
        break
      case BOTTOM_LEFT:
        contentPositionVal = {
          top: targetPosition.bottom - originPosition.top + gap,
          left: targetPosition.left - originPosition.left
        }
        break
      case BOTTOM_RIGHT:
        contentPositionVal = {
          top: targetPosition.bottom - originPosition.top + gap,
          left: targetPosition.right - originPosition.left - boxPosition.width
        }
        break
      case LEFT_TOP:
        contentPositionVal = {
          top: targetPosition.top - originPosition.top,
          left:
            targetPosition.left - originPosition.left - gap - boxPosition.width
        }
        break
      case LEFT_BOTTOM:
        contentPositionVal = {
          top: targetPosition.bottom - originPosition.top - boxPosition.height,
          left:
            targetPosition.left - originPosition.left - gap - boxPosition.width
        }
        break
      case RIGHT_TOP:
        contentPositionVal = {
          top: targetPosition.top - originPosition.top,
          left: targetPosition.right - originPosition.left + gap
        }
        break
      case RIGHT_BOTTOM:
        contentPositionVal = {
          top: targetPosition.bottom - originPosition.top - boxPosition.height,
          left: targetPosition.right - originPosition.left + gap
        }
        break
      default:
        break
    }
    setContentPosition(contentPositionVal)
  }
  // 计算小箭头位置
  const calcArrowPosition = (boxDom: any) => {
    const boxPosition = boxDom.getBoundingClientRect()
    const arrowRectWidth = 8
    const contentPadding = 8
    let arrowPositionVal
    let arrowPlacementClsVal
    switch (placement) {
      case TOP_CENTER:
        arrowPositionVal = {
          bottom: -arrowRectWidth / 2,
          left: (boxPosition.width - arrowRectWidth) / 2
        }
        arrowPlacementClsVal = `${prefixCls}-bottom-arrow`
        break
      case LEFT_CENTER:
        arrowPositionVal = {
          right: -arrowRectWidth / 2,
          top: (boxPosition.height - arrowRectWidth) / 2
        }
        arrowPlacementClsVal = `${prefixCls}-right-arrow`
        break
      case RIGHT_CENTER:
        arrowPositionVal = {
          left: -arrowRectWidth / 2,
          top: (boxPosition.height - arrowRectWidth) / 2
        }
        arrowPlacementClsVal = `${prefixCls}-left-arrow`
        break
      case BOTTOM_CENTER:
        arrowPositionVal = {
          top: -arrowRectWidth / 2,
          left: (boxPosition.width - arrowRectWidth) / 2
        }
        arrowPlacementClsVal = `${prefixCls}-top-arrow`
        break
      case TOP_LEFT:
        arrowPositionVal = {
          bottom: -arrowRectWidth / 2,
          left: contentPadding
        }
        arrowPlacementClsVal = `${prefixCls}-bottom-arrow`
        break
      case TOP_RIGHT:
        arrowPositionVal = {
          bottom: -arrowRectWidth / 2,
          right: contentPadding
        }
        arrowPlacementClsVal = `${prefixCls}-bottom-arrow`
        break
      case BOTTOM_LEFT:
        arrowPositionVal = {
          top: -arrowRectWidth / 2,
          left: contentPadding
        }
        arrowPlacementClsVal = `${prefixCls}-top-arrow`
        break
      case BOTTOM_RIGHT:
        arrowPositionVal = {
          top: -arrowRectWidth / 2,
          right: contentPadding
        }
        arrowPlacementClsVal = `${prefixCls}-top-arrow`
        break
      case LEFT_TOP:
        arrowPositionVal = {
          right: -arrowRectWidth / 2,
          top: contentPadding
        }
        arrowPlacementClsVal = `${prefixCls}-right-arrow`
        break
      case LEFT_BOTTOM:
        arrowPositionVal = {
          right: -arrowRectWidth / 2,
          bottom: contentPadding
        }
        arrowPlacementClsVal = `${prefixCls}-right-arrow`
        break
      case RIGHT_TOP:
        arrowPositionVal = {
          left: -arrowRectWidth / 2,
          top: contentPadding
        }
        arrowPlacementClsVal = `${prefixCls}-left-arrow`
        break
      case RIGHT_BOTTOM:
        arrowPositionVal = {
          left: -arrowRectWidth / 2,
          bottom: contentPadding
        }
        arrowPlacementClsVal = `${prefixCls}-left-arrow`
        break
      default:
        break
    }
    setArrowPlacementCls(arrowPlacementClsVal || '')
    setArrowPosition(arrowPositionVal)
  }
  // 窗口大小改变回调
  const handleResize = () => {
    if (trigger === 'click') {
      if (showContent) {
        setShowContent(false)
      }
      if (!isResized) {
        setIsResized(true)
      }
    } else if (trigger === 'hover') {
      if (!isResized) {
        setIsResized(true)
      }
    }
  }
  useEffect(() => {
    if (isMountedContent) {
      window.addEventListener('resize', handleResize)
    }
    return () => {
      if (isMountedContent) {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [showContent, isResized, isMountedContent])
  useEffect(() => {
    if (isMountedContent && targetDom) {
      calcTooltipPosition(boxRef.current, targetDom, originRef.current)
      calcArrowPosition(boxRef.current)
      if (typeof visible !== 'boolean') {
        if (trigger === 'click') {
          setShowContent(true)
        }
      }
    }
  }, [isMountedContent, targetDom])
  useEffect(() => {
    if (boxRef.current) {
      calcTooltipPosition(boxRef.current, targetDom, originRef.current)
      calcArrowPosition(boxRef.current)
    }
  }, [content])
  // 鼠标移入提示框触发执行
  const handleMouseEnterContent = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
    }
  }
  // 鼠标移出提示框触发
  const handleMouseLeaveContent = () => {
    hideTimerRef.current = setTimeout(() => {
      setVisibleContent(false)
      hideTimerRef.current = undefined
    }, 100)
  }
  const mountContent = () => {
    const contentEle = (
      <div className={prefixCls} ref={originRef}>
        <div
          className={`${prefixCls}-box`}
          ref={boxRef}
          style={{
            ...contentPosition,
            visibility:
              (visibleContent || showContent || visible) && contentPosition
                ? 'visible'
                : 'hidden'
          }}
          onMouseEnter={
            trigger === 'hover' && typeof visible !== 'boolean'
              ? handleMouseEnterContent
              : undefined
          }
          onMouseLeave={
            trigger === 'hover' && typeof visible !== 'boolean'
              ? handleMouseLeaveContent
              : undefined
          }
        >
          <div
            className={componentClassNames(
              `${prefixCls}-content`,
              {},
              className
            )}
            style={{ ...(style && {}), maxWidth }}
          >
            {content}
          </div>
          <div
            className={classNames(`${prefixCls}-arrow`, arrowPlacementCls)}
            style={arrowPosition}
          />
        </div>
      </div>
    )
    return ReactDOM.createPortal(
      contentEle,
      getPopupContainer() || document.body
    )
  }
  const onMouseEnter = (evt: MouseEvent) => {
    ;(firstChild as ReactElement).props.onMouseEnter &&
      (firstChild as ReactElement).props.onMouseEnter(evt)
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
    } else {
      showTimerRef.current = setTimeout(
        (currentTarget => () => {
          if (typeof visible !== 'boolean') {
            setVisibleContent(true)
          }
          if (isMountedContent) {
            if (isResized) {
              calcTooltipPosition(
                boxRef.current,
                currentTarget,
                originRef.current
              )
              setIsResized(false)
            }
          } else {
            setTargetDom(currentTarget)
            setIsMountedContent(true)
          }
          showTimerRef.current = undefined
        })(evt.currentTarget),
        100
      )
    }
  }
  const onMouseLeave = (evt: MouseEvent) => {
    ;(firstChild as ReactElement).props.onMouseLeave &&
      (firstChild as ReactElement).props.onMouseLeave(evt)
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current)
      showTimerRef.current = undefined
    } else {
      if (typeof visible === 'boolean') return
      hideTimerRef.current = setTimeout(() => {
        setVisibleContent(false)
        hideTimerRef.current = undefined
      }, 100)
    }
  }
  const onClick = (evt: MouseEvent) => {
    evt.stopPropagation()
    ;(firstChild as ReactElement).props.onClick &&
      (firstChild as ReactElement).props.onClick(evt)
    if (isMountedContent) {
      if (isResized) {
        calcTooltipPosition(
          boxRef.current,
          evt.currentTarget,
          originRef.current
        )
        setIsResized(false)
      }
      if (typeof visible === 'boolean') return
      setShowContent(!showContent)
    } else {
      setTargetDom(evt.currentTarget)
      setIsMountedContent(true)
    }
  }

  const newFirstChild = () => {
    const props =
      trigger === 'click'
        ? { onClick }
        : trigger === 'hover'
        ? { onMouseEnter, onMouseLeave }
        : {}
    return React.cloneElement(firstChild as ReactElement, props)
  }

  return (
    <>
      {newFirstChild()}
      {restChildren}
      {isMountedContent ? mountContent() : null}
    </>
  )
}

export { Tooltip }
