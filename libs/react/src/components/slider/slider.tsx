import React, { ReactNode, useState,useRef,useEffect } from 'react'
import classNames from 'classnames'
import { Tooltip } from '../tooltip/tooltip'
import './slider.scss'

const prefixCls = 'pui-slider'

export interface SliderProps {
  /** 类名 */
  className?: string
  /** 值为true时，滑块为禁用状态*/
  disabled?: boolean,
  /** 设置初始值*/
  defaultValue?: number | Array<number>,
  /** 刻度标记，key的类型必须为number且取值在闭区间[min,max]内。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。*/
  marks?: Array<{
    label: ReactNode
    value: number
  }>,
  /** 最大值*/
  max?: number,
  /** 最小值*/
  min?: number,
  /** 当 Slider 的值发生改变时，会触发 onValueChange，并把改变后的值作为参数传入。*/
  onValueChange?: (value:number|Array<number>) => void,
  /** 双滑块模式*/
  range?: boolean,
  /** 步长，取值必须大于0，并且可以被(max-min)整除*/
  step?: number | null,
  tipFormatter?: (value:number | Array<number>) => ReactNode | Array<ReactNode>
  /** 设置当前数值*/
  value?: number | Array<number>,
}

const Slider = ({
  className,
  disabled=false,
  marks,
  max=100,
  min=0,
  onValueChange,
  range=false,
  defaultValue=range?[0,0]:0,
  step=1,
  tipFormatter,
  value,
}: SliderProps) => {
  const initialValue = value || defaultValue;
  const initialTipContent = tipFormatter ? tipFormatter(initialValue) : initialValue ;
  const [left,setLeft] = useState(range?[0,0]:0);
  const [currentValue,setCurrentValue] = useState(initialValue);
  const [isShowHandle,setIsShowHandle] = useState(false);
  const [isHover,setIsHover] = useState(range ? [false,false] : false); //鼠标是否hover在滑块上
  const [isDrag,setIsDrag] = useState(range ? [false,false] : false); //是否在拖动滑块中
  const [tooltipContent,setTooltipContent] = useState<ReactNode>(initialTipContent);
  const railRef = useRef<HTMLDivElement>(null);
  const handleRef = range ? [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)] : useRef<HTMLDivElement>(null);
  //根据value计算left
  const calcLeft = (value: number|Array<number>) => {
    if(railRef.current){
      let validVal,left;
      const railWidth = railRef.current.clientWidth;
      if(range){
        validVal = (value as Array<number>).map(val => val < min ? min : val > max ? max : val);
        left = validVal.map(item => item / (max - min) * railWidth);
      }else{
        validVal = value < min ? min : value > max ? max : value;
        left = validVal as number / (max - min) * railWidth;
      }
      const currentTooltipContent = tipFormatter ? tipFormatter(validVal as number) : validVal; 
      setTooltipContent(currentTooltipContent);
      setLeft(left);
      setCurrentValue(validVal);
    }
  }
  useEffect(() => {
    calcLeft(initialValue);
  },[]);
  useEffect(() => {
    if(value){
      calcLeft(value);
    }
    if(!isShowHandle) setIsShowHandle(true);
  },[value]);
  useEffect(() => {
    onValueChange && onValueChange(currentValue);
  },[currentValue]);
  
  const handleMouseMoveWrap = (pageX:number,stepPx:number,originVal:number | Array<number>,index?: number) => (evt:MouseEvent) => {
    let nextCurrentValue = initialValue;
    if(step){
      const stepCount = Math.round((evt.pageX - pageX)/stepPx);
      if(range){
        nextCurrentValue = [...originVal as Array<number>];
        nextCurrentValue[index as number] = originVal[index as number] + stepCount * step;
      }else{
        nextCurrentValue = originVal as number + stepCount * step;
      }
    }else if(marks){
      const closeCurrentValue = (evt.pageX - pageX)/(railRef.current as HTMLDivElement).clientWidth * (max-min) + (range ? originVal[index as number] : originVal);
      marks.forEach((mark,index) => {
        if(index === 0){
          nextCurrentValue = mark.value;
        }else if(Math.abs(mark.value - closeCurrentValue) < Math.abs(nextCurrentValue as number - closeCurrentValue)){
          nextCurrentValue = mark.value;
        }
      });
      if(range){
        const temp = nextCurrentValue;
        nextCurrentValue = [...originVal as Array<number>];
        nextCurrentValue[index as number] = temp as number;
      }
    }
    calcLeft(nextCurrentValue);
  }
  const handleMouseDown:(currentValue:number | Array<number>,index?:number) => React.MouseEventHandler = (currentValue,index) => (evt) => {
    if(disabled) return;
    const nextIsDrag = range ? [index===0 , index===1] : true;
    setIsDrag(nextIsDrag);
    let stepPx:number=1;
    if(railRef.current && step){
      stepPx = step / (max - min) * railRef.current.clientWidth;
    }
    const handleMouseMove = handleMouseMoveWrap(evt.pageX,stepPx,currentValue,index);
    const handleMouseUp = () => {
      const nextIsDrag = range ? [false , false] : false;
      setIsDrag(nextIsDrag);
      document.removeEventListener('mousemove',handleMouseMove);
      document.removeEventListener('mouseup',handleMouseUp);
    };
    document.addEventListener('mouseup',handleMouseUp);
    document.addEventListener('mousemove',handleMouseMove);
  }
  const handleMouseEnter = (index?:number) => () => {
    if(disabled) return;
    const nextIsHover = range ? [index===0,index===1] : true;
    setIsHover(nextIsHover);
  };
  const handleMouseLeave = () => {
    if(disabled) return;
    const nextIsHover = range ? [false,false] : false;
    setIsHover(nextIsHover);
  };
  //点击滑轨回调
  const handleSliderClick:React.MouseEventHandler = (evt) => {
    if(disabled) return;
    if(railRef.current){
      let nextCurrentValue: number|Array<number> = 0;
      if(step){
        const stepPx = step / (max - min) * railRef.current.clientWidth;
        nextCurrentValue = Math.round((evt.pageX - (railRef.current.getBoundingClientRect().left+window.scrollX))/stepPx)*step;
      }else if(marks){
        const closeCurrentValue = (evt.pageX - (railRef.current.getBoundingClientRect().left+window.scrollX)) / railRef.current.clientWidth * (max-min);
        marks.forEach((mark,index) => {
          if(index === 0){
            nextCurrentValue = mark.value;
          }else if(Math.abs(mark.value - closeCurrentValue) < Math.abs(nextCurrentValue as number - closeCurrentValue)){
            nextCurrentValue = mark.value;
          }
        });
      }
      if(range){
        if(Math.abs(currentValue[0]-nextCurrentValue) < Math.abs(currentValue[1]-nextCurrentValue)){
          nextCurrentValue = [nextCurrentValue,currentValue[1]];
        }else{
          nextCurrentValue = [currentValue[0],nextCurrentValue];
        }
      }
      calcLeft(nextCurrentValue)
    }
  }
  //点击滑块回调
  const handleClick:React.MouseEventHandler = (evt) => {
    evt.stopPropagation();
  }
  //点击刻度回调
  const handleMarkClick: (markValue:number) => React.MouseEventHandler = (markValue) => (evt) => {
    if(disabled) return;
    evt.stopPropagation();
    let nextCurrentValue: number|Array<number> = markValue;
    if(range){
      if(Math.abs(currentValue[0]-nextCurrentValue) < Math.abs(currentValue[1]-nextCurrentValue)){
        nextCurrentValue = [nextCurrentValue,currentValue[1]];
      }else{
        nextCurrentValue = [currentValue[0],nextCurrentValue];
      }
    }
    calcLeft(nextCurrentValue);
  }
  const trackWidth = range ? Math.abs(left[1]-left[0]) : left as number;
  const trackLeft = range ? left[1]<left[0] ? left[1] : left[0] : 0;
  return (
    <div
      className={classNames(prefixCls, {[`${prefixCls}-disabled`]: disabled},className)}
      onClick={handleSliderClick}
    >
      <div className={`${prefixCls}-rail`} ref={railRef}></div>
      {
        range ? (currentValue as Array<number>).map((item,index) => (
          <Tooltip
            content={(tooltipContent as Array<ReactNode>)[index]}
            getPopupContainer={() => handleRef[index].current}
            visible={isHover[index] || isDrag[index]}
            key={index}
          >
            <div
              ref={handleRef[index]}
              className={`${prefixCls}-handle`}
              onMouseDown={handleMouseDown(currentValue,index)}
              style={{left:left[index],display:isShowHandle?'flex':'none'}}
              onMouseEnter={handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <div className={`${prefixCls}-icon`}></div>
            </div>
          </Tooltip>
        )) : (
          <Tooltip
            content={tooltipContent}
            getPopupContainer={() => (handleRef as React.RefObject<HTMLDivElement>).current}
            visible={isHover as boolean || isDrag as boolean}
          >
            <div
              ref={handleRef as React.RefObject<HTMLDivElement>}
              className={`${prefixCls}-handle`}
              onMouseDown={handleMouseDown(currentValue)}
              style={{left:left as number,display:isShowHandle?'flex':'none'}}
              onMouseEnter={handleMouseEnter()}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <div className={`${prefixCls}-icon`}></div>
            </div>
          </Tooltip>
        )
      }
      <div className={`${prefixCls}-track`} style={{width:trackWidth,left:trackLeft}}></div>
      <div className={`${prefixCls}-marks`}>
        {
          marks ? marks.map(mark => (
            <span
                key={mark.value} className={`${prefixCls}-dot`}
                style={{left: mark.value/(max-min)*100 + '%'}}
                onClick={handleMarkClick(mark.value)}
            >
              <span className={classNames(`${prefixCls}-mark`,{
                [`${prefixCls}-mark-active`]:range ? (currentValue as Array<number>).includes(mark.value) : currentValue === mark.value
              })}>{mark.label}</span>
            </span>
          )) : null
        }
      </div>
    </div>
  )
}

Slider.displayName = 'Slider'

export { Slider }
