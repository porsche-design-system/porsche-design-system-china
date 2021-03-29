import React from 'react';
import { Tabs, Input } from '../../';
const { TabPane } = Tabs;

export default {
  title: 'Data Display/Tabs',
  component: Tabs
};

export const TabsStoryBook = () => {
  return (
    <div className="group">
      <div className="type">Sizes</div>
      <div className="showcase">
        <Tabs activeKey="0" size="large">
          <TabPane tab="标题一" key="0" disabled={true}></TabPane>
          <TabPane tab="标题二" key="1"></TabPane>
          <TabPane tab="标题三" key="2"></TabPane>
        </Tabs>

        <Tabs size="middle">
          <TabPane tab="标题一"></TabPane>
          <TabPane tab="标题二" disabled={true}></TabPane>
          <TabPane tab="标题三"></TabPane>
        </Tabs>

        <Tabs activeKey="0" size="small">
          <TabPane tab="标题一" key="0">
            <Input />
          </TabPane>
          <TabPane tab="标题二" key="1"></TabPane>
          <TabPane tab="标题三" key="2"></TabPane>
        </Tabs>
      </div>
    </div>
  );
};

TabsStoryBook.storyName = 'Tabs';
