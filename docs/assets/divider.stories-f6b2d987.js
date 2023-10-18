import{j as t,F as c,a as n}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{H as r,h as i,i as o}from"./custom-picker-1a2c1035.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const u={title:"Data Display/Divider",component:r},e=()=>t(c,{children:[n("h4",{children:"分隔线-横向"}),t(i,{children:[n(o,{span:8,children:"Low contrast"}),n(o,{span:8,children:"Medium contrast"}),n(o,{span:8,children:"High contrast"})]}),t(i,{children:[n(o,{span:8,className:"divider-demo",children:n(r,{type:"horizontal",contrast:"low"})}),n(o,{span:8,className:"divider-demo",children:n(r,{type:"horizontal",contrast:"medium"})}),n(o,{span:8,className:"divider-demo",children:n(r,{type:"horizontal",contrast:"high"})})]}),n("h4",{children:"分隔线-纵向"}),t(i,{children:[n(o,{span:8,children:"Low contrast"}),n(o,{span:8,children:"Medium contrast"}),n(o,{span:8,children:"High contrast"})]}),t(i,{children:[n(o,{span:8,children:n(r,{type:"vertical",contrast:"low"})}),n(o,{span:8,children:n(r,{type:"vertical",contrast:"medium"})}),n(o,{span:8,children:n(r,{type:"vertical",contrast:"high"})})]}),n("br",{}),n("h4",{children:n("b",{children:"文字分隔"})}),t("div",{children:["文字1 ",n(r,{type:"vertical"})," 文字2"]})]});var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <>
      <h4>分隔线-横向</h4>
      <Row>
        <Col span={8}>Low contrast</Col>
        <Col span={8}>Medium contrast</Col>
        <Col span={8}>High contrast</Col>
      </Row>
      <Row>
        <Col span={8} className="divider-demo">
          <Divider type="horizontal" contrast="low" />
        </Col>
        <Col span={8} className="divider-demo">
          <Divider type="horizontal" contrast="medium" />
        </Col>
        <Col span={8} className="divider-demo">
          <Divider type="horizontal" contrast="high" />
        </Col>
      </Row>
      <h4>分隔线-纵向</h4>
      <Row>
        <Col span={8}>Low contrast</Col>
        <Col span={8}>Medium contrast</Col>
        <Col span={8}>High contrast</Col>
      </Row>
      <Row>
        <Col span={8}>
          <Divider type="vertical" contrast="low" />
        </Col>
        <Col span={8}>
          <Divider type="vertical" contrast="medium" />
        </Col>
        <Col span={8}>
          <Divider type="vertical" contrast="high" />
        </Col>
      </Row>
      <br />
      <h4>
        <b>文字分隔</b>
      </h4>
      <div>
        文字1 <Divider type="vertical" /> 文字2
      </div>
    </>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const D=["RowStoryBook"];export{e as RowStoryBook,D as __namedExportsOrder,u as default};
//# sourceMappingURL=divider.stories-f6b2d987.js.map
