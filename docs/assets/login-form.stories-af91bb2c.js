import{j as e,a as o}from"./jsx-runtime-e43ccb36.js";import{r as p}from"./index-1b03fe98.js";import{F as c,I as s,B as l,f as u}from"./custom-picker-86da82ae.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const S={title:"Example/Login Form"},r=()=>{const[t,d]=p.useState({});return e("div",{className:"form-wrap",children:[o("div",{className:"top-title",children:"用户登录"}),o(c,{data:t,onDataChange:a=>{console.log(a),d(a)},children:e("div",{children:[o(s,{name:"user",placeholder:"用户名"}),o(s,{name:"password",placeholder:"密码",type:"password"}),o(l,{submit:!0,type:"primary",icon:u,style:{width:"100%"},children:"提 交"})]})}),o("div",{children:JSON.stringify(t)})]})};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [formData, setFormData] = useState({});
  return <div className="form-wrap">
      <div className="top-title">用户登录</div>
      <Form data={formData} onDataChange={v => {
      console.log(v);
      setFormData(v);
    }}>
        <div>
          <Input name="user" placeholder="用户名" />
          <Input name="password" placeholder="密码" type="password" />
          <Button submit type="primary" icon={IconArrowHeadRight} style={{
          width: '100%'
        }}>
            提 交
          </Button>
        </div>
      </Form>
      <div>{JSON.stringify(formData)}</div>
    </div>;
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const x=["LoginStoryBook"];export{r as LoginStoryBook,x as __namedExportsOrder,S as default};
//# sourceMappingURL=login-form.stories-af91bb2c.js.map
