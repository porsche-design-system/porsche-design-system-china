import React, { CSSProperties, useEffect, useState, useMemo } from 'react';
import { componentClassNames,filterChildren } from '../../shared/class-util';
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
  size?: 'default' | 'small';

  /** 初始化选中面板的 key，如果没有设置 activeKey  */
  defaultActiveKey?: string;

  /** 当前激活 tab 面板的 key  */
  activeKey?: string;

  // 组件事件 //
}

const Tabs = ({
  className,
  style,
  size = 'default',
  defaultActiveKey,
  activeKey,
  children
}: Props) => {
  const [acitveIndex, setActiveIndex] = useState(0);
  const [tabChildren, setTabChildren] = useState([]);
  useMemo(() => { 
    setTabChildren(filterChildren(children,'TabPane',false) || []);
  }, [children]);

  useEffect(() => {
      console.log('tabChildren',tabChildren);
      tabChildren.forEach((child:any, index:number) => {
        if (
          (defaultActiveKey || activeKey) &&
          (child.key === '.$'+defaultActiveKey || child.key === '.$'+activeKey)
        ) {
          setActiveIndex(index);
        }
      });
    
  }, [activeKey, tabChildren]);

  return (
    <div className={componentClassNames('pui-tabs', {}, className)} style={style}>
      <div className={componentClassNames('pui-tabs-header', {})}>
        {tabChildren.map((child:any, index: number) => {
          return (
            <div
              key={child.key || index}
              className={componentClassNames('pui-tab', {
                size,
                active: (index === acitveIndex) + '',
                disabled: child.props && child.props.disabled ? 'true' : 'false'
              })}
              onClick={() => {
                if (child.props.disabled) {
                  return;
                }
                setActiveIndex(index);
              }}
            >
              <span data-text={child.props.tab || '未定义Tab头'}>{child.props.tab || '未定义Tab头'}</span>
            </div>
          ); 
        })}
      </div>
      <div className={componentClassNames('pui-tabs-body', {})}>
        {tabChildren.map((child:any, index: number) => {
          return (
            <div
              key={child.key || index}
              className={componentClassNames('pui-tabs-content', {
                active: (index === acitveIndex) + ''
              })}
            >
              {child.props.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TabPaneProps {
  /** 选项卡头显示文字 */
  tab: string;

  /** 对应 activeKey */
  key: string;

  /** 子组件 */
  children?: React.ReactNode;

  /** 是否禁用 */
  disabled?: boolean;

}

const TabPane = ({ tab, children, disabled = false }: TabPaneProps) => {
  return (
    <div>
      <div>{tab}</div>
      <div>{children}</div>
    </div>
  );
};
export { Tabs ,TabPane};
