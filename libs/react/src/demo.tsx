import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from './kits';

ReactDOM.render(
  <Layout
    {...{
      hasTop: true,
      style: {
        asideFlex: 1,
        contentFlex: 5
      }
    }}
  />,
  window.document.getElementById('box')
);
