import{j as c,a as r}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{s as e,B as o}from"./custom-picker-86da82ae.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const k={title:"Feedback/Message",component:e},t=()=>{const s="Hello, this is a message from PUI";return c("div",{children:[r(o,{onClick:()=>e.info(s),type:"default",children:"Info"}),r(o,{onClick:()=>e.warning(s),type:"primary",children:"Warning"}),r(o,{onClick:()=>e.success(s),type:"secondary",children:"Success"}),r(o,{onClick:()=>e.error(s),type:"primary",children:"Error"}),r(o,{onClick:()=>e.error(s,{closable:!0}),type:"default",children:"Closeable"})]})};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const msg = 'Hello, this is a message from PUI';
  return <div>
      <Button onClick={() => Message.info(msg)} type="default">
        Info
      </Button>
      <Button onClick={() => Message.warning(msg)} type="primary">
        Warning
      </Button>
      <Button onClick={() => Message.success(msg)} type="secondary">
        Success
      </Button>
      <Button onClick={() => Message.error(msg)} type="primary">
        Error
      </Button>
      <Button onClick={() => Message.error(msg, {
      closable: true
    })} type="default">
        Closeable
      </Button>
    </div>;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const B=["knobsMessage"];export{B as __namedExportsOrder,k as default,t as knobsMessage};
//# sourceMappingURL=message.stories-8bbcb58c.js.map
