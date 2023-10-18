import{j as p,a as r}from"./jsx-runtime-e43ccb36.js";import{r as c}from"./index-1b03fe98.js";/* empty css              */import{$ as a,B as d}from"./custom-picker-86da82ae.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const f={title:"Feedback/Loading",component:a},o=()=>{const[t,i]=c.useState(!1);return p("div",{children:[r(d,{type:"primary",onClick:()=>{i(!t)},children:"显示"}),r(a,{visible:t,text:"加载中"})]})};var s,e,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(false);
  return <div>
      <Button type="primary" onClick={() => {
      setShow(!show);
    }}>
        显示
      </Button>
      <Loading visible={show} text="加载中" />
    </div>;
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const y=["LoadingStoryBook"];export{o as LoadingStoryBook,y as __namedExportsOrder,f as default};
//# sourceMappingURL=loading.stories-3d4a4f33.js.map
