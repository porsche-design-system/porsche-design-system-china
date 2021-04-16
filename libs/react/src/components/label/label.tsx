import React, { CSSProperties } from 'react';
import { IconAsterisk } from '@pui/icons';
import { componentClassNames } from '../../shared/class-util';
import './label.scss';

export interface LabelProps {
  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 标签 */
  text: string;

  /* 标签位置 */
  textAlign?: 'left' | 'right';

  /* 位置 */
  position?: 'left' | 'top';

  /* 标签宽度 */
  width?: string;

  /* 显示必填星号 */
  requiredMark?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Label = (props: LabelProps) => {
  const {
    className,
    style,
    text,
    position = 'top',
    textAlign = 'left',
    requiredMark = false
  } = props as LabelProps;

  const star = (
    <span className="pui-label-star">
      <IconAsterisk style={{ fontSize: '13px' }} />
    </span>
  );

  if (!text && position === 'top') {
    return null;
  }

  return (
    <div
      className={componentClassNames('pui-label', { position }, className)}
      style={{
        ...style,
        width: position === 'top' ? 'auto' : getLabelWidth(props),
        textAlign
      }}
    >
      {requiredMark && textAlign === 'right' && star}
      {text}
      {requiredMark && textAlign === 'left' && star}
    </div>
  );
};

const getLabelWidth = (props?: LabelProps | string) => {
  if (typeof props === 'string' || !props) {
    return '0px';
  }

  if (typeof props === 'object') {
    if (props.position === 'top' || !props.position) {
      return '0px';
    }
  }
  let width = null;
  if (typeof props === 'object') {
    width = props.width;
  }
  return width || '100px';
};

const getLabelProps = (props?: LabelProps | string): LabelProps => {
  if (!props) {
    return { text: '' };
  }
  if (typeof props === 'string') {
    return { text: props };
  }
  return props;
};

export { Label, getLabelWidth, getLabelProps };
