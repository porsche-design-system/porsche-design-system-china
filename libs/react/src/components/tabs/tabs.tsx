import React, { CSSProperties, useEffect, useState } from 'react';
import { componentClassNames, overrideChildren } from '../../shared/class-util';
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
}

const Tabs = ({ className, style, size = 'default', defaultActiveKey = '', children }: Props) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const tabHead: TabPaneProps[] = [];
  let keyIndex = 0;

  const newChildren = overrideChildren(children, (elementName, props: TabPaneProps) => {
    if (elementName === 'TabPane') {
      if (!props.tabKey) {
        props.tabKey = '$TabKey' + keyIndex;
        keyIndex++;
      }
      tabHead.push(props);
      (props as any).show = activeKey === props.tabKey;
    }
    return props;
  });

  useEffect(() => {
    if (!defaultActiveKey) {
      setActiveKey(tabHead[0].tabKey!);
    }
  }, []);

  return (
    <div className={componentClassNames('pui-tabs', {}, className)} style={style}>
      <div className="pui-tabs-header">
        {tabHead.map((tabProps, inx) => (
          <div
            className={componentClassNames('pui-tab', {
              size,
              active: (tabProps.tabKey === activeKey) + ''
            })}
            key={'TabKey' + inx}
            onClick={() => {
              setActiveKey(tabProps.tabKey!);
            }}
          >
            <span>{tabProps.tabTitle}</span>
          </div>
        ))}
      </div>
      <div className="pui-tabs-body">{newChildren}</div>
    </div>
  );
};

interface TabPaneProps {
  /** 选项卡头显示文字 */
  tabTitle: string;

  /** 对应 activeKey */
  tabKey?: string;

  /** 子组件 */
  children?: React.ReactNode;
}

const TabPane = (props: TabPaneProps) => {
  return (
    <>
      {
        <div
          style={{ display: (props as any).show ? 'block' : 'none' }}
          className="pui-tabs-content"
        >
          {props.children}
        </div>
      }
    </>
  );
};

export { Tabs, TabPane };
