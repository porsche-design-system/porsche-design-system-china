import{a as t,j as i,F as s}from"./jsx-runtime-e43ccb36.js";import{r as x,R as B}from"./index-1b03fe98.js";/* empty css              */import{L as n,O as l,w as S,x as p}from"./custom-picker-1a2c1035.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const P={title:"Foundation/Split Button",component:n},a=()=>(x.useEffect(()=>{const r=document.getElementById("anchor--foundation-split-button--split-button-story-book");r&&(r.style.display="none");const d=document.getElementsByClassName("sbdocs-title");if(d.length>0){const e=d[0];e.style.marginBottom="48px"}}),t("div",{}));a.storyName="SplitButton";const o=()=>{const[r,d]=B.useState("sign"),e=i(l,{activeIndex:r,onSelect:d,children:[t(l.Item,{selectAfter:!0,index:"sign",onClick:()=>{console.log("电子签署")},children:"电子签署"}),t(l.Item,{selectAfter:!0,index:"item2",onClick:()=>{console.log(" 2nd Item")},children:"2nd Item"}),t(l.Item,{selectAfter:!0,index:"item3",onClick:()=>{console.log(" 3nd Item")},children:"3rd Item"}),t(l.Item,{selectAfter:!0,index:"item4",onClick:()=>{console.log(" 4nd Item")},children:"4th Item"})]});return t("div",{children:i(S,{size:"small",hasLine:!0,children:[t(p,{tabKey:"split",title:"the Split Button",children:t(()=>t(s,{children:i("div",{className:"flex",children:[t(n,{overlay:e,type:"primary",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"secondary",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"default",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"text",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"link",marginRight:"20px",children:"电子签署"})]})}),{})}),t(p,{tabKey:"disabled",title:"disabled",children:t(()=>t(s,{children:i("div",{className:"flex",children:[t(n,{overlay:e,type:"primary",disabled:!0,marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"secondary",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"default",disabled:!0,marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"text",disabled:!0,marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"link",disabled:!0,marginRight:"20px",children:"电子签署"})]})}),{})}),t(p,{tabKey:"loading",title:"loading",children:t(()=>t(s,{children:i("div",{className:"flex",children:[t(n,{overlay:e,type:"primary",loading:!0,marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"secondary",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"default",loading:!0,marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"text",loading:!0,marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"link",loading:!0,marginRight:"20px",children:"电子签署"})]})}),{})}),t(p,{tabKey:"tiny",title:"tiny",children:t(()=>t(s,{children:i("div",{className:"flex",children:[t(n,{overlay:e,type:"primary",size:"tiny",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"secondary",marginRight:"20px",size:"tiny",children:"电子签署"}),t(n,{overlay:e,type:"default",size:"tiny",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"text",size:"tiny",marginRight:"20px",children:"电子签署"}),t(n,{overlay:e,type:"link",size:"tiny",marginRight:"20px",children:"电子签署"})]})}),{})})]})})};o.storyName="Split Button";var u,y,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  useEffect(() => {
    const mainStory = document.getElementById('anchor--foundation-split-button--split-button-story-book');
    if (mainStory) {
      mainStory.style.display = 'none';
    }
    const mainTitles = document.getElementsByClassName('sbdocs-title');
    if (mainTitles.length > 0) {
      const mainTitle = (mainTitles[0] as HTMLElement);
      mainTitle.style.marginBottom = '48px';
    }
  });
  return <div />;
}`,...(m=(y=a.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var c,g,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [index, setIndex] = React.useState('sign');
  const defaultMenu = <Menu activeIndex={index} onSelect={setIndex}>
      <Menu.Item selectAfter index="sign" onClick={() => {
      console.log('电子签署');
    }}>
        电子签署
      </Menu.Item>
      <Menu.Item selectAfter index="item2" onClick={() => {
      console.log(' 2nd Item');
    }}>
        2nd Item
      </Menu.Item>
      <Menu.Item selectAfter index="item3" onClick={() => {
      console.log(' 3nd Item');
    }}>
        3rd Item
      </Menu.Item>
      <Menu.Item selectAfter index="item4" onClick={() => {
      console.log(' 4nd Item');
    }}>
        4th Item
      </Menu.Item>
    </Menu>;
  const Tab1 = () => {
    return <>
        <div className="flex">
          <SplitButton overlay={defaultMenu} type="primary" marginRight="20px">
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="secondary" marginRight="20px">
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="default" marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="text" marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="link" marginRight="20px">
            电子签署
          </SplitButton>
        </div>
      </>;
  };
  const Tab2 = () => {
    return <>
        <div className="flex">
          <SplitButton overlay={defaultMenu} type="primary" disabled marginRight="20px">
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="secondary" marginRight="20px">
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="default" disabled marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="text" disabled marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="link" disabled marginRight="20px">
            电子签署
          </SplitButton>
        </div>
      </>;
  };
  const Tab3 = () => {
    return <>
        <div className="flex">
          <SplitButton overlay={defaultMenu} type="primary" loading marginRight="20px">
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="secondary" marginRight="20px">
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="default" loading marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="text" loading marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="link" loading marginRight="20px">
            电子签署
          </SplitButton>
        </div>
      </>;
  };
  const Tab4 = () => {
    return <>
        <div className="flex">
          <SplitButton overlay={defaultMenu} type="primary" size="tiny" marginRight="20px">
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="secondary" marginRight="20px" size="tiny">
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="default" size="tiny" marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="text" size="tiny" marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="link" size="tiny" marginRight="20px">
            电子签署
          </SplitButton>
        </div>
      </>;
  };
  return <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="split" title="the Split Button">
          <Tab1 />
        </TabPane>

        <TabPane tabKey="disabled" title="disabled">
          <Tab2 />
        </TabPane>

        <TabPane tabKey="loading" title="loading">
          <Tab3 />
        </TabPane>

        <TabPane tabKey="tiny" title="tiny">
          <Tab4 />
        </TabPane>
      </Tabs>
    </div>;
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const A=["SplitButtonStoryBook","SplitButtonStoryBookBook2"];export{a as SplitButtonStoryBook,o as SplitButtonStoryBookBook2,A as __namedExportsOrder,P as default};
//# sourceMappingURL=split-button.stories-ae5b68ef.js.map
