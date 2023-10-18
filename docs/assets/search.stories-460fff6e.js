import{a as e,j as h}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{n as o}from"./custom-picker-86da82ae.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const E={title:"Data Entry/Search",component:o},a=()=>e("div",{children:e(o,{placeholder:"请输入（支持使用回车）",width:"360px",marginRight:"30px",onSearch:r=>{console.log("Search:",r)},onValueChange:r=>{console.log(r)},onBlur:r=>{console.log(r)}})});a.storyName="Search";const t=()=>h("div",{children:[e("div",{children:"显示清除按钮"}),e(o,{placeholder:"显示清除按钮",width:"360px",showClearButton:!0})]});t.storyName="Show Clear Button";const c=()=>h("div",{children:[e("div",{children:"限制文字长度"}),e(o,{placeholder:"限制文字长度",maxLength:10,width:"360px"})]});c.storyName="Limit Text Length";const s=()=>h("div",{children:[e("div",{children:"显示搜索按钮背景颜色"}),e(o,{placeholder:"请输入客户姓名/BP-ID/试乘试驾人",width:"360px",showClearButton:!0,showSearchButtonBg:!0})]});s.storyName="Show Search Button Background";const n=()=>h("div",{children:[e("div",{children:"使用Rule限定搜索内容"}),e(o,{placeholder:"请输入客户邮件",width:"360px",rules:[{type:"email",message:"输入的内容必须是邮件地址"}],showClearButton:!0,showSearchButtonBg:!0,onSearch:r=>{console.log("查找"+r)}})]});n.storyName="Validate Search";var d,l,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <div>
      <Search placeholder="请输入（支持使用回车）" width="360px" marginRight="30px" onSearch={val => {
      console.log('Search:', val);
    }} onValueChange={val => {
      console.log(val);
    }} onBlur={evt => {
      console.log(evt);
    }} />
    </div>;
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,u,S;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div>
      <div>显示清除按钮</div>
      <Search placeholder="显示清除按钮" width="360px" showClearButton />
    </div>;
}`,...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var m,v,B;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <div>
      <div>限制文字长度</div>
      <Search placeholder="限制文字长度" maxLength={10} width="360px" />
    </div>;
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var g,w,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div>
      <div>显示搜索按钮背景颜色</div>
      <Search placeholder="请输入客户姓名/BP-ID/试乘试驾人" width="360px" showClearButton showSearchButtonBg />
    </div>;
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,k,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <div>
      <div>使用Rule限定搜索内容</div>
      <Search placeholder="请输入客户邮件" width="360px" rules={[{
      type: 'email',
      message: '输入的内容必须是邮件地址'
    }]} showClearButton showSearchButtonBg onSearch={val => {
      console.log('查找' + val);
    }} />
    </div>;
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const I=["SearchStoryBook","SearchStoryBook1","SearchStoryBook2","SearchStoryBook3","SearchStoryBook4"];export{a as SearchStoryBook,t as SearchStoryBook1,c as SearchStoryBook2,s as SearchStoryBook3,n as SearchStoryBook4,I as __namedExportsOrder,E as default};
//# sourceMappingURL=search.stories-460fff6e.js.map
