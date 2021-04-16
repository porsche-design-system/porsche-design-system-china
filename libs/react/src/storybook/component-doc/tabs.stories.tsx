import React, { useState } from 'react';
import { Tabs, TabPane, Input } from '../../';

export default {
  title: 'Data Display/Tabs',
  component: Tabs
};

export const TabsStoryBook = () => {
  const [activeKey, setActiveKey] = useState('0');
  return (
    <div className="group">
      <div className="type">Sizes</div>
      <div className="showcase">
        <Tabs>
          <TabPane tab="标题一">内容一</TabPane>
          <TabPane tab="标题二" disabled={true}>
            内容二
          </TabPane>
          <TabPane tab="标题三">
            <Input label="用户名" />
          </TabPane>
        </Tabs>

        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="标题一" key="0">
            内容一
          </TabPane>
          <TabPane tab="标题二" key="1">
            <Input label="用户名" />
          </TabPane>
          <TabPane tab="标题三" key="2">
            内容三
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

TabsStoryBook.storyName = 'Tabs';
