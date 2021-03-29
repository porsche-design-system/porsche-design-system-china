import React, { CSSProperties, useEffect, useState } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './tabs.scss';

export interface Props {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 样式 */
  style?: CSSProperties;

  /** 大小 */
  size?: 'large' | 'middle' | 'small';

  /** Current TabPane's key */
  activeKey: string;

  // 组件事件 //
}

const Tabs = ({ className, style, size = 'middle', activeKey = '0', children }: Props) => {
  const [currentKey, setCurrentKey] = useState(activeKey);
  const [content, setContent] = useState('');
  useEffect(() => {
    if (children) {
      let found = false;
      children.forEach((child: React.ReactChild, index: number) => {   
        if (child.key === currentKey) {
            found = true;
            if(child.props.disabled){
               return;
            }else{
                setContent(child.props.children);
            }
        }
      });

      if (!found) {
          if(!children[currentKey].props.disabled){
            setContent(
                children[currentKey].props.children
                  ? children[currentKey].props.children
                  : children[0].props.children
              );
          }      
      }
    }
  }, [currentKey]);
  return (
    <div className={componentClassNames('pui-tabs', { size }, className)} style={style}>
      <div className={componentClassNames('pui-tabs-header', { size })}>
        {children &&
          children.length &&
          children.map((child: React.ReactNode, index: number) => {
            
            return (
              <div
                className={componentClassNames(
                  'pui-tab',
                  { size },
                  { active: currentKey === child.key || currentKey === index + '',  disabled:child.props.disabled}
                 
                )}
                style={child.props.style}
                key={child.key || index + ''}
                onClick={() => {
                   if(child.props.disabled){
                       return ;
                   }
                   if(child.props.onClick){
                       child.props.onClick();   
                   }
                  setCurrentKey(child.key || index + '');
                }}
              >
                {child.props.tab}
              </div>
            );
          })}
      </div>

      <div className={componentClassNames('pui-tabs-body', { size }, className)}>{content}</div>
    </div>
  );
};

interface TabPaneProps {
  tab: string;
  key: string;

  /** 子组件 */
  children?: React.ReactNode;
  /** 样式 */
  style?: CSSProperties;

    /** 是否禁用 */
  disabled?: boolean;

  /* 点击事件 */
  onClick?: React.MouseEventHandler;
}

Tabs.TabPane = ({ tab, style, children, key, disabled,onClick }: TabPaneProps) => {
  return (
    <div style={style} onClick={onClick} key={key} disabled={disabled}>
      <div>{tab}</div>
      <div>{children}</div>
    </div>
  );
};
export { Tabs };
