import React from 'react';
import './index.scss';

const NotFound: React.FC = () => {
  return (
    <div className="por-error-tip">
      <div className="type">404</div>
      <div className="text">抱歉，你访问的页面不存在</div>
    </div>
  )
};

export default NotFound;
