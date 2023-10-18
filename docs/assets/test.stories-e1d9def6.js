import{j as m,a as r}from"./jsx-runtime-e43ccb36.js";import{r as l}from"./index-1b03fe98.js";/* empty css              */import{T as v,I as S,B as h}from"./custom-picker-86da82ae.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const g={title:"Test/Component Test"},s=()=>{const[e,a]=l.useState('{ "value": "文字" }');let t={};try{t=JSON.parse(e)}catch{}return m("div",{className:"form-wrap",children:[r("div",{children:"Input"}),r(v,{value:e,onValueChange:a}),r("br",{})," ",r("br",{}),r(S,{...t})]})},o=()=>{const[e,a]=l.useState('{ "type": "primary" }');let t={};try{t=JSON.parse(e)}catch{}return m("div",{className:"form-wrap",children:[r("div",{children:"Button"}),r(v,{value:e,onValueChange:a}),r("br",{})," ",r("br",{}),r(h,{...t,children:"按钮"})]})};var p,n,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [props, setProps] = useState('{ "value": "文字" }');
  let parsedProp = {};
  try {
    parsedProp = JSON.parse(props);
  } catch (e) {}
  return <div className="form-wrap">
      <div>Input</div>
      <TextArea value={props} onValueChange={setProps} />
      <br /> <br />
      <Input {...parsedProp} />
    </div>;
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,d,i;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [props, setProps] = useState('{ "type": "primary" }');
  let parsedProp = {};
  try {
    parsedProp = JSON.parse(props);
  } catch (e) {}
  return <div className="form-wrap">
      <div>Button</div>
      <TextArea value={props} onValueChange={setProps} />
      <br /> <br />
      <Button {...parsedProp}>按钮</Button>
    </div>;
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const C=["InputTestStoryBook","ButtonTestStoryBook"];export{o as ButtonTestStoryBook,s as InputTestStoryBook,C as __namedExportsOrder,g as default};
//# sourceMappingURL=test.stories-e1d9def6.js.map
