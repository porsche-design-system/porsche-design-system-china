import React, { FC } from 'react';
import { AtomicStyle } from '../../shared/interface';

export interface AsideStyle extends AtomicStyle {
	asideFlex?: number,
	contentFlex?: number,
}

interface AsideProps {
	asideStyle: AsideStyle
};

const Aside: FC<AsideProps> = props => {
  const {
    asideStyle
	} = props;

	return (
		<aside className="" style={{...asideStyle.own}}>
			{props.children}
		</aside>
	)
}

export {Aside}
