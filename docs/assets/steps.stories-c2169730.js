import{a as e,j as s}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{m as l,h as c,i as n}from"./custom-picker-86da82ae.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const t=l.Step,D={title:"Navigation/Steps",component:l,subcomponents:{Step:t}},a=()=>e("div",{className:"steps-story",children:s("div",{className:"group",children:[e("div",{className:"title",children:"基础横向步骤条"}),s("div",{className:"show-case",children:[e("div",{className:"states",children:"size Default"}),s(c,{children:[e(n,{span:1}),e(n,{span:10,children:s(l,{current:2,children:[e(t,{title:"步骤1"}),e(t,{title:"步骤2"}),e(t,{title:"步骤3"}),e(t,{title:"步骤4"})]})}),e(n,{span:2}),e(n,{span:10,children:s(l,{current:2,labelPlacement:"left",children:[e(t,{title:"步骤1"}),e(t,{title:"步骤2"}),e(t,{title:"步骤3"}),e(t,{title:"步骤4"})]})})]})]})]})});a.storyName="Steps";const i=()=>e("div",{className:"steps-story",children:s("div",{className:"group",children:[e("div",{className:"title",children:"基础横向步骤条"}),s("div",{className:"show-case",children:[e("div",{className:"states",children:"size small"}),s(c,{children:[e(n,{span:1}),e(n,{span:10,children:s(l,{current:2,size:"small",children:[e(t,{title:"步骤1"}),e(t,{title:"步骤2"}),e(t,{title:"步骤3"}),e(t,{title:"步骤4"})]})}),e(n,{span:2}),e(n,{span:10,children:s(l,{current:2,labelPlacement:"left",size:"small",children:[e(t,{title:"步骤1"}),e(t,{title:"步骤2"}),e(t,{title:"步骤3"}),e(t,{title:"步骤4"})]})})]})]})]})});i.storyName="Steps Small";const r=()=>e("div",{className:"steps-story",children:s("div",{className:"group",children:[e("div",{className:"title",children:"基础横向步骤条"}),s("div",{className:"show-case",children:[e("div",{className:"states",children:"size tiny"}),s(c,{children:[e(n,{span:1}),e(n,{span:10,children:s(l,{current:2,size:"tiny",children:[e(t,{title:"步骤1"}),e(t,{title:"步骤2"}),e(t,{title:"步骤3"}),e(t,{title:"步骤4"})]})}),e(n,{span:2}),e(n,{span:10,children:s(l,{current:2,labelPlacement:"left",size:"tiny",children:[e(t,{title:"步骤1"}),e(t,{title:"步骤2"}),e(t,{title:"步骤3"}),e(t,{title:"步骤4"})]})})]})]})]})});r.storyName="Steps tiny";const o=()=>e("div",{className:"steps-story",children:s("div",{className:"group",children:[e("div",{className:"title",children:"可点击横向步骤条"}),e("div",{className:"show-case",children:s(c,{children:[e(n,{span:1}),e(n,{span:22,children:s(l,{current:2,type:"navigation",onCurrentChange:z=>{console.log(z)},children:[e(t,{title:"步骤1"}),e(t,{title:"步骤2"}),e(t,{title:"步骤3"}),e(t,{title:"步骤4"})]})})]})})]})});o.storyName="Steps Clickable";var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div className="steps-story">
      <div className="group">
        <div className="title">基础横向步骤条</div>
        <div className="show-case">
          <div className="states">size Default</div>
          <Row>
            <Col span={1} />
            <Col span={10}>
              <Steps current={2}>
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
            <Col span={2} />
            <Col span={10}>
              <Steps current={2} labelPlacement="left">
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
          </Row>
        </div>
      </div>
    </div>;
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var S,v,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <div className="steps-story">
      <div className="group">
        <div className="title">基础横向步骤条</div>
        <div className="show-case">
          <div className="states">size small</div>
          <Row>
            <Col span={1} />
            <Col span={10}>
              <Steps current={2} size="small">
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
            <Col span={2} />
            <Col span={10}>
              <Steps current={2} labelPlacement="left" size="small">
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
          </Row>
        </div>
      </div>
    </div>;
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var u,N,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <div className="steps-story">
      <div className="group">
        <div className="title">基础横向步骤条</div>
        <div className="show-case">
          <div className="states">size tiny</div>
          <Row>
            <Col span={1} />
            <Col span={10}>
              <Steps current={2} size="tiny">
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
            <Col span={2} />
            <Col span={10}>
              <Steps current={2} labelPlacement="left" size="tiny">
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
          </Row>
        </div>
      </div>
    </div>;
}`,...(C=(N=r.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var y,g,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const handleCurrentChange = (current: number) => {
    console.log(current);
  };
  return <div className="steps-story">
      <div className="group">
        <div className="title">可点击横向步骤条</div>
        <div className="show-case">
          <Row>
            <Col span={1} />
            <Col span={22}>
              <Steps current={2} type="navigation" onCurrentChange={handleCurrentChange}>
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
          </Row>
        </div>
      </div>
    </div>;
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const E=["StepsStoryBook","StepsStoryBook1","StepsStoryBook2","StepsStoryBook3"];export{a as StepsStoryBook,i as StepsStoryBook1,r as StepsStoryBook2,o as StepsStoryBook3,E as __namedExportsOrder,D as default};
//# sourceMappingURL=steps.stories-c2169730.js.map
