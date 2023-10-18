import{a as e,j as i,F as c}from"./jsx-runtime-e43ccb36.js";import{r as C,R as r}from"./index-1b03fe98.js";import{O as t,B as a,_ as l}from"./custom-picker-1a2c1035.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const{Item:y,ItemGroup:f,SubMenu:B}=t,_={title:"Feedback/Menu",component:t,subcomponents:{Item:y,ItemGroup:f,SubMenu:B}},m=()=>(C.useEffect(()=>{const u=document.getElementById("anchor--feedback-menu--menu-story-book");u&&(u.style.display="none");const s=document.getElementsByClassName("sbdocs-title");if(s.length>0){const n=s[0];n.style.marginBottom="48px"}}),e("div",{}));m.storyName="Menu";const d=()=>{const[u,s]=r.useState("submit-test"),[n,b]=r.useState(!0);return i("div",{className:"menu-demo base-menu",children:[e("div",{className:"test-one",children:i(t,{activeIndex:u,onSelect:s,children:[e(t.Item,{index:"test",onClick:()=>console.log("onClick事件","点击了 test"),children:"test"}),e(t.Item,{index:"test visible",visible:n,onClick:()=>console.log("onClick事件","点击了 test"),children:"test visible"}),e(t.Item,{index:"about",children:"about"}),e(t.Item,{disabled:!0,index:"prod",children:"prod"})]})}),e(a,{onClick:()=>b(!n),marginLeft:"24px",children:"菜单是否显示"})]})};d.storyName="使用 Menu 与 MenuItem 构建基础菜单";const o=()=>{const[u,s]=r.useState("test"),[n,b]=r.useState(!0);return e("div",{className:"menu-demo",children:i("div",{className:"test-submenu",children:[i("div",{className:"btn-group",children:[i(a,{onClick:()=>s("submit-submit-test14"),marginRight:"12px",children:["设置默认值"," "]}),e(a,{onClick:()=>b(!n),children:"菜单是否显示"})]}),e("h3",{children:"使用 Menu trigger: `hover` 点击下拉菜单"}),e("div",{className:"test-one",children:i(t,{activeIndex:u,onSelect:s,children:[e(t.Item,{index:"test",onClick:()=>console.log("onClick事件","点击了 test"),children:"test"}),i(t.SubMenu,{title:i(c,{children:["Submit 1",e(l,{})]}),index:"submit",disabled:!0,onClick:()=>console.log("onClick事件","点击了子标题"),children:[e(t.Item,{index:"submit-test",visible:n,children:"test visible1"}),e(t.Item,{index:"submit-about",children:"about2"}),e(t.Item,{disabled:!0,index:"submit-prod",children:"prod3"}),e(t.Item,{index:"submit-test1",children:"submit-test1"}),e(t.Item,{index:"submit-about2",visible:n,children:"submit-visible"}),e(t.Item,{disabled:!0,index:"submit-prod3",children:"prod3"}),i(t.SubMenu,{title:"submit-submit",index:"submit-submit",children:[e(t.Item,{index:"submit-submit-test1",children:"test1"}),e(t.Item,{index:"submit-submit-about2",children:"about2"}),e(t.Item,{index:"submit-submit-visible",visible:n,children:"submit-visible"}),e(t.Item,{visible:n,index:"submit-submit-prod3",children:"prod3"})]})]}),i(t.SubMenu,{title:i(c,{children:["SubMenu 2 ",e(l,{})]}),index:"submit-submit4",children:[e(t.Item,{selectAfter:!0,index:"submit-submit-test14",children:"test1"}),e(t.Item,{selectAfter:!0,index:"submit-submit-about24",children:"about2"}),e(t.Item,{disabled:!0,index:"submit-submit-prod34",children:"prod4"})]})]})}),e("h3",{children:"使用 Menu trigger: `click` 点击下拉菜单"}),e("div",{className:"test-one",children:i(t,{activeIndex:u,onSelect:s,trigger:"click",children:[i(t.SubMenu,{title:i(c,{children:["SubMenu 3 ",e(l,{})]}),index:"click-submit",onClick:()=>console.log("onClick事件","点击了子标题"),children:[e(t.Item,{index:"click-submit-test",visible:n,children:"test visible1"}),e(t.Item,{index:"click-submit-about",children:"about2"}),e(t.Item,{disabled:!0,index:"click-submit-prod",children:"prod3"}),e(t.Item,{index:"click-submit-test1",children:"submit-test1"}),e(t.Item,{index:"click-submit-about2",visible:n,children:"submit-visible"}),e(t.Item,{disabled:!0,index:"click-submit-prod3",children:"prod3"})]}),i(t.SubMenu,{title:i(c,{children:["SubMenu 4 ",e(l,{})]}),index:"click-submit-submit4",children:[e(t.Item,{selectAfter:!0,index:"click-submit-submit-test14",children:"test1"}),e(t.Item,{selectAfter:!0,index:"click-submit-submit-about24",children:"about2"}),e(t.Item,{disabled:!0,index:"click-submit-submit-prod34",children:"prod4"})]})]})})]})})};o.storyName="使用 Menu 、SubMenu、MenuItem 构建下拉菜单 ";var I,M,x;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  useEffect(() => {
    const mainStory = document.getElementById('anchor--feedback-menu--menu-story-book');
    if (mainStory) {
      mainStory.style.display = 'none';
    }
    const mainTitles = document.getElementsByClassName('sbdocs-title');
    if (mainTitles.length > 0) {
      const mainTitle = (mainTitles[0] as HTMLElement);
      mainTitle.style.marginBottom = '48px';
    }
  });
  return <div />;
}`,...(x=(M=m.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var h,p,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [index, setIndex] = React.useState('submit-test');
  const [hiddenItem, setHiddenItem] = React.useState(true);
  return <div className="menu-demo base-menu">
      <div className="test-one">
        <Menu activeIndex={index} onSelect={setIndex}>
          <Menu.Item index="test" onClick={() => console.log('onClick事件', '点击了 test')}>
            test
          </Menu.Item>
          <Menu.Item index="test visible" visible={hiddenItem} onClick={() => console.log('onClick事件', '点击了 test')}>
            test visible
          </Menu.Item>
          <Menu.Item index="about">about</Menu.Item>
          <Menu.Item disabled index="prod">
            prod
          </Menu.Item>
        </Menu>
      </div>
      <Button onClick={() => setHiddenItem(!hiddenItem)} marginLeft="24px">
        菜单是否显示
      </Button>
    </div>;
}`,...(k=(p=d.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var v,S,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [index, setIndex] = React.useState('test');
  const [hiddenItem, setHiddenItem] = React.useState(true);
  return <div className="menu-demo">
      <div className="test-submenu">
        <div className="btn-group">
          <Button onClick={() => setIndex('submit-submit-test14')} marginRight="12px">
            设置默认值{' '}
          </Button>
          <Button onClick={() => setHiddenItem(!hiddenItem)}>
            菜单是否显示
          </Button>
        </div>
        <h3>使用 Menu trigger: \`hover\` 点击下拉菜单</h3>
        <div className="test-one">
          <Menu activeIndex={index} onSelect={setIndex}>
            <Menu.Item index="test" onClick={() => console.log('onClick事件', '点击了 test')}>
              test
            </Menu.Item>

            <Menu.SubMenu title={<>
                  Submit 1<IconArrowHeadDown />
                </>} index="submit" disabled onClick={() => console.log('onClick事件', '点击了子标题')}>
              <Menu.Item index="submit-test" visible={hiddenItem}>
                test visible1
              </Menu.Item>
              <Menu.Item index="submit-about">about2</Menu.Item>
              <Menu.Item disabled index="submit-prod">
                prod3
              </Menu.Item>
              <Menu.Item index="submit-test1">submit-test1</Menu.Item>
              <Menu.Item index="submit-about2" visible={hiddenItem}>
                submit-visible
              </Menu.Item>
              <Menu.Item disabled index="submit-prod3">
                prod3
              </Menu.Item>
              <Menu.SubMenu title="submit-submit" index="submit-submit">
                <Menu.Item index="submit-submit-test1">test1</Menu.Item>
                <Menu.Item index="submit-submit-about2">about2</Menu.Item>
                <Menu.Item index="submit-submit-visible" visible={hiddenItem}>
                  submit-visible
                </Menu.Item>
                <Menu.Item visible={hiddenItem} index="submit-submit-prod3">
                  prod3
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu title={<>
                  SubMenu 2 <IconArrowHeadDown />
                </>} index="submit-submit4">
              <Menu.Item selectAfter index="submit-submit-test14">
                test1
              </Menu.Item>
              <Menu.Item selectAfter index="submit-submit-about24">
                about2
              </Menu.Item>
              <Menu.Item disabled index="submit-submit-prod34">
                prod4
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
        <h3>使用 Menu trigger: \`click\` 点击下拉菜单</h3>
        <div className="test-one">
          <Menu activeIndex={index} onSelect={setIndex} trigger="click">
            <Menu.SubMenu title={<>
                  SubMenu 3 <IconArrowHeadDown />
                </>} index="click-submit" onClick={() => console.log('onClick事件', '点击了子标题')}>
              <Menu.Item index="click-submit-test" visible={hiddenItem}>
                test visible1
              </Menu.Item>
              <Menu.Item index="click-submit-about">about2</Menu.Item>
              <Menu.Item disabled index="click-submit-prod">
                prod3
              </Menu.Item>
              <Menu.Item index="click-submit-test1">submit-test1</Menu.Item>
              <Menu.Item index="click-submit-about2" visible={hiddenItem}>
                submit-visible
              </Menu.Item>
              <Menu.Item disabled index="click-submit-prod3">
                prod3
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={<>
                  SubMenu 4 <IconArrowHeadDown />
                </>} index="click-submit-submit4">
              <Menu.Item selectAfter index="click-submit-submit-test14">
                test1
              </Menu.Item>
              <Menu.Item selectAfter index="click-submit-submit-about24">
                about2
              </Menu.Item>
              <Menu.Item disabled index="click-submit-submit-prod34">
                prod4
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </div>;
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const j=["MenuStoryBook","MenuStoryBook1","MenuStoryBook2"];export{m as MenuStoryBook,d as MenuStoryBook1,o as MenuStoryBook2,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=menu.stories-a713c978.js.map
