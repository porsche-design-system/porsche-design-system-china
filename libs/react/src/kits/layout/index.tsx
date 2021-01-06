import React, { FC } from 'react';
import PropTypes from 'prop-types';

import './layout.sass';

interface LayoutStyle {
  // flex of aside
  asideFlex?: number;
  // flex of content
  contentFlex?: number;
}
interface HeaderStyle {
	style?: object
}

export type HeaderProps = {
  // Have the top bar ?
  hasTop?: boolean;
  // Some callbacks of events
  // Style object
  headerStyle?: HeaderStyle | any;
};
const Header: FC<HeaderProps> = props => {
	const {hasTop, headerStyle} = props;

	return (
		<header className={hasTop ? 'with-top' : ''}>
		<div className="bar" style={headerStyle}/>
			{hasTop && <div className="top" />}
		</header>
	)
}
interface ContentStyle {
  // flex of aside
  asideFlex?: number;
  // flex of content
  contentFlex?: number;
}
export type ContentProps = {
  // Have the top bar ?
  hasTop?: boolean;
  // flex of aside
  asideFlex?: number;
  // flex of content
	contentFlex?: number;
	style: ContentStyle
};
const Content: FC<ContentProps> = props => {
  const {
    style: { asideFlex, contentFlex }
	} = props;

	return (
		<div className={`${asideFlex ? 'flex' : 'fix'}-container `}>
			<aside className="" style={{ flex: asideFlex }}>
				aside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
				fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
				fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
				fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
			</aside>
			<div className="content" style={{ flex: contentFlex }}>
				content
			</div>
		</div>
	)
}


interface AsideStyle {
	asideFlex: number,
	contentFlex: number
}
export type AsideProps = {
	style: AsideStyle
};
const Aside: FC<AsideProps> = props => {
  const {
    style: { asideFlex }
	} = props;

	return (
		<aside className="" style={{ flex: asideFlex }}>
			aside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
			fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
			fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
			fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
		</aside>
	)
}
export type LayoutProps = {
  // Have the top bar ?
  hasTop?: boolean;
  // Some callbacks of events
  // Style object
  style?: LayoutStyle | any;
};
const Layout: FC<LayoutProps> = props => {
  const {
    hasTop,
    style
	} = props;

  return (
    <section className="pui-layout align-items-center">
      <Header hasTop={hasTop} headerStyle={{}}/>
			<Content style={style}>
				<Aside {...style} />
			</Content>

      <footer className="">Footer</footer>
    </section>
  );
};

Layout.propTypes = {
  // Have the top bar ?
  hasTop: PropTypes.bool,
  // Style object
  style: PropTypes.any
};

export default Layout;
