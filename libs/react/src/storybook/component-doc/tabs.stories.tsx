import React from 'react';
import { Tabs, TabPane, Input } from '../../';

export default {
  title: 'Data Display/Tabs',
  component: Tabs
};

export const TabsStoryBook = () => {
  return (
    <div className="group">
      <div className="type">Sizes</div>
      <div className="showcase">
        <Tabs>
          <TabPane tabTitle="标题一">内容一</TabPane>
          <TabPane tabTitle="标题二">内容二</TabPane>
          <TabPane tabTitle="标题三">
            <Input label="用户名" />
          </TabPane>
        </Tabs>

        <Tabs size="small" defaultActiveKey="1">
          <TabPane tabTitle="标题一" tabKey="sssss">
            内容一
          </TabPane>

          <TabPane tabTitle="标题二" tabKey="2">
            内容二
            <Input label="用户名" />
          </TabPane>
          <TabPane tabTitle="标题三">内容三</TabPane>
        </Tabs>
      </div>
    </div>
  );
};

TabsStoryBook.storyName = 'Tabs';
