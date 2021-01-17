import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import { AtomicStyle } from '../../shared/interface';

export interface ContentStyle extends AtomicStyle {
  // flex of aside
  asideFlex?: number,
  // flex of content
  contentFlex?: number
}

interface ContentProps {
  // flex of aside
  asideFlex?: number,
  // flex of content
	contentFlex?: number,
	contentStyle?: ContentStyle
};

const Content: FC<ContentProps> = props => {
  const {
    contentStyle
	} = props;

	return (
		<div className={`${contentStyle?.asideFlex ? 'flex' : 'fix'}-container `} style={contentStyle?.own||{}}>
			{props.children}
		</div>
	)
}

export {Content};
