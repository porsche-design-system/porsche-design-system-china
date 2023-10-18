import{j as D,a as e}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{T as r}from"./custom-picker-86da82ae.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const q={title:"Data Entry/TextArea",component:r},t=()=>D("div",{children:[e("div",{className:"states",children:"Default"}),e("div",{children:e(r,{placeholder:"请输入",width:"400px",onValueChange:c=>{console.log(c)},onBlur:c=>{console.log(c)}})}),e("br",{}),e("div",{className:"states",children:"Disabled"}),e("div",{children:e(r,{placeholder:"请输入",width:"400px",disabled:!0})}),e("br",{}),e("div",{className:"states",children:"readOnly"}),e("div",{children:e(r,{defaultValue:"test readOnly",width:"400px",readOnly:!0})}),e("br",{})]});t.storyName="TextArea";const a=()=>e("div",{children:e(r,{label:"备注",placeholder:"请输入",error:{show:!0,message:"输入信息有误"},width:"400px"})});a.storyName="Error";const o=()=>e("div",{children:e(r,{defaultValue:"默认文字",placeholder:"最多输入200个字符",maxLength:200,width:"400px"})});o.storyName="MAX LENGTH";const s=()=>D("div",{children:[e(r,{label:"自动调节高度",placeholder:"请输入",width:"400px",autoAdjustHeight:!0,defaultHeightOfRow:1}),e("br",{})," ",e("br",{})," ",e("br",{}),e(r,{label:"自动调节高度(默认3行高度)",placeholder:"请输入",width:"400px",autoAdjustHeight:!0,defaultHeightOfRow:3,maxLength:300})]});s.storyName="Auto Adjust Height";const d=()=>e("div",{children:e(r,{label:"只有获得焦点才显示计数器",placeholder:"请输入",width:"400px",maxLength:100,showCharCountOnFocus:!0})});d.storyName="Show Char Count On Focus";const l=()=>e("div",{children:e(r,{label:"备注",placeholder:"请输入",error:{show:!0,message:"输入信息有误"},width:"400px"})});l.storyName="LABEL TOP";const i=()=>e("div",{children:e(r,{label:{text:"备注",position:"left"},placeholder:"请输入",width:"400px"})});i.storyName="LABEL LEFT";const n=()=>e("div",{children:e(r,{label:{text:"备注",textAlign:"right",position:"left"},placeholder:"请输入",width:"400px"})});n.storyName="Label Left / Text Align Right";var p,h,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div>
      <div className="states">Default</div>
      <div>
        <TextArea placeholder="请输入" width="400px" onValueChange={val => {
        console.log(val);
      }} onBlur={evt => {
        console.log(evt);
      }} />
      </div>
      <br />
      <div className="states">Disabled</div>
      <div>
        <TextArea placeholder="请输入" width="400px" disabled />
      </div>
      <br />
      <div className="states">readOnly</div>
      <div>
        <TextArea defaultValue="test readOnly" width="400px" readOnly />
      </div>
      <br />
    </div>;
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,m,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <div>
      <TextArea label="备注" placeholder="请输入" error={{
      show: true,
      message: '输入信息有误'
    }} width="400px" />
    </div>;
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var A,g,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <div>
      <TextArea defaultValue="默认文字" placeholder="最多输入200个字符" maxLength={200} width="400px" />
    </div>;
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var w,b,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <div>
      <TextArea label="自动调节高度" placeholder="请输入" width="400px" autoAdjustHeight defaultHeightOfRow={1} />
      <br /> <br /> <br />
      <TextArea label="自动调节高度(默认3行高度)" placeholder="请输入" width="400px" autoAdjustHeight defaultHeightOfRow={3} maxLength={300} />
    </div>;
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,f,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <div>
      <TextArea label="只有获得焦点才显示计数器" placeholder="请输入" width="400px" maxLength={100} showCharCountOnFocus />
    </div>;
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var k,N,O;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <div>
      <TextArea label="备注" placeholder="请输入" error={{
      show: true,
      message: '输入信息有误'
    }} width="400px" />
    </div>;
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var L,H,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <div>
      <TextArea label={{
      text: '备注',
      position: 'left'
    }} placeholder="请输入" width="400px" />
    </div>;
}`,...(j=(H=i.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var C,E,V;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <div>
      <TextArea label={{
      text: '备注',
      textAlign: 'right',
      position: 'left'
    }} placeholder="请输入" width="400px" />
    </div>;
}`,...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const z=["TextAreaStoryBook","TextAreaStoryBook1","TextAreaStoryBook2","TextAreaStoryBook3","TextAreaStoryBook4","TextAreaStoryBook5","TextAreaStoryBook6","TextAreaStoryBook7"];export{t as TextAreaStoryBook,a as TextAreaStoryBook1,o as TextAreaStoryBook2,s as TextAreaStoryBook3,d as TextAreaStoryBook4,l as TextAreaStoryBook5,i as TextAreaStoryBook6,n as TextAreaStoryBook7,z as __namedExportsOrder,q as default};
//# sourceMappingURL=textareas.stories-c38bfa49.js.map
