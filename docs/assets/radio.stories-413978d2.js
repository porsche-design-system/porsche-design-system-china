import{a as o,j as t}from"./jsx-runtime-e43ccb36.js";import{r as F}from"./index-1b03fe98.js";/* empty css              */import{o as e,R as a,F as O}from"./custom-picker-86da82ae.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const A={title:"Data Entry/Radio",component:e,subcomponents:{RadioGroup:a}},s=()=>o("div",{children:t(O,{onDataChange:r=>console.log("val",r),children:[t(a,{name:"group1",onValueChange:r=>{console.log(r)},defaultValue:"val3",children:[o(e,{text:"选项1",value:"val1"}),o(e,{text:"选项2",value:"val2"}),o(e,{text:"选项3",value:"val3"}),o(e,{text:"选项4",value:"val4",disabled:!0})]}),o("br",{}),t(a,{disabled:!0,children:[o(e,{text:"选项1"}),o(e,{text:"选项2"}),o(e,{text:"选项3"}),o(e,{text:"选项4",disabled:!0})]})]})});s.storyName="Radio";const i=()=>{const[r,p]=F.useState(1);return t("div",{children:[o("div",{children:"value值支持使用number型，options必须写成object形式"}),o("br",{}),o(a,{value:r,onValueChange:p,options:[{text:"选择1",value:1},{text:"选择2",value:2},{text:"选择3",value:0}]}),o("br",{})," ",o("br",{}),t("div",{children:["选定值: ",JSON.stringify(r)]})]})};i.storyName="Number Value";const n=()=>{const[r,p]=F.useState("选项1");return t("div",{children:[o("div",{children:"点击已选定Radio可以去掉选择"}),o("br",{}),o(a,{value:r,onValueChange:p,options:"选项1,选项2,选项3,选项4",allowCancelSelection:!0})]})};n.storyName="Cancellable";const d=()=>o("div",{children:o(a,{label:{text:"职业",position:"left"},options:"教师,医生,警察,律师"})});d.storyName="With Label";const l=()=>o("div",{children:o(a,{error:{show:!0,message:"请选择"},options:"教师,医生,警察,律师"})});l.storyName="Error";const c=()=>o("div",{children:o(a,{options:"教师:Teacher,医生:Doctor,警察:Policeman,律师:Lawyer"})});c.storyName="String Options";const u=()=>o("div",{children:o(a,{itemsDistance:{x:"1px",y:"10px"},options:"教师:Teacher,医生:Doctor,警察:Policeman,律师:Lawyer"})});u.storyName="Items Distance";var v,m,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <div>
      <Form onDataChange={val => console.log('val', val)}>
        <RadioGroup name="group1" onValueChange={value => {
        console.log(value);
      }} defaultValue="val3">
          <Radio text="选项1" value="val1" />
          <Radio text="选项2" value="val2" />
          <Radio text="选项3" value="val3" />
          <Radio text="选项4" value="val4" disabled />
        </RadioGroup>

        <br />

        <RadioGroup disabled>
          <Radio text="选项1" />
          <Radio text="选项2" />
          <Radio text="选项3" />
          <Radio text="选项4" disabled />
        </RadioGroup>
      </Form>
    </div>;
}`,...(R=(m=s.parameters)==null?void 0:m.docs)==null?void 0:R.source}}};var x,y,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [val, setVal] = useState(1);
  return <div>
      <div>value值支持使用number型，options必须写成object形式</div>
      <br />
      <RadioGroup value={val} onValueChange={setVal} options={[{
      text: '选择1',
      value: 1
    }, {
      text: '选择2',
      value: 2
    }, {
      text: '选择3',
      value: 0
    }]} />
      <br /> <br />
      <div>选定值: {JSON.stringify(val)}</div>
    </div>;
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var h,b,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [val, setVal] = useState('选项1');
  return <div>
      <div>点击已选定Radio可以去掉选择</div>
      <br />
      <RadioGroup value={val} onValueChange={setVal} options="选项1,选项2,选项3,选项4" allowCancelSelection />
    </div>;
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var V,k,B;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div>
    <RadioGroup label={{
    text: '职业',
    position: 'left'
  }} options="教师,医生,警察,律师" />
  </div>`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,G,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <div>
      <RadioGroup error={{
      show: true,
      message: '请选择'
    }} options="教师,医生,警察,律师" />
    </div>;
}`,...(f=(G=l.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var D,N,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <div>
      <RadioGroup options="教师:Teacher,医生:Doctor,警察:Policeman,律师:Lawyer" />
    </div>;
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,L,E;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <div>
      <RadioGroup itemsDistance={{
      x: '1px',
      y: '10px'
    }} options="教师:Teacher,医生:Doctor,警察:Policeman,律师:Lawyer" />
    </div>;
}`,...(E=(L=u.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const H=["RadioStoryBook","RadioStoryBook2","RadioStoryBook3","RadioStoryBook4","RadioStoryBook5","RadioStoryBook6","RadioStoryBook7"];export{s as RadioStoryBook,i as RadioStoryBook2,n as RadioStoryBook3,d as RadioStoryBook4,l as RadioStoryBook5,c as RadioStoryBook6,u as RadioStoryBook7,H as __namedExportsOrder,A as default};
//# sourceMappingURL=radio.stories-413978d2.js.map
