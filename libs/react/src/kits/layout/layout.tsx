import React, { FC } from 'react';
import PropTypes from 'prop-types';

import './layout.sass';

interface LayoutStyle {
  // flex of aside
  asideFlex?: number;
  // flex of content
  contentFlex?: number;
}

export type LayoutProps = {
  // Have the top bar ?
  hasTop?: boolean;
  // Some callbacks of events
  // Style object
  style?: LayoutStyle;
};

const Layout: FC<LayoutProps> = props => {
  const {
    hasTop,
    style: { asideFlex, contentFlex }
  } = props;

  return (
    <section className="pui-layout align-items-center">
      <header className={hasTop ? 'with-top' : ''}>
        <div className="bar" />
        {hasTop && <div className="top" />}
      </header>
      <div className={`${asideFlex ? 'flex' : 'fix'}-container `}>
        <aside className="" style={{ flex: asideFlex }}>
          aside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside
          fixedaside fixedaside fixedaside fixedaside fixedaside fixedaside fixed
        </aside>
        <div className="content" style={{ flex: contentFlex }}>
          content
        </div>
      </div>
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
