import{j as d,a as t}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{N as c,B as n}from"./custom-picker-1a2c1035.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const G={title:"Feedback/Notification",component:c},r=()=>{const o={type:"info",cancelText:"三级按钮",okText:"一级按钮",message:"通知标题",description:"通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。"},e=i=>{c.pop(i)};return d("div",{children:[t(n,{onClick:()=>e({...o,showButton:!1}),type:"default",children:"Info"}),t(n,{onClick:()=>e({...o,type:"warning",showButton:!1}),type:"primary",children:"Warning"}),t(n,{onClick:()=>e({...o,type:"success",showButton:!1}),type:"secondary",children:"Success"}),t(n,{onClick:()=>e({...o,type:"error",showButton:!1}),type:"primary",children:"Error"})]})};r.storyName="基本";const s=()=>{const o={type:"info",cancelText:"三级按钮",okText:"一级按钮",message:"通知标题",key:"1",onOk:()=>{c.close(o.key)},description:"通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。"},e=i=>{c.pop(i)};return d("div",{children:[t(n,{onClick:()=>e({...o}),type:"default",children:"Info"}),t(n,{onClick:()=>e({...o,type:"warning"}),type:"primary",children:"Warning"}),t(n,{onClick:()=>e({...o,type:"success"}),type:"secondary",children:"Success"}),t(n,{onClick:()=>e({...o,type:"error"}),type:"primary",children:"Error"})]})};s.storyName="自定义按钮";const a=()=>{const o={type:"info",cancelText:"三级按钮",okText:"一级按钮",message:"通知标题",description:"通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。"},e=i=>{c.pop(i)};return t("div",{children:t(n,{onClick:()=>e({...o,closable:!1}),type:"default",children:"隐藏关闭按钮"})})};a.storyName="隐藏关闭按钮";const l=()=>{const o={type:"info",cancelText:"三级按钮",okText:"一级按钮",message:"通知标题",description:"通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。"},e=i=>{c.pop(i)};return d("div",{children:[t(n,{marginRight:"10px",onClick:()=>e({...o,showButton:!1,placement:"topRight"}),type:"default",children:"右上角"}),t(n,{marginRight:"10px",onClick:()=>e({...o,showButton:!1,placement:"bottomRight"}),type:"default",children:"右下角"}),t(n,{marginRight:"10px",onClick:()=>e({...o,showButton:!1,placement:"bottomLeft"}),type:"default",children:"左下角"}),t(n,{onClick:()=>e({...o,showButton:!1,placement:"topLeft"}),type:"default",children:"左上角"})]})};l.storyName="位置";const W=()=>{console.log("link to ul")},j=()=>{console.log("doSomething")},p=()=>{const o={type:"info",showButton:!0,message:"通知标题",description:"通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。",footer:t("div",{style:{width:"90%",margin:"0px auto",marginTop:"20px"},children:d("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t("div",{children:t(n,{onClick:W,type:"link",children:"链接按钮"})}),t("div",{children:t(n,{onClick:j,type:"default",children:"次要按钮"})})]})})},e=i=>{c.pop(i)};return t("div",{children:t(n,{onClick:()=>e({...o}),type:"default",children:"自定义footer"})})};p.storyName="自定义footer";const f=()=>{const o={type:"info",cancelText:"三级按钮",okText:"一级按钮",message:"通知标题",key:"update-6",closeAnimate:!0,onOk:()=>{c.close(o.key)},description:"点击更新按钮更新状态"},e=u=>{c.pop(u)},i=u=>{c.update(u)};return d("div",{children:[t(n,{onClick:()=>e({...o}),type:"default",children:"Info"}),t(n,{onClick:()=>i({...o,type:"warning"}),type:"primary",children:"Warning"}),t(n,{onClick:()=>i({...o,type:"success"}),type:"secondary",children:"Success"}),t(n,{onClick:()=>i({...o,type:"error"}),type:"primary",children:"Error"}),t(n,{onClick:()=>i({...o}),type:"default",children:"状态更新"})]})};f.storyName="状态更新";var y,k,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    description: '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。'
  };
  const onClick = (config?: any) => {
    Notification.pop(config);
  };
  return <div>
      <Button onClick={() => onClick({
      ...config,
      showButton: false
    })} type="default">
        Info
      </Button>
      <Button onClick={() => onClick({
      ...config,
      type: 'warning',
      showButton: false
    })} type="primary">
        Warning
      </Button>
      <Button onClick={() => onClick({
      ...config,
      type: 'success',
      showButton: false
    })} type="secondary">
        Success
      </Button>
      <Button onClick={() => onClick({
      ...config,
      type: 'error',
      showButton: false
    })} type="primary">
        Error
      </Button>
    </div>;
}`,...(g=(k=r.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var m,B,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    key: '1',
    onOk: () => {
      Notification.close(config.key);
    },
    description: '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。'
  };
  const onClick = (config?: any) => {
    Notification.pop(config);
  };
  return <div>
      <Button onClick={() => onClick({
      ...config
    })} type="default">
        Info
      </Button>
      <Button onClick={() => onClick({
      ...config,
      type: 'warning'
    })} type="primary">
        Warning
      </Button>
      <Button onClick={() => onClick({
      ...config,
      type: 'success'
    })} type="secondary">
        Success
      </Button>
      <Button onClick={() => onClick({
      ...config,
      type: 'error'
    })} type="primary">
        Error
      </Button>
    </div>;
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var h,x,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    description: '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。'
  };
  const onClick = (config?: any) => {
    Notification.pop(config);
  };
  return <div>
      <Button onClick={() => onClick({
      ...config,
      closable: false
    })} type="default">
        隐藏关闭按钮
      </Button>
    </div>;
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var N,w,S;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    description: '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。'
  };
  const onClick = (config?: any) => {
    Notification.pop(config);
  };
  return <div>
      <Button marginRight="10px" onClick={() => onClick({
      ...config,
      showButton: false,
      placement: 'topRight'
    })} type="default">
        右上角
      </Button>
      <Button marginRight="10px" onClick={() => onClick({
      ...config,
      showButton: false,
      placement: 'bottomRight'
    })} type="default">
        右下角
      </Button>
      <Button marginRight="10px" onClick={() => onClick({
      ...config,
      showButton: false,
      placement: 'bottomLeft'
    })} type="default">
        左下角
      </Button>
      <Button onClick={() => onClick({
      ...config,
      showButton: false,
      placement: 'topLeft'
    })} type="default">
        左上角
      </Button>
    </div>;
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,R,b;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const config = {
    type: 'info',
    showButton: true,
    message: '通知标题',
    description: '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。',
    footer: <div style={{
      width: '90%',
      margin: '0px auto',
      marginTop: '20px'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <div>
            <Button onClick={link} type="link">
              链接按钮
            </Button>
          </div>
          <div>
            <Button onClick={doSomething} type="default">
              次要按钮
            </Button>
          </div>
        </div>
      </div>
  };
  const onClick = (config?: any) => {
    Notification.pop(config);
  };
  return <div>
      <Button onClick={() => onClick({
      ...config
    })} type="default">
        自定义footer
      </Button>
    </div>;
}`,...(b=(R=p.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var I,E,U;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    key: 'update-6',
    closeAnimate: true,
    onOk: () => {
      Notification.close(config.key);
    },
    description: '点击更新按钮更新状态'
  };
  const onClick = (config?: any) => {
    Notification.pop(config);
  };
  const onUpdate = (config?: any) => {
    Notification.update(config);
  };
  return <div>
      <Button onClick={() => onClick({
      ...config
    })} type="default">
        Info
      </Button>
      <Button onClick={() => onUpdate({
      ...config,
      type: 'warning'
    })} type="primary">
        Warning
      </Button>
      <Button onClick={() => onUpdate({
      ...config,
      type: 'success'
    })} type="secondary">
        Success
      </Button>
      <Button onClick={() => onUpdate({
      ...config,
      type: 'error'
    })} type="primary">
        Error
      </Button>
      <Button onClick={() => onUpdate({
      ...config
    })} type="default">
        状态更新
      </Button>
    </div>;
}`,...(U=(E=f.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const H=["NotificationStoryBook1","NotificationStoryBook2","NotificationStoryBook3","NotificationStoryBook4","NotificationStoryBook5","NotificationStoryBook6"];export{r as NotificationStoryBook1,s as NotificationStoryBook2,a as NotificationStoryBook3,l as NotificationStoryBook4,p as NotificationStoryBook5,f as NotificationStoryBook6,H as __namedExportsOrder,G as default};
//# sourceMappingURL=notification.stories-977db779.js.map
