import React from 'react';

import {PorBackdrop} from '../../kits';
import './index.scss';

const footerValue='© 2020 保时捷（中国）汽车销售有限公司 法律声明 English Version 1.0.0 沪ICP备10013326号';
const PorFooter=(props:any)=>{
  const {text}=props;
  return (
    <div className="por-footer">
      <PorBackdrop type="dark">
        {text?text:footerValue}
      </PorBackdrop>
    </div>
  )
};

export default PorFooter;
