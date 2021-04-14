import React, { CSSProperties, ReactPortal, useEffect, useState, useMemo } from 'react';
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
  const [tabChildren, setTabChildren] = useState([] as ReactPortal[]);

  useMemo(() => {
    if (children && typeof children === 'object') {
      let newTabChildren: ReactPortal[] = [];
      React.Children.forEach(children as ReactPortal[], (child: ReactPortal) => {
        if (typeof child === 'object' && (child.props as TabPaneProps)) {
          if (child.props.tab) {
            newTabChildren.push(child);
          }
        }
      });
      setTabChildren(newTabChildren);
    }
  }, []);

  useEffect(() => {
    if (tabChildren) {
      tabChildren.forEach((child, index) => {
        if (
          child.key &&
          (defaultActiveKey || activeKey) &&
          (child.key === defaultActiveKey || child.key === activeKey)
        ) {
          setActiveIndex(index);
        }
      });
    }
  }, [activeKey, tabChildren]);

  return (
    <div className={componentClassNames('pui-tabs', {}, className)} style={style}>
      <div className={componentClassNames('pui-tabs-header', {})}>
        {tabChildren.map((child, index: number) => {
          return (
            <div
              key={child.key || index}
              className={componentClassNames('pui-tab', {
                size,
                active: (index === acitveIndex) + '',
                disabled: child.props.disabled ? 'true' : 'false'
              })}
              onClick={() => {
                if (child.props.disabled) {
                  return;
                }
                setActiveIndex(index);
              }}
            >
              {child.props.tab}
            </div>
          );
        })}
      </div>
      <div className={componentClassNames('pui-tabs-body', {})}>
        {tabChildren.map((child, index: number) => {
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

Tabs.TabPane = ({ tab, children, disabled = false }: TabPaneProps) => {
  return (
    <div>
      <div>{tab}</div>
      <div>{children}</div>
    </div>
  );
};
export { Tabs };
