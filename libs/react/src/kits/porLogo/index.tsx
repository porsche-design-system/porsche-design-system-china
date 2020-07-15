import React from 'react';

import logo from '../shared/assets/images/porscheIcon.png';
import './index.scss';

const  PorLogoLine=(props:any)=>{
  const {src, border}=props;
  return (
    <div className="logo">
      {
        border !== 'none' &&  <div className="logo-line" />
      }
      <img src={src?src:logo} className={border==='none'?'img-no-line':'img-line'} alt="logo" />
      {
        border !== 'none' && <div className="logo-line" />
      }
    </div>
  )
};

export default PorLogoLine;
