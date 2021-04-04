import React, { ChangeEventHandler, CSSProperties, useEffect, useRef } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './radio-group.scss';

export interface Props {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 样式 */
  style?: CSSProperties;

  /* 值 */
  value?: string | number;

  /** 是否禁用 */
  disabled?: boolean;

  /* 点击事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /** 子组件 */
  children?: React.ReactNode;
}

let idCounter = 0;
const generateId = () => {
  idCounter++;
  return 'radio-group-' + idCounter;
};
const RadioGroup = ({ className, style, disabled = false, children, onChange, value }: Props) => {
  const radioButtons = useRef<HTMLInputElement[]>();

  const refLoaded = (radioGroup: HTMLDivElement) => {
    if (!radioGroup) {
      return;
    }
    radioButtons.current = [].slice.call(radioGroup.getElementsByTagName('input'));
    const radioGroupName = generateId();
    radioButtons.current.forEach(radioButton => {
      radioButton.onchange = onChange as any;
      radioButton.name = radioGroupName;
      if (value) {
        radioButton.checked = radioButton.value === value;
      }
    });
  };

  useEffect(() => {
    if (radioButtons.current) {
      radioButtons.current.forEach(radioButton => {
        radioButton.onchange = onChange as any;
        if (value) {
          radioButton.checked = radioButton.value === value;
        }
      });
    }
  }, [value]);

  return (
    <div
      className={componentClassNames('pui-radio-group', { disabled: disabled + '' }, className)}
      style={style}
      ref={refLoaded}
    >
      {children}
    </div>
  );
};

export { RadioGroup };
