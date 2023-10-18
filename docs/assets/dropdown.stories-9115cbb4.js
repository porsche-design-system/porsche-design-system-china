import{j as o,a as e}from"./jsx-runtime-e43ccb36.js";import{r as g}from"./index-1b03fe98.js";import{a6 as t,O as n,a7 as a,a8 as u,a9 as i,aa as v,ab as m,ac as w,ad as k,ae as T,w as y,x as c,F as D,B as I}from"./custom-picker-86da82ae.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const j={title:"Feedback/Dropdown",component:t},d=()=>{const r=o(n,{children:[e(n.Item,{index:"add",onClick:()=>{console.log("test1111")},children:"新增"}),e(n.Item,{index:"test1",onClick:()=>{console.log("test1111")},children:"编辑"}),e(n.Item,{index:"test2",onClick:()=>console.log("test2"),children:"分享"}),e(n.Item,{divider:!0,disabled:!0,index:"test3",children:"下载"}),e(n.Item,{index:"delete",children:"删除"})]}),h=o(n,{children:[o(n.ItemGroup,{title:"操作选项",children:[e(n.Item,{icon:e(a,{}),index:"add",onClick:()=>{console.log("test1111")},children:"新增"}),e(n.Item,{index:"test1",icon:e(u,{}),onClick:()=>{console.log("test1111")},children:"编辑"}),e(n.Item,{icon:e(i,{}),index:"test2",onClick:()=>console.log("test2"),children:"分享"}),e(n.Item,{icon:e(v,{}),disabled:!0,index:"test3",children:"下载"}),e(n.Item,{icon:e(m,{}),index:"delete",children:"删除"})]}),o(n.ItemGroup,{title:"内容分组",children:[e(n.Item,{icon:e(i,{}),index:"test3",children:"test1"}),e(n.Item,{icon:e(i,{}),index:"about2",children:"about2"}),e(n.Item,{icon:e(i,{}),index:"prod3",children:"prod3"})]})]}),x=o(n,{children:[e(n.Item,{icon:e(a,{}),index:"add",onClick:()=>{console.log("test1111")},children:"新增"}),e(n.Item,{index:"test1",icon:e(u,{}),onClick:()=>{console.log("test1111")},children:"编辑"}),o(n.SubMenu,{divider:!0,icon:e(i,{}),title:"分享",index:"submit",children:[e(n.Item,{icon:e(w,{}),index:"submit1",children:"邮件"}),e(n.Item,{icon:e(k,{}),index:"submit2",children:"短信"}),e(n.Item,{icon:e(T,{}),disabled:!0,index:"submit3",children:"微信"})]}),e(n.Item,{icon:e(m,{}),index:"delete",children:"删除"})]});return e("div",{children:o(y,{hasLine:!0,children:[e(c,{tabKey:"IconText",title:"Default + Dropdown",children:e("div",{className:"dropdown-demo",children:e(()=>o(D,{children:[e("br",{}),e(t,{overlay:r,trigger:"click",children:e(I,{type:"primary",children:"嵌套按钮"})}),e("br",{}),e("div",{children:e(t,{overlay:r,trigger:"click",children:"无图标样式"})})]}),{})})}),e(c,{tabKey:"Icon",title:"Icon + Dropdown",children:e("div",{className:"dropdown-demo",children:e(()=>e(t,{overlay:h,trigger:"click",children:"图标+分组"}),{})})}),e(c,{tabKey:"Text",title:"SubMenu + Dropdown",children:e("div",{className:"dropdown-demo",children:e(()=>e(t,{trigger:"click",overlay:x,children:"图标+子菜单"}),{})})}),e(c,{tabKey:"Controlled",title:"Controlled",children:e("div",{className:"dropdown-demo",children:e(()=>{const[l,s]=g.useState(!1);return e(t,{trigger:"click",overlay:r,visible:l,onVisibleChange:s,children:e(I,{type:"primary",onClick:()=>s(!l),children:"受控显示"})})},{})})})]})})};d.storyName="DropdownStoryBook";var b,M,p;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const defaultMenu = <Menu>
      <Menu.Item index="add" onClick={() => {
      console.log('test1111');
    }}>
        新增
      </Menu.Item>
      <Menu.Item index="test1" onClick={() => {
      console.log('test1111');
    }}>
        编辑
      </Menu.Item>
      <Menu.Item index="test2" onClick={() => console.log('test2')}>
        分享
      </Menu.Item>
      <Menu.Item divider disabled index="test3">
        下载
      </Menu.Item>
      <Menu.Item index="delete">删除</Menu.Item>
    </Menu>;
  const iconMenu = <Menu>
      <Menu.ItemGroup title="操作选项">
        <Menu.Item icon={<IconAdd />} index="add" onClick={() => {
        console.log('test1111');
      }}>
          新增
        </Menu.Item>
        <Menu.Item index="test1" icon={<IconEdit />} onClick={() => {
        console.log('test1111');
      }}>
          编辑
        </Menu.Item>
        <Menu.Item icon={<IconSend />} index="test2" onClick={() => console.log('test2')}>
          分享
        </Menu.Item>
        <Menu.Item icon={<IconDownload />} disabled index="test3">
          下载
        </Menu.Item>
        <Menu.Item icon={<IconDelete />} index="delete">
          删除
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="内容分组">
        <Menu.Item icon={<IconSend />} index="test3">
          test1
        </Menu.Item>
        <Menu.Item icon={<IconSend />} index="about2">
          about2
        </Menu.Item>
        <Menu.Item icon={<IconSend />} index="prod3">
          prod3
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>;
  const subMenu = <Menu>
      <Menu.Item icon={<IconAdd />} index="add" onClick={() => {
      console.log('test1111');
    }}>
        新增
      </Menu.Item>
      <Menu.Item index="test1" icon={<IconEdit />} onClick={() => {
      console.log('test1111');
    }}>
        编辑
      </Menu.Item>
      <Menu.SubMenu divider icon={<IconSend />} title="分享" index="submit">
        <Menu.Item icon={<IconEmail />} index="submit1">
          邮件
        </Menu.Item>
        <Menu.Item icon={<IconQq />} index="submit2">
          短信
        </Menu.Item>
        <Menu.Item icon={<IconWechat />} disabled index="submit3">
          微信
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item icon={<IconDelete />} index="delete">
        删除
      </Menu.Item>
    </Menu>;
  const Tab1 = () => <Form>
      <br />
      <Dropdown overlay={defaultMenu} trigger="click">
        <Button type="primary">嵌套按钮</Button>
      </Dropdown>
      <br />
      <div>
        <Dropdown overlay={defaultMenu} trigger="click">
          无图标样式
        </Dropdown>
      </div>
    </Form>;
  const Tab2 = () => <Dropdown overlay={iconMenu} trigger="click">
      图标+分组
    </Dropdown>;
  const Tab3 = () => <Dropdown trigger="click" overlay={subMenu}>
      图标+子菜单
    </Dropdown>;
  const Tab4 = () => {
    const [visible, setVisible] = useState(false);
    return <Dropdown trigger="click" overlay={defaultMenu} visible={visible} onVisibleChange={setVisible}>
        <Button type="primary" onClick={() => setVisible(!visible)}>
          受控显示
        </Button>
      </Dropdown>;
  };
  return <div>
      <Tabs hasLine>
        <TabPane tabKey="IconText" title="Default + Dropdown">
          <div className="dropdown-demo">
            <Tab1 />
          </div>
        </TabPane>
        <TabPane tabKey="Icon" title="Icon + Dropdown">
          <div className="dropdown-demo">
            <Tab2 />
          </div>
        </TabPane>
        <TabPane tabKey="Text" title="SubMenu + Dropdown">
          <div className="dropdown-demo">
            <Tab3 />
          </div>
        </TabPane>
        <TabPane tabKey="Controlled" title="Controlled">
          <div className="dropdown-demo">
            <Tab4 />
          </div>
        </TabPane>
      </Tabs>
    </div>;
}`,...(p=(M=d.parameters)==null?void 0:M.docs)==null?void 0:p.source}}};const A=["DropdownStoryBook"];export{d as DropdownStoryBook,A as __namedExportsOrder,j as default};
//# sourceMappingURL=dropdown.stories-9115cbb4.js.map
