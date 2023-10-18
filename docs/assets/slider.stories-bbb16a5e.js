import{a as e,F as y,j as l}from"./jsx-runtime-e43ccb36.js";import{r as g}from"./index-1b03fe98.js";/* empty css              */import{Q as r,w as v,x as s,h as I,i as p,V as L}from"./custom-picker-86da82ae.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const O={title:"Data Entry/Slider",component:r},i=()=>(g.useEffect(()=>{const a=document.getElementById("anchor--data-entry-slider--slider-stroy-book");a&&(a.style.display="none");const t=document.getElementsByClassName("sbdocs-title");if(t.length>0){const n=t[0];n.style.marginBottom="48px"}}),e(y,{}));i.storyName="Slider";const o=()=>{const[a,t]=g.useState([30,50]);return e("div",{children:l(v,{size:"small",hasLine:!0,children:[l(s,{tabKey:"single",title:"Single",children:[e("br",{}),e(r,{defaultValue:30})]}),l(s,{tabKey:"double",title:"Double",children:[e("br",{}),e(r,{range:!0,value:a,onValueChange:b=>{t(b),console.log(b)}})]})]})})};o.storyName="Basic";const u=()=>e("div",{children:l(v,{size:"small",hasLine:!0,children:[l(s,{tabKey:"single",title:"Single",children:[e("br",{}),e(()=>e(r,{defaultValue:30,disabled:!0}),{})]}),l(s,{tabKey:"double",title:"Double",children:[e("br",{}),e(()=>e(r,{range:!0,defaultValue:[10,60],disabled:!0}),{})]})]})});u.storyName="Disabled";const d=()=>{const[a,t]=g.useState(60);return e("div",{style:{margin:"25px 0"},children:l(I,{style:{alignItems:"center"},children:[e(p,{span:5,children:e(L,{type:"arrow",value:a+"",min:0,max:100,onValueChange:n=>{t(Number(n))}})}),e(p,{span:1}),e(p,{span:11,children:e(r,{value:a,onValueChange:n=>{t(n)}})})]})})};d.storyName="Slider And InputNumber";const m=()=>{const a=[{value:0,label:"0%"},{value:25,label:"25%"},{value:50,label:"50%"},{value:75,label:"75%"},{value:100,label:"100%"}],t=c=>Array.isArray(c)?[c[0]+"%",c[1]+"%"]:c+"%";return e("div",{style:{marginBottom:"30px"},children:l(v,{size:"small",hasLine:!0,children:[e(s,{tabKey:"single",title:"Single",children:e(()=>l(y,{children:[e("div",{className:"title",children:"节点区间滑块"}),e(r,{defaultValue:30,marks:a,tipFormatter:t}),e("div",{className:"title",style:{marginTop:"50px"},children:"节点区间滑块-滑块仅可置于节点上"}),e(r,{defaultValue:25,marks:a,tipFormatter:t,step:null})]}),{})}),e(s,{tabKey:"double",title:"Double",children:e(()=>l(y,{children:[e("div",{className:"title",children:"节点区间滑块"}),e(r,{defaultValue:[30,60],marks:a,tipFormatter:t,range:!0}),e("div",{className:"title",style:{marginTop:"50px"},children:"节点区间滑块-滑块仅可置于节点上"}),e(r,{defaultValue:[25,50],marks:a,tipFormatter:t,step:null,range:!0})]}),{})})]})})};m.storyName="Node Interval Slider";var S,T,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  useEffect(() => {
    const mainStory = document.getElementById('anchor--data-entry-slider--slider-stroy-book');
    if (mainStory) {
      mainStory.style.display = 'none';
    }
    const mainTitles = document.getElementsByClassName('sbdocs-title');
    if (mainTitles.length > 0) {
      const mainTitle = (mainTitles[0] as HTMLElement);
      mainTitle.style.marginBottom = '48px';
    }
  });
  return <></>;
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var V,f,k;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([30, 50]);
  const handleValueChange = (value: number | number[]) => {
    setValue((value as number[]));
    console.log(value);
  };
  return <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="single" title="Single">
          <br />
          <Slider defaultValue={30} />
        </TabPane>
        <TabPane tabKey="double" title="Double">
          <br />
          <Slider range value={value} onValueChange={handleValueChange} />
        </TabPane>
      </Tabs>
    </div>;
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var N,B,x;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const Tab1 = () => {
    return <Slider defaultValue={30} disabled />;
  };
  const Tab2 = () => {
    return <Slider range defaultValue={[10, 60]} disabled />;
  };
  return <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="single" title="Single">
          <br />
          <Tab1 />
        </TabPane>
        <TabPane tabKey="double" title="Double">
          <br />
          <Tab2 />
        </TabPane>
      </Tabs>
    </div>;
}`,...(x=(B=u.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var C,P,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(60);
  return <div style={{
    margin: '25px 0'
  }}>
      <Row style={{
      alignItems: 'center'
    }}>
        <Col span={5}>
          <InputNumber type="arrow" value={value + ''} min={0} max={100} onValueChange={val => {
          setValue(Number(val));
        }} />
        </Col>
        <Col span={1} />
        <Col span={11}>
          <Slider value={value} onValueChange={value => {
          setValue((value as number));
        }} />
        </Col>
      </Row>
    </div>;
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var K,E,D;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const marks = [{
    value: 0,
    label: '0%'
  }, {
    value: 25,
    label: '25%'
  }, {
    value: 50,
    label: '50%'
  }, {
    value: 75,
    label: '75%'
  }, {
    value: 100,
    label: '100%'
  }];
  const tipFormatter = (value: number | Array<number>) => {
    if (Array.isArray(value)) {
      return [value[0] + '%', value[1] + '%'];
    } else {
      return value + '%';
    }
  };
  const Tab1 = () => {
    return <>
        <div className="title">节点区间滑块</div>
        <Slider defaultValue={30} marks={marks} tipFormatter={tipFormatter} />
        <div className="title" style={{
        marginTop: '50px'
      }}>
          节点区间滑块-滑块仅可置于节点上
        </div>
        <Slider defaultValue={25} marks={marks} tipFormatter={tipFormatter} step={null} />
      </>;
  };
  const Tab2 = () => {
    return <>
        <div className="title">节点区间滑块</div>
        <Slider defaultValue={[30, 60]} marks={marks} tipFormatter={tipFormatter} range />
        <div className="title" style={{
        marginTop: '50px'
      }}>
          节点区间滑块-滑块仅可置于节点上
        </div>
        <Slider defaultValue={[25, 50]} marks={marks} tipFormatter={tipFormatter} step={null} range />
      </>;
  };
  return <div style={{
    marginBottom: '30px'
  }}>
      <Tabs size="small" hasLine>
        <TabPane tabKey="single" title="Single">
          <Tab1 />
        </TabPane>
        <TabPane tabKey="double" title="Double">
          <Tab2 />
        </TabPane>
      </Tabs>
    </div>;
}`,...(D=(E=m.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const Q=["SliderStroyBook","SliderStoryBook1","SliderStoryBook2","SliderStoryBook3","SliderStoryBook4"];export{o as SliderStoryBook1,u as SliderStoryBook2,d as SliderStoryBook3,m as SliderStoryBook4,i as SliderStroyBook,Q as __namedExportsOrder,O as default};
//# sourceMappingURL=slider.stories-bbb16a5e.js.map
