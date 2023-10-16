import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { IconArrowHeadLeft, IconArrowHeadRight } from '@pui-cn/icons'
import './index.scss'
import cls from 'classnames'

interface Props {
  children: ReactNode
  wrapClassName?: string
  scrollStep?: number
}

const ScrollWrapper: FC<Props> = ({
  children,
  wrapClassName = '',
  scrollStep = 200
}) => {
  const [isLeftArrowVisible, setLeftArrowVisible] = useState<boolean>(false)
  const [isRightArrowVisible, setRightArrowVisible] = useState<boolean>(true)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const rightArrowRef = useRef<HTMLButtonElement | null>(null)

  /**
   * 动态显示左右箭头
   * scrollContainerRef.current.scrollWidth 表示滚动容器的内容宽度，包括溢出部分。
   * scrollContainerRef.current.clientWidth 表示滚动容器的可见部分宽度。
   * 通过计算这两个值的差，就可以得到滚动容器的右边界位置(就是被隐藏的部分) rightScrollLimit。
   * 如果滚动容器的左边界位置 scrollContainerRef.current.scrollLeft 小于 rightScrollLimit，
   * 则说明滚动容器还有更多的内容在右侧，因此需要显示右箭头。
   */
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      setLeftArrowVisible(scrollContainerRef.current.scrollLeft > 0)

      const rightScrollLimit =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth
      setRightArrowVisible(
        scrollContainerRef.current.scrollLeft < rightScrollLimit
      )
    }
  }

  const scrollContent = (direction: -1 | 1) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction * scrollStep,
        behavior: 'smooth'
      })
    }
  }

  const showHiddenPart = (element: Element) => {
    if (scrollContainerRef.current) {
      const containerElement = scrollContainerRef.current

      if (containerElement) {
        const containerRect = containerElement.getBoundingClientRect()
        const tabRect = element.getBoundingClientRect()
        const arrowWidth = 24

        if (tabRect.left - arrowWidth < containerRect.left) {
          // 被隐藏的元素在可视区域左侧，向右滚动
          const hiddenLength = containerRect.left - (tabRect.left - arrowWidth)

          containerElement.scrollBy({
            left: -1 * hiddenLength,
            behavior: 'smooth'
          })
        } else if (tabRect.right + arrowWidth > containerRect.right) {
          // 被隐藏的元素在可视区域右侧，向左滚动
          const hiddenLength = tabRect.right + arrowWidth - containerRect.right

          containerElement.scrollBy({
            left: hiddenLength,
            behavior: 'smooth'
          })
        }
      }
    }
  }

  const handleItemClick: React.MouseEventHandler<HTMLElement> = e => {
    showHiddenPart(e.target as HTMLElement)
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)

    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  return (
    <div
      className={cls('horizontal-scroll-wrapper', {
        [wrapClassName]: wrapClassName
      })}
    >
      {isLeftArrowVisible && (
        <IconArrowHeadLeft
          className="arrow left-arrow"
          onClick={() => scrollContent(-1)}
        />
      )}
      <div
        className="scroll-container"
        ref={scrollContainerRef}
        onScroll={checkScroll}
        onClick={handleItemClick}
      >
        {children}
      </div>
      {isRightArrowVisible && (
        <IconArrowHeadRight
          className="arrow right-arrow"
          ref={rightArrowRef}
          onClick={() => scrollContent(1)}
        />
      )}
    </div>
  )
}

export { ScrollWrapper }
