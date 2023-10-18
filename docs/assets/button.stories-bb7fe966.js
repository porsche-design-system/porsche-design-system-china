import{j as e,a as t,F as a}from"./jsx-runtime-e43ccb36.js";import{R as L}from"./index-1b03fe98.js";import{B as n,f as i,w as S,x as o,O as d,a6 as K,_ as c}from"./custom-picker-86da82ae.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const $={title:"Foundation/Button",component:n},p=()=>e("div",{children:[t(n,{type:"primary",marginRight:"40px",children:"Primary"}),t(n,{type:"primary",marginRight:"40px",icon:i,children:"Secondary"}),t(n,{type:"primary",marginRight:"40px",icon:i}),t(n,{type:"text",marginRight:"40px",children:"Text"}),t(n,{type:"link",marginRight:"40px",children:"Link"})]});p.storyName="Button";const r=({size:s,type:h="primary",disabled:m=!1,loading:u=!1})=>{const[A,H]=L.useState("link1"),P=e(d,{activeIndex:A,onSelect:H,children:[t(d.Item,{index:"link1",onClick:()=>{console.log("link 1")},children:"1st Link"}),t(d.Item,{index:"link2",onClick:()=>{console.log(" link 2")},children:"2nd Link"}),t(d.Item,{index:"link3",onClick:()=>{console.log("link 3")},children:"3rd Link"}),t(d.Item,{index:"link4",onClick:()=>{console.log("link4")},children:"4th Link"})]});return t(a,{children:t("div",{style:{display:"flex",marginRight:"40px"},children:t(K,{overlay:P,trigger:"click",disabled:m||u,children:t(n,{type:h,suffixIcon:c,disabled:m||u,size:s,loading:u,children:"更多"})})})})},g=()=>t("div",{children:e(S,{size:"small",hasLine:!0,children:[t(o,{tabKey:"IconText",title:"Icon + Text",children:t(()=>e(a,{children:[e("div",{children:[t(n,{type:"primary",marginRight:"40px",icon:i,children:"Primary"}),t(n,{type:"secondary",marginRight:"40px",icon:i,children:"Secondary"}),t(n,{type:"default",marginRight:"40px",icon:i,children:"Default"}),t(n,{type:"text",marginRight:"40px",icon:i,children:"Text"}),t(n,{type:"link",marginRight:"40px",children:"Link"})]}),t("br",{}),e("div",{children:[t(n,{type:"primary",marginRight:"40px",suffixIcon:c,children:"Primary"}),t(n,{type:"secondary",marginRight:"40px",suffixIcon:c,children:"Secondary"}),t(n,{type:"default",marginRight:"40px",suffixIcon:c,children:"Default"}),t(n,{type:"text",marginRight:"40px",suffixIcon:c,children:"Text"})]})]}),{})}),t(o,{tabKey:"Icon",title:"Icon",children:t(()=>e(a,{children:[t(n,{type:"primary",marginRight:"40px",icon:i}),t(n,{type:"secondary",marginRight:"40px",icon:i}),t(n,{type:"default",marginRight:"40px",icon:i}),t(n,{type:"text",marginRight:"40px",icon:i})]}),{})}),t(o,{tabKey:"Text",title:"Text",children:t(()=>e(a,{children:[t(n,{type:"primary",marginRight:"40px",children:"Primary"}),t(n,{type:"secondary",marginRight:"40px",children:"Secondary"}),t(n,{type:"default",marginRight:"40px",children:"Default"}),t(n,{type:"text",marginRight:"40px",children:"Text"}),t(n,{type:"link",marginRight:"40px",children:"Link"})]}),{})}),t(o,{tabKey:"Dropdown",title:"the Drop-down Button",children:t(()=>t(a,{children:e("div",{className:"flex",children:[t(r,{})," ",t(r,{type:"secondary"})," ",t(r,{type:"default"})," ",t(r,{type:"text"})," ",t(r,{type:"link"})," "]})}),{})})]})});g.storyName="Types";const y=()=>t("div",{children:e(S,{size:"small",hasLine:!0,children:[t(o,{tabKey:"Disabled",title:"Disabled",children:t(()=>e(a,{children:[t(n,{type:"primary",marginRight:"40px",icon:i,disabled:!0,children:"Primary"}),t(n,{type:"secondary",marginRight:"40px",icon:i,disabled:!0,children:"Secondary"}),t(n,{type:"default",marginRight:"40px",icon:i,disabled:!0,children:"Default"}),t(n,{type:"text",marginRight:"40px",icon:i,disabled:!0,children:"Text"}),t(n,{type:"link",marginRight:"40px",disabled:!0,children:"Link"}),t("br",{}),t("br",{}),t("div",{className:"flex",children:t(r,{disabled:!0})})]}),{})}),t(o,{tabKey:"Loading",title:"Loading",children:t(()=>e(a,{children:[t(n,{type:"primary",marginRight:"40px",icon:i,loading:!0,children:"Primary"}),t(n,{type:"secondary",marginRight:"40px",icon:i,loading:!0,children:"Secondary"}),t(n,{type:"default",marginRight:"40px",icon:i,loading:!0,children:"Default"}),t(n,{type:"text",marginRight:"40px",icon:i,loading:!0,children:"Text"}),t(n,{type:"link",marginRight:"40px",loading:!0,children:"Link"}),t("br",{}),t("br",{}),t("div",{className:"flex",children:t(r,{loading:!0})})]}),{})})]})});y.storyName="Status";const l=()=>e("div",{children:[e("div",{children:[t(n,{size:"tiny",type:"primary",marginRight:"40px",icon:i,children:"Primary"}),t(n,{size:"tiny",type:"secondary",marginRight:"40px",icon:i,children:"Secondary"}),t(n,{size:"tiny",type:"default",marginRight:"40px",icon:i,children:"Default"}),t(n,{size:"tiny",type:"text",marginRight:"40px",icon:i,children:"Text"}),t(n,{size:"tiny",type:"link",marginRight:"40px",children:"Link"})]}),t("br",{}),e("div",{children:[t(n,{size:"tiny",type:"primary",marginRight:"40px",loading:!0,children:"Primary"}),t(n,{size:"tiny",type:"secondary",marginRight:"40px",loading:!0,children:"Secondary"}),t(n,{size:"tiny",type:"default",marginRight:"40px",loading:!0,children:"Default"}),t(n,{size:"tiny",type:"text",marginRight:"40px",loading:!0,children:"Text"}),t(n,{size:"tiny",type:"text",marginRight:"40px",children:"Link"})]}),t("br",{}),e("div",{children:[t(n,{size:"tiny",type:"primary",marginRight:"40px",disabled:!0,children:"Primary"}),t(n,{size:"tiny",type:"secondary",marginRight:"40px",disabled:!0,children:"Secondary"}),t(n,{size:"tiny",type:"default",marginRight:"40px",disabled:!0,children:"Default"}),t(n,{size:"tiny",type:"text",marginRight:"40px",disabled:!0,children:"Text"}),t(n,{size:"tiny",type:"text",marginRight:"40px",disabled:!0,children:"Link"})]}),t("br",{}),e("div",{children:[t(n,{size:"tiny",type:"primary",marginRight:"40px",icon:i}),t(n,{size:"tiny",type:"secondary",marginRight:"40px",icon:i}),t(n,{size:"tiny",type:"default",marginRight:"40px",icon:i}),t(n,{size:"tiny",type:"text",marginRight:"40px",icon:i})]}),t("br",{}),e("div",{className:"flex",children:[t(r,{size:"tiny"}),t(r,{size:"tiny",disabled:!0}),t(r,{size:"tiny",loading:!0})]})]});l.storyName="Tiny Size";var x,R,B;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <div>
      <Button type="primary" marginRight="40px">
        Primary
      </Button>
      <Button type="primary" marginRight="40px" icon={IconArrowHeadRight}>
        Secondary
      </Button>
      <Button type="primary" marginRight="40px" icon={IconArrowHeadRight} />
      <Button type="text" marginRight="40px">
        Text
      </Button>
      <Button type="link" marginRight="40px">
        Link
      </Button>
    </div>;
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var b,f,T;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const Tab1 = () => {
    return <>
        <div>
          <Button type="primary" marginRight="40px" icon={IconArrowHeadRight}>
            Primary
          </Button>
          <Button type="secondary" marginRight="40px" icon={IconArrowHeadRight}>
            Secondary
          </Button>
          <Button type="default" marginRight="40px" icon={IconArrowHeadRight}>
            Default
          </Button>
          <Button type="text" marginRight="40px" icon={IconArrowHeadRight}>
            Text
          </Button>
          <Button type="link" marginRight="40px">
            Link
          </Button>
        </div>
        <br />
        <div>
          <Button type="primary" marginRight="40px" suffixIcon={IconArrowHeadDown}>
            Primary
          </Button>
          <Button type="secondary" marginRight="40px" suffixIcon={IconArrowHeadDown}>
            Secondary
          </Button>
          <Button type="default" marginRight="40px" suffixIcon={IconArrowHeadDown}>
            Default
          </Button>
          <Button type="text" marginRight="40px" suffixIcon={IconArrowHeadDown}>
            Text
          </Button>
        </div>
      </>;
  };
  const Tab2 = () => {
    return <>
        <Button type="primary" marginRight="40px" icon={IconArrowHeadRight} />
        <Button type="secondary" marginRight="40px" icon={IconArrowHeadRight} />
        <Button type="default" marginRight="40px" icon={IconArrowHeadRight} />
        <Button type="text" marginRight="40px" icon={IconArrowHeadRight} />
      </>;
  };
  const Tab3 = () => {
    return <>
        <Button type="primary" marginRight="40px">
          Primary
        </Button>
        <Button type="secondary" marginRight="40px">
          Secondary
        </Button>
        <Button type="default" marginRight="40px">
          Default
        </Button>
        <Button type="text" marginRight="40px">
          Text
        </Button>
        <Button type="link" marginRight="40px">
          Link
        </Button>
      </>;
  };
  const Tab4 = () => {
    return <>
        <div className="flex">
          <DropdownButton /> <DropdownButton type="secondary" />{' '}
          <DropdownButton type="default" /> <DropdownButton type="text" />{' '}
          <DropdownButton type="link" />{' '}
        </div>
      </>;
  };
  return <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="IconText" title="Icon + Text">
          <Tab1 />
        </TabPane>
        <TabPane tabKey="Icon" title="Icon">
          <Tab2 />
        </TabPane>
        <TabPane tabKey="Text" title="Text">
          <Tab3 />
        </TabPane>
        <TabPane tabKey="Dropdown" title="the Drop-down Button">
          <Tab4 />
        </TabPane>
      </Tabs>
    </div>;
}`,...(T=(f=g.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var k,I,w;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const Tab1 = () => {
    return <>
        <Button type="primary" marginRight="40px" icon={IconArrowHeadRight} disabled>
          Primary
        </Button>
        <Button type="secondary" marginRight="40px" icon={IconArrowHeadRight} disabled>
          Secondary
        </Button>
        <Button type="default" marginRight="40px" icon={IconArrowHeadRight} disabled>
          Default
        </Button>
        <Button type="text" marginRight="40px" icon={IconArrowHeadRight} disabled>
          Text
        </Button>
        <Button type="link" marginRight="40px" disabled>
          Link
        </Button>
        <br />
        <br />
        <div className="flex">
          <DropdownButton disabled />
        </div>
      </>;
  };
  const Tab2 = () => {
    return <>
        <Button type="primary" marginRight="40px" icon={IconArrowHeadRight} loading>
          Primary
        </Button>
        <Button type="secondary" marginRight="40px" icon={IconArrowHeadRight} loading>
          Secondary
        </Button>
        <Button type="default" marginRight="40px" icon={IconArrowHeadRight} loading>
          Default
        </Button>
        <Button type="text" marginRight="40px" icon={IconArrowHeadRight} loading>
          Text
        </Button>
        <Button type="link" marginRight="40px" loading>
          Link
        </Button>
        <br />
        <br />
        <div className="flex">
          <DropdownButton loading />
        </div>
      </>;
  };
  return <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="Disabled" title="Disabled">
          <Tab1 />
        </TabPane>
        <TabPane tabKey="Loading" title="Loading">
          <Tab2 />
        </TabPane>
      </Tabs>
    </div>;
}`,...(w=(I=y.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var z,v,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <div>
      <div>
        <Button size="tiny" type="primary" marginRight="40px" icon={IconArrowHeadRight}>
          Primary
        </Button>
        <Button size="tiny" type="secondary" marginRight="40px" icon={IconArrowHeadRight}>
          Secondary
        </Button>
        <Button size="tiny" type="default" marginRight="40px" icon={IconArrowHeadRight}>
          Default
        </Button>
        <Button size="tiny" type="text" marginRight="40px" icon={IconArrowHeadRight}>
          Text
        </Button>
        <Button size="tiny" type="link" marginRight="40px">
          Link
        </Button>
      </div>
      <br />
      <div>
        <Button size="tiny" type="primary" marginRight="40px" loading>
          Primary
        </Button>
        <Button size="tiny" type="secondary" marginRight="40px" loading>
          Secondary
        </Button>
        <Button size="tiny" type="default" marginRight="40px" loading>
          Default
        </Button>
        <Button size="tiny" type="text" marginRight="40px" loading>
          Text
        </Button>
        <Button size="tiny" type="text" marginRight="40px">
          Link
        </Button>
      </div>
      <br />
      <div>
        <Button size="tiny" type="primary" marginRight="40px" disabled>
          Primary
        </Button>
        <Button size="tiny" type="secondary" marginRight="40px" disabled>
          Secondary
        </Button>
        <Button size="tiny" type="default" marginRight="40px" disabled>
          Default
        </Button>
        <Button size="tiny" type="text" marginRight="40px" disabled>
          Text
        </Button>
        <Button size="tiny" type="text" marginRight="40px" disabled>
          Link
        </Button>
      </div>
      <br />
      <div>
        <Button size="tiny" type="primary" marginRight="40px" icon={IconArrowHeadRight} />
        <Button size="tiny" type="secondary" marginRight="40px" icon={IconArrowHeadRight} />
        <Button size="tiny" type="default" marginRight="40px" icon={IconArrowHeadRight} />
        <Button size="tiny" type="text" marginRight="40px" icon={IconArrowHeadRight} />
      </div>
      <br />

      <div className="flex">
        <DropdownButton size="tiny" />
        <DropdownButton size="tiny" disabled />
        <DropdownButton size="tiny" loading />
      </div>
    </div>;
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const q=["ButtonStoryBook","ButtonStoryBook2","ButtonStoryBook3","ButtonStoryBook4"];export{p as ButtonStoryBook,g as ButtonStoryBook2,y as ButtonStoryBook3,l as ButtonStoryBook4,q as __namedExportsOrder,$ as default};
//# sourceMappingURL=button.stories-bb7fe966.js.map
