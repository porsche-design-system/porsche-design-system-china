import React, { CSSProperties, ReactElement } from 'react';
import { componentClassNames } from '../../shared/class-util';

import './button.scss';

export interface Props {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 样式 */
  style?: CSSProperties;
  /** 类型 */
  type?: 'default' | 'primary' | 'secondary' | 'text';
  /** 大小 */
  size?: 'default' | 'small';
  /** 图标 */
  icon?: ReactElement;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否禁用 */
  disabled?: boolean;

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler;
  onMouseDown?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  className,
  children,
  style,
  type = 'default',
  size = 'default',
  icon,
  loading = false,
  disabled = false,
  onClick,
  onMouseDown
}: Props) => {
  let paddingStyle = {};
  const padding = size === 'default' ? '11px' : '7px';
  if (!children) {
    paddingStyle = { padding: '0 ' + padding };
  } else if (icon || loading) {
    paddingStyle = { paddingLeft: padding };
  }

  const loadingSize = size === 'default' ? 24 : 20;

  return (
    <button
      type="button"
      className={componentClassNames('pui-button', { type, size }, className)}
      style={{ ...paddingStyle, ...style }}
      onClick={evt => {
        if (!loading) {
          onClick && onClick(evt);
        }
      }}
      onMouseDown={onMouseDown}
      disabled={disabled || loading}
    >
      {loading && (
        <span className="pui-button-icon">
          <svg height={loadingSize} width={loadingSize}>
            <circle
              className="pui-button-loading-circle2"
              cx={loadingSize / 2}
              cy={loadingSize / 2}
              r={loadingSize / 4}
            />
            <circle
              className="pui-button-loading-circle"
              cx={loadingSize / 2}
              cy={loadingSize / 2}
              r={loadingSize / 4}
            />
          </svg>
        </span>
      )}
      {icon && !loading && <span className="pui-button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export { Button };
