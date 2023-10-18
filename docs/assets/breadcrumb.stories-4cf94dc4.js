import{a as t,F as l,j as n}from"./jsx-runtime-e43ccb36.js";import{r as c}from"./index-1b03fe98.js";import{v as i,w as I,x as o,y as C,z as T,A as x}from"./custom-picker-1a2c1035.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const K={title:"Navigation/Breadcrumb",component:i},s=()=>{const h=()=>{const[a,r]=c.useState("");return n(l,{children:[t(i,{onClick:e=>{r(JSON.stringify(e))},items:[{text:"首页",path:"/home"},{text:"车辆订单列表",path:"/order-list"},{text:"订单详情"}]}),t("br",{}),a]})},p=()=>{const[a,r]=c.useState("");return n(l,{children:[t(i,{onClick:e=>{r(JSON.stringify(e))},items:[{text:"首页",icon:C,path:"/home"},{icon:T,text:"车辆订单列表",path:"/order-list"},{icon:x,text:"订单详情"}]}),t("br",{}),a]})},k=()=>{const[a,r]=c.useState("");return n(l,{children:[t(i,{separator:">",onClick:e=>{r(JSON.stringify(e))},items:[{text:"首页",path:"/home"},{text:"车辆订单列表",path:"/order-list",separator:":"},{text:"订单详情"}]}),t("br",{}),a]})},m=[{path:"/",title:"建站流程",element:null,children:[{path:"stations",title:"场站管理",element:null,children:[{path:"detail",title:"场站详情",element:null},{path:"create",title:"新建场站",element:null}]},{path:"test",title:"测试路由",element:null,children:[{path:"detail",title:"测试路由子页面",element:t("div",{children:"测试子页面"})}]},{path:"*",title:"未知",element:null}]}];return t(l,{children:n(I,{size:"small",hasLine:!0,children:[t(o,{tabKey:"Text",title:"Default",children:t(h,{})}),t(o,{tabKey:"Icon",title:"Icon",children:t(p,{})}),t(o,{tabKey:"Separator",title:"Separator",children:t(k,{})}),t(o,{tabKey:"Routes",title:"Routes",children:t(()=>{const[a,r]=c.useState("");return n(l,{children:[t("small",{style:{color:"#666"},children:"通过传入路由嵌套结构与当前路由匹配："}),t("br",{}),t("br",{}),t(i,{separator:">",onClick:e=>{r(JSON.stringify(e))},routes:m,currentPath:"/stations/detail"}),t("br",{}),t(i,{separator:">",onClick:e=>{r(JSON.stringify(e))},routes:m,currentPath:"/stations/detail",current:!0}),t("br",{}),a]})},{})})]})})};s.storyName="Breadcrumb";var d,u,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const Tab1 = () => {
    const [clickedItem, setClickedItem] = useState('');
    return <>
        <Breadcrumb onClick={item => {
        setClickedItem(JSON.stringify(item));
      }} items={[{
        text: '首页',
        path: '/home'
      }, {
        text: '车辆订单列表',
        path: '/order-list'
      }, {
        text: '订单详情'
      }]} />
        <br />
        {clickedItem}
      </>;
  };
  const Tab2 = () => {
    const [clickedItem, setClickedItem] = useState('');
    return <>
        <Breadcrumb onClick={item => {
        setClickedItem(JSON.stringify(item));
      }} items={[{
        text: '首页',
        icon: IconHome,
        path: '/home'
      }, {
        icon: IconCar,
        text: '车辆订单列表',
        path: '/order-list'
      }, {
        icon: IconCalendar,
        text: '订单详情'
      }]} />
        <br />
        {clickedItem}
      </>;
  };
  const Tab3 = () => {
    const [clickedItem, setClickedItem] = useState('');
    return <>
        <Breadcrumb separator=">" onClick={item => {
        setClickedItem(JSON.stringify(item));
      }} items={[{
        text: '首页',
        path: '/home'
      }, {
        text: '车辆订单列表',
        path: '/order-list',
        separator: ':'
      }, {
        text: '订单详情'
      }]} />
        <br />
        {clickedItem}
      </>;
  };
  const routeList = [{
    path: '/',
    title: '建站流程',
    element: null,
    children: [{
      path: 'stations',
      title: '场站管理',
      element: null,
      children: [{
        path: 'detail',
        title: '场站详情',
        element: null
      }, {
        path: 'create',
        title: '新建场站',
        element: null
      }]
    }, {
      path: 'test',
      title: '测试路由',
      element: null,
      children: [{
        path: 'detail',
        title: '测试路由子页面',
        element: <div>测试子页面</div>
      }]
    }, {
      path: '*',
      title: '未知',
      element: null
    }]
  }];
  const Tab4 = () => {
    const [clickedItem, setClickedItem] = useState('');
    return <>
        <small style={{
        color: '#666'
      }}>
          通过传入路由嵌套结构与当前路由匹配：
        </small>
        <br />
        <br />
        <Breadcrumb separator=">" onClick={item => {
        setClickedItem(JSON.stringify(item));
      }} routes={routeList} currentPath="/stations/detail" />
        <br />
        <Breadcrumb separator=">" onClick={item => {
        setClickedItem(JSON.stringify(item));
      }} routes={routeList} currentPath="/stations/detail" current />
        <br />
        {clickedItem}
      </>;
  };
  return <>
      <Tabs size="small" hasLine>
        <TabPane tabKey="Text" title="Default">
          <Tab1 />
        </TabPane>
        <TabPane tabKey="Icon" title="Icon">
          <Tab2 />
        </TabPane>
        <TabPane tabKey="Separator" title="Separator">
          <Tab3 />
        </TabPane>
        <TabPane tabKey="Routes" title="Routes">
          <Tab4 />
        </TabPane>
      </Tabs>
    </>;
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const L=["BreadcrumbStoryBook"];export{s as BreadcrumbStoryBook,L as __namedExportsOrder,K as default};
//# sourceMappingURL=breadcrumb.stories-4cf94dc4.js.map
