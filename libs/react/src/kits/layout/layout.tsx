import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { AtomicStyle } from '../../shared/interface';

export interface LayoutStyle extends AtomicStyle {
  // flex of aside
  asideFlex?: number,
  // flex of content
	contentFlex?: number
}

type LayoutProps = {
  // Some callbacks of events
  // Style object
	layoutStyle?: LayoutStyle | any;
	hasTop?: boolean
};

const Layout: FC<LayoutProps> = (props) => {
  const {
    layoutStyle
	} = props;
  return (
    <section className="pui-layout align-items-center" style={layoutStyle?.own || {}}>
			{props.children}
		</section>
  );
};

Layout.propTypes = {
  // Have the top bar ?
  hasTop: PropTypes.bool,
  // Style object
  layoutStyle: PropTypes.any
};

export default Layout;
