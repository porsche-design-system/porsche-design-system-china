import{a as e,j as t}from"./jsx-runtime-e43ccb36.js";import{r as B}from"./index-1b03fe98.js";import{V as a,a2 as S}from"./custom-picker-1a2c1035.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const A={title:"Data Entry/InputNumber",component:a},i=()=>{const[n,R]=B.useState(0);return e("div",{className:"input-number-story",children:t("div",{className:"group",children:[e("div",{className:"title",children:"默认数字加减器"}),t("div",{className:"show-case",children:[e(a,{defaultValue:"3",label:"购买数量",min:0,max:10,width:"130px",marginRight:"30px",onValueChange:u=>{console.log(u),R(u)},step:1,value:n}),e(a,{defaultValue:"3",label:"购买数量",min:0,max:10,width:"130px",disabled:!0,marginRight:"30px",style:{marginLeft:20}})]})]})})};i.storyName="InputNumber";const r=()=>e("div",{className:"input-number-story",children:t("div",{className:"group",children:[e("div",{className:"title",children:"箭头数字加减器"}),t("div",{className:"show-case",children:[e(a,{type:"arrow",defaultValue:"3",label:"购买数量",width:"130px",min:0,max:10,marginRight:"30px",onValueChange:n=>console.log(n)}),e(a,{type:"arrow",defaultValue:"3",label:"购买数量",width:"130px",min:0,max:10,disabled:!0,marginRight:"30px",style:{marginLeft:20}})]})]})});r.storyName="Arrow InputNumber";const s=()=>e("div",{className:"input-number-story",children:t("div",{className:"group",children:[e("div",{className:"title",children:"隐藏递增按钮"}),t("div",{className:"show-case",children:[e(a,{defaultValue:"3",label:"购买数量",width:"130px",min:0,max:10,marginRight:"30px",hideStepBtn:!0,onValueChange:n=>console.log(n)}),e(a,{type:"arrow",defaultValue:"3",label:"购买数量",width:"130px",min:0,max:10,marginRight:"30px",hideStepBtn:!0,style:{marginLeft:20}})]})]})});s.storyName="Hide Step Button InputNumber";const l=()=>e("div",{className:"input-number-story",children:t("div",{className:"group",children:[e("div",{className:"title",children:"后缀显示"}),t("div",{className:"show-case",children:[e(a,{defaultValue:"3",label:"购买数量",width:"150px",min:0,max:10,marginRight:"30px",suffixIcon:e(S,{}),onValueChange:n=>console.log(n)}),e(a,{type:"arrow",defaultValue:"3",label:"购买数量",width:"150px",min:0,max:10,marginRight:"30px",suffixIcon:e("span",{className:"custom-day",children:"天"}),onValueChange:n=>console.log(n),style:{marginLeft:20}}),e(a,{type:"arrow",defaultValue:"3",label:"购买单价",width:"150px",min:0,max:10,disabled:!0,hideStepBtn:!0,suffixIcon:e("span",{className:"custom-money",children:"元"}),onValueChange:n=>console.log(n),style:{marginLeft:20}})]})]})});l.storyName="InputNumber Suffix";const m=()=>e("div",{className:"input-number-story",children:t("div",{className:"group",children:[e("div",{className:"title",children:"Tiny Size"}),t("div",{className:"show-case",children:[e(a,{defaultValue:"3",label:"购买数量",width:"92px",min:0,max:10,marginRight:"30px",size:"tiny"}),e(a,{defaultValue:"3",label:"购买数量",width:"92px",min:0,max:10,marginRight:"30px",size:"tiny",type:"arrow"}),e(a,{defaultValue:"3",label:"购买数量",width:"92px",min:0,max:10,marginRight:"30px",suffixIcon:e(S,{}),size:"tiny"}),e(a,{type:"arrow",defaultValue:"3",label:"购买数量",width:"92px",min:0,max:10,suffixIcon:e("span",{className:"custom-day",style:{fontSize:14},children:"天"}),size:"tiny"})]})]})});m.storyName="Tiny Size";var o,d,p;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number | string>(0);
  return <div className="input-number-story">
      <div className="group">
        <div className="title">默认数字加减器</div>
        <div className="show-case">
          <InputNumber defaultValue="3" label="购买数量" min={0} max={10} width="130px" marginRight="30px" onValueChange={val => {
          console.log(val);
          setValue(val);
        }} step={1} value={value} />
          <InputNumber defaultValue="3" label="购买数量" min={0} max={10} width="130px" disabled marginRight="30px" style={{
          marginLeft: 20
        }} />
        </div>
      </div>
    </div>;
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,h,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <div className="input-number-story">
      <div className="group">
        <div className="title">箭头数字加减器</div>
        <div className="show-case">
          <InputNumber type="arrow" defaultValue="3" label="购买数量" width="130px" min={0} max={10} marginRight="30px" onValueChange={val => console.log(val)} />
          <InputNumber type="arrow" defaultValue="3" label="购买数量" width="130px" min={0} max={10} disabled marginRight="30px" style={{
          marginLeft: 20
        }} />
        </div>
      </div>
    </div>;
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,N,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <div className="input-number-story">
      <div className="group">
        <div className="title">隐藏递增按钮</div>
        <div className="show-case">
          <InputNumber defaultValue="3" label="购买数量" width="130px" min={0} max={10} marginRight="30px" hideStepBtn onValueChange={val => console.log(val)} />
          <InputNumber type="arrow" defaultValue="3" label="购买数量" width="130px" min={0} max={10} marginRight="30px" hideStepBtn style={{
          marginLeft: 20
        }} />
        </div>
      </div>
    </div>;
}`,...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var b,y,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <div className="input-number-story">
      <div className="group">
        <div className="title">后缀显示</div>
        <div className="show-case">
          <InputNumber defaultValue="3" label="购买数量" width="150px" min={0} max={10} marginRight="30px" suffixIcon={<IconCheck />} onValueChange={val => console.log(val)} />
          <InputNumber type="arrow" defaultValue="3" label="购买数量" width="150px" min={0} max={10} marginRight="30px" suffixIcon={<span className="custom-day">天</span>} onValueChange={val => console.log(val)} style={{
          marginLeft: 20
        }} />
          <InputNumber type="arrow" defaultValue="3" label="购买单价" width="150px" min={0} max={10} disabled hideStepBtn suffixIcon={<span className="custom-money">元</span>} onValueChange={val => console.log(val)} style={{
          marginLeft: 20
        }} />
        </div>
      </div>
    </div>;
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,I,V;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <div className="input-number-story">
      <div className="group">
        <div className="title">Tiny Size</div>
        <div className="show-case">
          <InputNumber defaultValue="3" label="购买数量" width="92px" min={0} max={10} marginRight="30px" size="tiny" />
          <InputNumber defaultValue="3" label="购买数量" width="92px" min={0} max={10} marginRight="30px" size="tiny" type="arrow" />
          <InputNumber defaultValue="3" label="购买数量" width="92px" min={0} max={10} marginRight="30px" suffixIcon={<IconCheck />} size="tiny" />
          <InputNumber type="arrow" defaultValue="3" label="购买数量" width="92px" min={0} max={10} suffixIcon={<span className="custom-day" style={{
          fontSize: 14
        }}>
                天
              </span>} size="tiny" />
        </div>
      </div>
    </div>;
}`,...(V=(I=m.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const D=["InputNumberStoryBook","InputNumberStoryBook1","InputNumberStoryBook2","InputNumberStoryBook3","InputNumberStoryBook4"];export{i as InputNumberStoryBook,r as InputNumberStoryBook1,s as InputNumberStoryBook2,l as InputNumberStoryBook3,m as InputNumberStoryBook4,D as __namedExportsOrder,A as default};
//# sourceMappingURL=input-number.stories-595e5947.js.map
