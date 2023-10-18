import{a as e,j as r}from"./jsx-runtime-e43ccb36.js";import{r as z}from"./index-1b03fe98.js";/* empty css              */import{q as t,F as o}from"./custom-picker-86da82ae.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const Y={title:"Data Entry/MultiSelect",component:t},a=()=>{const[l,i]=z.useState(["dog"]);return e("div",{style:{width:"300px"},children:r(o,{children:[e(t,{value:l,options:"狗:dog,猫,狮子,老虎,鲸鱼",label:"动物",placeholder:"请选择",onValueChange:i,width:"200px"}),e("br",{}),e("div",{children:"禁用状态"}),e(t,{value:l,options:"狗:dog,猫,狮子,老虎,鲸鱼",label:"动物",placeholder:"请选择",onValueChange:i,width:"200px",disabled:!0})]})})};a.storyName="MultiSelect";const s=()=>e("div",{style:{width:"300px"},children:r(o,{children:[e("div",{children:"-----"}),e(t,{options:"狗:dog,猫,狮子,老虎,非常长非常长非常长非常长非常长非常长鲸鱼",label:"测试",placeholder:"请选择",width:"200px"})]})});s.storyName="String Options";const d=()=>e("div",{style:{width:"300px"},children:r(o,{children:[e("div",{children:"出错状态"}),e(t,{options:"狗,猫,狮子,老虎,鲸鱼",placeholder:"请选择",error:{show:!0,message:"未选择"}})]})});d.storyName="Error";const n=()=>e("div",{style:{width:"300px"},children:r(o,{children:[e("div",{children:"显示过滤输入框"}),e(t,{options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger,动物",placeholder:"请选择",filterInput:!0,filterInputPlaceholder:"查找动物"})]})});n.storyName="Filter Input";const c=()=>e("div",{style:{width:"300px"},children:r(o,{children:[e("div",{children:"显示清除按钮"}),e(t,{options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger",placeholder:"动物",filterInput:!0,filterInputPlaceholder:"查找动物",showClearButton:!0})]})});c.storyName="Show Clear Button";const p=()=>{const[l,i]=z.useState(["老虎"]);return e("div",{style:{width:"300px"},children:r(o,{children:[e("div",{children:"filterMode"}),e(t,{value:l,options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger",filterInput:!0,filterMode:!0,showClearButton:!0,label:"动物",maxWidth:"300px",onValueChange:i,optionsStyle:{minWidth:"200px"}}),e("br",{}),e("div",{children:"禁用状态"}),e(t,{value:l,options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger",filterInput:!0,filterMode:!0,showClearButton:!0,label:"动物",maxWidth:"300px",onValueChange:i,optionsStyle:{minWidth:"200px"},disabled:!0})]})})};p.storyName="Filter Mode";const u=()=>e("div",{style:{width:"300px"},children:r(o,{children:[e("div",{children:"去掉全选按钮"}),e(t,{options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger",placeholder:"动物",filterInput:!0,filterInputPlaceholder:"查找动物",showClearButton:!0,showCheckAll:!1})]})});u.storyName="Remove [全选] option";const h=()=>e("div",{style:{width:"300px"},children:r(o,{children:[e("div",{children:"自定义选项格式"}),e(t,{options:[{text:e("span",{style:{color:"red"},children:"老虎"}),value:"老虎"},{text:e("span",{style:{color:"green"},children:"兔子"}),value:"兔子"}],placeholder:"动物",filterInput:!0,filterInputPlaceholder:"查找动物",showClearButton:!0,showCheckAll:!1})]})});h.storyName="Custom select content";const m=()=>e("div",{style:{width:"300px"},children:r(o,{children:[e("div",{children:"自定义选项格式"}),e(t,{options:[{text:"老虎",value:"老虎"},{text:"兔子",value:"兔子",disabled:!0},{text:"老鹰",value:"老鹰"}],placeholder:"动物",filterInput:!0,filterInputPlaceholder:"查找动物",showClearButton:!0,showCheckAll:!1})]})});m.storyName="Disable Option";var v,S,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<any>(['dog']);
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <MultiSelect value={val} options="狗:dog,猫,狮子,老虎,鲸鱼" label="动物" placeholder="请选择" onValueChange={setVal} width="200px" />
        <br />
        <div>禁用状态</div>
        <MultiSelect value={val} options="狗:dog,猫,狮子,老虎,鲸鱼" label="动物" placeholder="请选择" onValueChange={setVal} width="200px" disabled />
      </Form>
    </div>;
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var x,f,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <div>-----</div>
        <MultiSelect options="狗:dog,猫,狮子,老虎,非常长非常长非常长非常长非常长非常长鲸鱼" label="测试" placeholder="请选择" width="200px" />
      </Form>
    </div>;
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var g,B,C;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <div>出错状态</div>
        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼" placeholder="请选择" error={{
        show: true,
        message: '未选择'
      }} />
      </Form>
    </div>;
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var I,k,F;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <div>显示过滤输入框</div>
        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger,动物" placeholder="请选择" filterInput filterInputPlaceholder="查找动物" />
      </Form>
    </div>;
}`,...(F=(k=n.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var b,M,W;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <div>显示清除按钮</div>
        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger" placeholder="动物" filterInput filterInputPlaceholder="查找动物" showClearButton />
      </Form>
    </div>;
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var V,D,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<any>(['老虎']);
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <div>filterMode</div>
        <MultiSelect value={val} options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger" filterInput filterMode showClearButton label="动物" maxWidth="300px" onValueChange={setVal} optionsStyle={{
        minWidth: '200px'
      }} />
        <br />
        <div>禁用状态</div>
        <MultiSelect value={val} options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger" filterInput filterMode showClearButton label="动物" maxWidth="300px" onValueChange={setVal} optionsStyle={{
        minWidth: '200px'
      }} disabled />
      </Form>
    </div>;
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var T,N,A;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <div>去掉全选按钮</div>
        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger" placeholder="动物" filterInput filterInputPlaceholder="查找动物" showClearButton showCheckAll={false} />
      </Form>
    </div>;
}`,...(A=(N=u.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var E,j,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <div>自定义选项格式</div>
        <MultiSelect options={[{
        text: <span style={{
          color: 'red'
        }}>老虎</span>,
        value: '老虎'
      }, {
        text: <span style={{
          color: 'green'
        }}>兔子</span>,
        value: '兔子'
      }]} placeholder="动物" filterInput filterInputPlaceholder="查找动物" showClearButton showCheckAll={false} />
      </Form>
    </div>;
}`,...(O=(j=h.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var _,q,R;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <div>自定义选项格式</div>
        <MultiSelect options={[{
        text: '老虎',
        value: '老虎'
      }, {
        text: '兔子',
        value: '兔子',
        disabled: true
      }, {
        text: '老鹰',
        value: '老鹰'
      }]} placeholder="动物" filterInput filterInputPlaceholder="查找动物" showClearButton showCheckAll={false} />
      </Form>
    </div>;
}`,...(R=(q=m.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const Z=["SelectStoryBook","SelectStoryBook1","SelectStoryBook2","SelectStoryBook3","SelectStoryBook4","SelectStoryBook5","SelectStoryBook6","SelectStoryBook7","SelectStoryBook8"];export{a as SelectStoryBook,s as SelectStoryBook1,d as SelectStoryBook2,n as SelectStoryBook3,c as SelectStoryBook4,p as SelectStoryBook5,u as SelectStoryBook6,h as SelectStoryBook7,m as SelectStoryBook8,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=multi-select.stories-cd21bb59.js.map
