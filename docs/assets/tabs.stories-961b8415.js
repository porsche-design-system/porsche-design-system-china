import{j as n,a}from"./jsx-runtime-e43ccb36.js";import{r as l}from"./index-1b03fe98.js";/* empty css              */import{w as t,x as e,I as r}from"./custom-picker-1a2c1035.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const A={title:"Data Display/Tabs",component:t,subcomponents:{TabPane:e}},s=()=>{const[d,h]=l.useState("Tab3"),[m,v]=l.useState("Tab18"),u=new Array(30).fill(1).map((b,i)=>`Tab${i+1}`);return n("div",{className:"group",children:[n("div",{className:"showcase",children:[a("div",{className:"tabs-session-title",children:"底部无线"}),n(t,{children:[a(e,{title:"标题一",children:"内容一"}),a(e,{title:"标题二",children:"内容二"}),a(e,{title:"标题三",children:a(r,{label:"用户名"})})]})]}),a("br",{}),a("br",{}),n("div",{className:"showcase",children:[a("div",{className:"tabs-session-title",children:"底部有线"}),n(t,{hasLine:!0,children:[a(e,{title:"标题一",children:"内容一"}),a(e,{title:"标题二",children:"内容二"}),a(e,{title:"标题三",children:a(r,{label:"用户名"})})]})]}),a("br",{}),a("br",{}),n("div",{className:"showcase",children:[a("div",{className:"tabs-session-title",children:"受控Tab"}),n(t,{hasLine:!0,activeKey:d,onActiveKeyChange:h,children:[a(e,{title:"标题一",tabKey:"Tab1",children:"内容一"}),a(e,{title:"标题二",tabKey:"Tab2",children:"内容二"}),a(e,{title:"标题三",tabKey:"Tab3",children:a(r,{label:"用户名"})})]})]}),a("br",{}),a("br",{}),n("div",{className:"showcase",children:[a("div",{className:"tabs-session-title",children:"溢出Tab"}),a(t,{scrollable:!0,hasLine:!0,activeKey:m,onActiveKeyChange:v,children:u.map((b,i)=>n(e,{title:`标题${i+1}`,tabKey:b,children:["内容",i+1]}))})]})]})};s.storyName="Tabs";var c,o,T;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [currentTab, setCurrentTab] = useState('Tab3');
  const [currentTab2, setCurrentTab2] = useState('Tab18');
  const tabArray = new Array(30).fill(1).map((_, index) => \`Tab\${index + 1}\`);
  return <div className="group">
      <div className="showcase">
        <div className="tabs-session-title">底部无线</div>
        <Tabs>
          <TabPane title="标题一">内容一</TabPane>
          <TabPane title="标题二">内容二</TabPane>
          <TabPane title="标题三">
            <Input label="用户名" />
          </TabPane>
        </Tabs>
      </div>
      <br />
      <br />
      <div className="showcase">
        <div className="tabs-session-title">底部有线</div>
        <Tabs hasLine>
          <TabPane title="标题一">内容一</TabPane>
          <TabPane title="标题二">内容二</TabPane>
          <TabPane title="标题三">
            <Input label="用户名" />
          </TabPane>
        </Tabs>
      </div>

      <br />
      <br />

      <div className="showcase">
        <div className="tabs-session-title">受控Tab</div>
        <Tabs hasLine activeKey={currentTab} onActiveKeyChange={setCurrentTab}>
          <TabPane title="标题一" tabKey="Tab1">
            内容一
          </TabPane>
          <TabPane title="标题二" tabKey="Tab2">
            内容二
          </TabPane>
          <TabPane title="标题三" tabKey="Tab3">
            <Input label="用户名" />
          </TabPane>
        </Tabs>
      </div>

      <br />
      <br />

      <div className="showcase">
        <div className="tabs-session-title">溢出Tab</div>
        <Tabs scrollable hasLine activeKey={currentTab2} onActiveKeyChange={setCurrentTab2}>
          {tabArray.map((tab, index) => <TabPane title={\`标题\${index + 1}\`} tabKey={tab}>
              内容{index + 1}
            </TabPane>)}
        </Tabs>
      </div>
    </div>;
}`,...(T=(o=s.parameters)==null?void 0:o.docs)==null?void 0:T.source}}};const g=["TabsStoryBook"];export{s as TabsStoryBook,g as __namedExportsOrder,A as default};
//# sourceMappingURL=tabs.stories-961b8415.js.map
