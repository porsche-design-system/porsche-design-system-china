import React, { PropsWithChildren } from 'react'
import cn from 'classnames'
import { ButtonType, ButtonTypes, SizeType } from './types'

import './style.scss'


export type ButtonProps = {
	/** 类型？ */
	type?: ButtonType;
	/** 图标？ */
	icon?: React.ReactNode;
	/** 尺寸？ */
	size?: SizeType;
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
};

function Button(props: PropsWithChildren<ButtonProps>) {
	const { children, className, type = 'default', style } = props;

	return (
		<button className={cn('pos-button', `pos-button-${type}`, className)} style={style}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: 'primary',
};

export default Button;
