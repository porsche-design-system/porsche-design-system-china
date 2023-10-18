import{a as e,j as v}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{d as t,F as a}from"./custom-picker-1a2c1035.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const O={title:"Data Entry/Switch",component:t},s=()=>e("div",{children:v(a,{children:[e(t,{label:{text:"是否发送邮件",position:"left",width:"120px"}}),e(t,{label:{text:"禁用状态",position:"left",width:"120px"},disabled:!0,value:!0})]})});s.storyName="Switch";const l=()=>e("div",{children:e(a,{children:e(t,{label:{text:"出错状态",position:"left",width:"120px"},error:{show:!0,message:"必须打开"}})})});l.storyName="Error";const i=()=>e("div",{children:v(a,{children:[e("div",{className:"session-title",children:"修改值为 0/1"}),e(t,{label:{text:"有无发票",position:"left",width:"120px"},alterValues:"ZeroOrOne",onValueChange:o=>{console.log(o)}}),e("div",{className:"session-title",children:"修改值为 false/true"}),e(t,{label:{text:"是否有驾驶证",position:"left",width:"150px"},alterValues:"FalseOrTrue",onValueChange:o=>{console.log(o)}}),e("div",{className:"session-title",children:'修改值为 "Male"/"Female"'}),e(t,{label:{text:"性别",position:"left",width:"150px"},alterValues:"Male,Female",onValueChange:o=>{console.log(o)}}),e("div",{className:"session-title",children:"自定义滑块颜色"}),e(t,{color:"#d5001c"})]})});i.storyName="Alter Values";var r,n,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <div>
      <Form>
        <Switch label={{
        text: '是否发送邮件',
        position: 'left',
        width: '120px'
      }} />
        <Switch label={{
        text: '禁用状态',
        position: 'left',
        width: '120px'
      }} disabled value />
      </Form>
    </div>;
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,h,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <div>
      <Form>
        <Switch label={{
        text: '出错状态',
        position: 'left',
        width: '120px'
      }} error={{
        show: true,
        message: '必须打开'
      }} />
      </Form>
    </div>;
}`,...(m=(h=l.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,u,w;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div>
      <Form>
        <div className="session-title">修改值为 0/1</div>
        <Switch label={{
        text: '有无发票',
        position: 'left',
        width: '120px'
      }} alterValues="ZeroOrOne" onValueChange={val => {
        console.log(val);
      }} />
        <div className="session-title">修改值为 false/true</div>
        <Switch label={{
        text: '是否有驾驶证',
        position: 'left',
        width: '150px'
      }} alterValues="FalseOrTrue" onValueChange={val => {
        console.log(val);
      }} />
        <div className="session-title">修改值为 "Male"/"Female"</div>
        <Switch label={{
        text: '性别',
        position: 'left',
        width: '150px'
      }} alterValues="Male,Female" onValueChange={val => {
        console.log(val);
      }} />
        <div className="session-title">自定义滑块颜色</div>
        <Switch color="#d5001c" />
      </Form>
    </div>;
}`,...(w=(u=i.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const k=["SwitchBook","SwitchBook1","SwitchBook2"];export{s as SwitchBook,l as SwitchBook1,i as SwitchBook2,k as __namedExportsOrder,O as default};
//# sourceMappingURL=switch.stories-8d00a1e2.js.map
