import React, { CSSProperties, ReactElement } from 'react';
import { componentClassNames } from '../../shared/class-util';
import { IconAdd } from '@pui/icons';
type PUIIcon = typeof IconAdd;

import './button.scss';
import classNames from 'classnames';

export interface ButtonProps {
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
  icon?: PUIIcon | ReactElement;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否禁用 */
  disabled?: boolean;

  /* 是否是表单提交按钮 */
  formSubmit?: boolean;

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
}: ButtonProps) => {
  let paddingStyle = {};
  const padding = size === 'default' ? '11px' : '7px';
  if (!children) {
    paddingStyle = { padding: '0 ' + padding };
  } else if (icon || loading) {
    paddingStyle = { paddingLeft: padding };
  }

  const loadingSize = size === 'default' ? 24 : 20;
  const IconComponent = icon as any;
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
        <span className={classNames('pui-button-icon', children ? 'pui-button-icon-content' : '')}>
          <svg height={loadingSize} width={loadingSize} className="pui-button-loading-svg">
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

      {icon && !loading && (
        <span className={classNames('pui-button-icon', children ? 'pui-button-icon-content' : '')}>
          {IconComponent['$$typeof'].toString() === 'Symbol(react.element)' ? (
            IconComponent
          ) : (
            <IconComponent />
          )}
        </span>
      )}
      <span className="pui-button-content">{children}</span>
    </button>
  );
};

export { Button };
