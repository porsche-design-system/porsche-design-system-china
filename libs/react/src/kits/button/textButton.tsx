import React, { PropsWithChildren, FC } from 'react';
import cn from 'classnames';
import { ButtonLevel, ButtonStatus, ButtonSize } from './types';
import './button-dark.scss';

export type TextButtonProps = {
	/** 优先级? */
	buttonLevel?: ButtonLevel;
  // /** 类型？ */
  // buttonType?: ButtonType;
  /** 尺寸？ */
  buttonSize?: ButtonSize;
  /** 状态? */
  buttonStatus?: ButtonStatus;
  /** 图标？ */
  icon?: React.ReactNode;
  /** 是否加载？ */
  loading?: boolean | { delay?: number };
  /** 传入参数？ */
  prefixCls?: string;
  /** 类名？ */
  className?: string;
  /** 子组件？ */
  children?: React.ReactNode;
  /** 样式 */
	style?: object;
	/** event callback */
	clickCallback?: React.MouseEventHandler

};

const TextButton: FC<TextButtonProps> = (props: PropsWithChildren<TextButtonProps>) => {
	const { children, className, buttonLevel,
		buttonSize, style, clickCallback
	} = props;

  return (
    <button
      type="button"
      className={cn('pui-text-button', `pui-button-${buttonLevel}`, className|| '')}
			style={{...style, width: buttonSize}}
			onClick={clickCallback}
    >
      {children}
    </button>
  );
};

TextButton.defaultProps = {
  type: 'primary'
} as any;

export {TextButton};
