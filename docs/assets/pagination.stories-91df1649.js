import{a as n,j as e,F as z}from"./jsx-runtime-e43ccb36.js";import{r as d}from"./index-1b03fe98.js";/* empty css              */import{P as a,w as f,x as t}from"./custom-picker-1a2c1035.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const I={title:"Navigation/Pagination",component:a},s=()=>(d.useEffect(()=>{const i=document.getElementById("anchor--navigation-pagination--modal-story-book");i&&(i.style.display="none");const r=document.getElementsByClassName("sbdocs-title");if(r.length>0){const c=r[0];c.style.marginBottom="48px"}}),n("div",{}));s.storyName="Pagination";const o=()=>{const[i,r]=d.useState(3),[c,y]=d.useState(20),C=g=>{r(g)},N=g=>{y(g)};return n("div",{children:e(f,{size:"small",hasLine:!0,children:[n(t,{title:"Pages≥7",children:n(()=>e(z,{children:[e("div",{className:"row-cls",children:[n("div",{className:"title",children:"选中页≤5时"}),n(a,{defaultCurrent:2,total:222,align:"right"})]}),e("div",{className:"row-cls",children:[n("div",{className:"title",children:"选中页>5时"}),n(a,{total:222,defaultCurrent:6,align:"right"})]}),e("div",{className:"row-cls",children:[n("div",{className:"title",children:"选中页为倒数5个页面内"}),n(a,{total:222,defaultCurrent:219,align:"right"})]}),e("div",{className:"row-cls",children:[n("div",{className:"title",children:"受控制的页码"}),n(a,{current:i,total:222,onCurrentChange:C,align:"right"})]}),e("div",{className:"row-cls",children:[n("div",{className:"title",children:"设置一页显示多少数据"}),n(a,{align:"right",type:"full",pageSize:c,total:1225,onPageSizeChange:N})]})]}),{})}),n(t,{title:"Pages2-7",children:n(()=>n(a,{defaultCurrent:3,total:7}),{})}),n(t,{title:"Pages=1",children:n(()=>n(a,{total:1}),{})})]})})};o.storyName="Type";const l=()=>n("div",{children:e(f,{size:"small",hasLine:!0,children:[n(t,{title:"Right (Default)",children:n(()=>n(a,{total:100,pageSize:10,align:"right"}),{})}),n(t,{title:"Middle",children:n(()=>n(a,{total:100,pageSize:10,align:"center"}),{})}),n(t,{title:"Left",children:n(()=>n(a,{total:100,pageSize:10,align:"left"}),{})})]})});l.storyName="Position";var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  useEffect(() => {
    const mainStory = document.getElementById('anchor--navigation-pagination--modal-story-book');
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
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var T,p,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [current, setCurrent] = useState(3);
  const [pageSize, setPageSize] = useState(20);
  const handleCurrentChange = (page: number) => {
    setCurrent(page);
  };
  const handlePageSizeChange = (pageSize: number) => {
    setPageSize(pageSize);
  };
  const Tab1 = () => {
    return <>
        <div className="row-cls">
          <div className="title">选中页≤5时</div>
          <Pagination defaultCurrent={2} total={222} align="right" />
        </div>
        <div className="row-cls">
          <div className="title">选中页&gt;5时</div>
          <Pagination total={222} defaultCurrent={6} align="right" />
        </div>
        <div className="row-cls">
          <div className="title">选中页为倒数5个页面内</div>
          <Pagination total={222} defaultCurrent={219} align="right" />
        </div>
        <div className="row-cls">
          <div className="title">受控制的页码</div>
          <Pagination current={current} total={222} onCurrentChange={handleCurrentChange} align="right" />
        </div>
        <div className="row-cls">
          <div className="title">设置一页显示多少数据</div>
          <Pagination align="right" type="full" pageSize={pageSize} total={1225} onPageSizeChange={handlePageSizeChange} />
        </div>
      </>;
  };
  const Tab2 = () => {
    return <Pagination defaultCurrent={3} total={7} />;
  };
  const Tab3 = () => {
    return <Pagination total={1} />;
  };
  return <div>
      <Tabs size="small" hasLine>
        <TabPane title="Pages≥7">
          <Tab1 />
        </TabPane>
        <TabPane title="Pages2-7">
          <Tab2 />
        </TabPane>
        <TabPane title="Pages=1">
          <Tab3 />
        </TabPane>
      </Tabs>
    </div>;
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var P,v,S;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const Tab1 = () => {
    return <Pagination total={100} pageSize={10} align="right" />;
  };
  const Tab2 = () => {
    return <Pagination total={100} pageSize={10} align="center" />;
  };
  const Tab3 = () => {
    return <Pagination total={100} pageSize={10} align="left" />;
  };
  return <div>
      <Tabs size="small" hasLine>
        <TabPane title="Right (Default)">
          <Tab1 />
        </TabPane>
        <TabPane title="Middle">
          <Tab2 />
        </TabPane>
        <TabPane title="Left">
          <Tab3 />
        </TabPane>
      </Tabs>
    </div>;
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const R=["ModalStoryBook","PaginationStoryBook1","PaginationStoryBook2"];export{s as ModalStoryBook,o as PaginationStoryBook1,l as PaginationStoryBook2,R as __namedExportsOrder,I as default};
//# sourceMappingURL=pagination.stories-91df1649.js.map
