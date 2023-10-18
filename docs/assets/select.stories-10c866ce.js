import{a as e,j as o,F as b}from"./jsx-runtime-e43ccb36.js";import{r as B}from"./index-1b03fe98.js";/* empty css              */import{S as t,F as w,B as k}from"./custom-picker-1a2c1035.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const ke={title:"Data Entry/Select",component:t},s=()=>{const[r,l]=B.useState("老虎");return e("div",{style:{width:"300px"},children:o(w,{children:[e(t,{value:r,options:"狗:dog,猫,狮子,老虎,鲸鱼",label:"动物",onValueChange:l,placeholder:"请选择"}),e("br",{}),e("div",{children:"禁用状态"}),e(t,{value:r,options:"狗,猫,狮子,老虎,鲸鱼",onValueChange:l,disabled:!0})]})})};s.storyName="Select";const a=()=>e("div",{style:{width:"300px"},children:e(t,{options:[10,12,33],label:"数字",placeholder:"请选择",onValueChange:r=>{console.log(typeof r)}})});a.storyName="Number Options";const i=()=>e("div",{style:{width:"300px"},children:e(t,{options:"狗:dog,猫,狮子,老虎,鲸鱼",label:"动物",placeholder:"请选择"})});i.storyName="String Options";const d=()=>e("div",{style:{width:"300px"},children:e(t,{label:"分组选项",options:[{group:"动物",options:[{text:"狗",value:"狗"},{text:"猫",value:"猫"}]},{group:"交通工具",options:[{text:"汽车",value:"汽车"},{text:"飞机",value:"飞机"}]}],placeholder:"请选择"})});d.storyName="Group Options";const n=()=>e("div",{style:{width:"300px"},children:e(t,{label:"分组选项",options:[{text:o(b,{children:["猫 ",e("span",{className:"leg",children:"4条腿"})]}),value:"狗"},{text:o(b,{children:["企鹅 ",e("span",{className:"leg",children:"2条腿"})]}),value:"猫"}],placeholder:"请选择"})});n.storyName="Custom Options Style";const c=()=>o("div",{style:{width:"300px"},children:[e("div",{children:"出错状态"}),o(w,{children:[e(t,{options:"狗,猫,狮子,老虎,鲸鱼",error:{show:!0,message:"未选择"}}),e(t,{label:"动物",options:"狗,猫,狮子,老虎,鲸鱼",rules:[{required:!0}]})]})]});c.storyName="Error";const p=()=>o("div",{style:{width:"300px"},children:[e("div",{children:"显示过滤输入框"}),e(t,{options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger,动物",filterInput:!0,filterInputPlaceholder:"查找动物"})]});p.storyName="Show filter Input";const u=()=>o("div",{style:{width:"300px"},children:[e("div",{children:"显示清除按钮"}),e("div",{className:"select-story",children:e(t,{defaultValue:"dog",options:"狗:dog,猫,狮子,老虎,鲸鱼",label:"动物",placeholder:"请选择",showClearButton:!0})})]});u.storyName="Clear Button";const v=()=>{const[r,l]=B.useState(!1);return o("div",{style:{width:"300px"},children:[e("div",{children:"控制菜单显示"}),o("div",{className:"select-story",children:[e(k,{onClick:()=>{l(!0)},marginRight:"10px",children:"打开菜单"}),e(k,{onClick:()=>{l(!1)},children:"关闭菜单"}),e("br",{}),e("br",{}),e(t,{open:r,options:"狗:dog,猫,狮子,老虎,鲸鱼,非常长非常长非常长非常长非常长非常长非常长非常长动物",label:"动物",placeholder:"请选择",onMenuVisibleChange:l})]})]})};v.storyName="Menu Control";const m=()=>{const[r,l]=B.useState("老虎");return o("div",{style:{width:"300px"},children:[e("div",{children:"过滤器模式"}),e("div",{className:"select-story",children:o(w,{children:[e(t,{value:r,options:"狗:dog,猫,狮子,老虎,鲸鱼,非常长非常长非常长非常长非常长非常长非常长非常长动物",label:"动物-宽度自动",filterMode:!0,filterInput:!0,showClearButton:!0,onValueChange:l,optionsStyle:{minWidth:"100px"}}),e("br",{}),e("div",{children:"禁用状态"}),e(t,{value:r,options:"狗:dog,猫,狮子,老虎,鲸鱼,非常长非常长非常长非常长非常长非常长非常长非常长动物",label:"动物-宽度自动",filterMode:!0,filterInput:!0,showClearButton:!0,disabled:!0,onValueChange:l,optionsStyle:{minWidth:"100px"}})]})})]})};m.storyName="Filter Mode";const h=()=>o("div",{style:{width:"300px"},children:[e("div",{children:"禁用选项"}),e("div",{className:"select-story",children:e(t,{options:[{text:"可用选项1",value:0},{text:"不可用选项",value:1,disabled:!0},{text:"可用选项2",value:2},{text:"可用选项3",value:3}],optionsStyle:{minWidth:"100px"}})})]});h.storyName="Disable Options";const S=()=>o("div",{style:{width:"300px"},children:[e("div",{children:"自定义底部"}),e("div",{className:"select-story",children:e(t,{options:[{text:"可用选项1",value:0},{text:"可用选项2",value:2},{text:"可用选项3",value:3}],optionsStyle:{minWidth:"100px"},bottomElement:e("div",{style:{textAlign:"center",padding:"15px"},children:"底部内容"})})})]});S.storyName="Bottom Element";const y=()=>o("div",{style:{width:"300px"},children:[e("div",{children:"加载中状态"}),e("div",{className:"select-story",children:e(t,{options:[{text:"可用选项1",value:0},{text:"可用选项2",value:2},{text:"可用选项3",value:3}],optionsStyle:{minWidth:"100px"},loading:!0})})]});y.storyName="Loading State";const x=()=>o(b,{children:[e("div",{children:"定义option选项展示哪些字段以及分隔符: "}),e("br",{}),o("div",{style:{width:"300px"},className:"select-story",children:[e(t,{options:"狗:dog,猫:cat,狮子:lion,老虎:tiger",label:"text:value",placeholder:"请选择",display:["text","value"]}),e(t,{options:"狗:dog,猫:cat,狮子:lion,老虎:tiger",label:"isSameDisplay=false",placeholder:"请选择",display:["text","value"],isSameDisplay:!1}),e(t,{options:"狗:dog,猫:cat,狮子:lion,老虎:tiger",label:"value-text",placeholder:"请选择",display:["value","text"],separator:"-"})]})]});x.storyName="Customize Option";const g=()=>o(b,{children:[e("div",{children:"小尺寸"}),e("br",{}),e("div",{style:{width:"200px"},className:"select-story",children:e(t,{size:"tiny",showClearButton:!0,keepClearButton:!0,options:"狗:dog,猫:cat,狮子:lion,老虎:tiger",placeholder:"请选择"})})]});g.storyName="Tiny Size";var N,f,C;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<string>('老虎');
  return <div style={{
    width: '300px'
  }}>
      <Form>
        <Select value={val} options="狗:dog,猫,狮子,老虎,鲸鱼" label="动物" onValueChange={setVal} placeholder="请选择" />
        <br />
        <div>禁用状态</div>
        <Select value={val} options="狗,猫,狮子,老虎,鲸鱼" onValueChange={setVal} disabled />
      </Form>
    </div>;
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var V,O,I;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Select options={[10, 12, 33]} label="数字" placeholder="请选择" onValueChange={val => {
      console.log(typeof val);
    }} />
    </div>;
}`,...(I=(O=a.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var W,F,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Select options="狗:dog,猫,狮子,老虎,鲸鱼" label="动物" placeholder="请选择" />
    </div>;
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var M,E,z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Select label="分组选项" options={[{
      group: '动物',
      options: [{
        text: '狗',
        value: '狗'
      }, {
        text: '猫',
        value: '猫'
      }]
    }, {
      group: '交通工具',
      options: [{
        text: '汽车',
        value: '汽车'
      }, {
        text: '飞机',
        value: '飞机'
      }]
    }]} placeholder="请选择" />
    </div>;
}`,...(z=(E=d.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var _,j,T;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <Select label="分组选项" options={[{
      text: <>
                猫 <span className="leg">4条腿</span>
              </>,
      value: '狗'
    }, {
      text: <>
                企鹅 <span className="leg">2条腿</span>
              </>,
      value: '猫'
    }]} placeholder="请选择" />
    </div>;
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var q,A,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <div>出错状态</div>
      <Form>
        <Select options="狗,猫,狮子,老虎,鲸鱼" error={{
        show: true,
        message: '未选择'
      }} />
        <Select label="动物" options="狗,猫,狮子,老虎,鲸鱼" rules={[{
        required: true
      }]} />
      </Form>
    </div>;
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var R,G,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <div>显示过滤输入框</div>
      <Select options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger,动物" filterInput filterInputPlaceholder="查找动物" />
    </div>;
}`,...(L=(G=p.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var $,H,J;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <div>显示清除按钮</div>
      <div className="select-story">
        <Select defaultValue="dog" options="狗:dog,猫,狮子,老虎,鲸鱼" label="动物" placeholder="请选择" showClearButton />
      </div>
    </div>;
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <div style={{
    width: '300px'
  }}>
      <div>控制菜单显示</div>
      <div className="select-story">
        <Button onClick={() => {
        setIsOpen(true);
      }} marginRight="10px">
          打开菜单
        </Button>
        <Button onClick={() => {
        setIsOpen(false);
      }}>
          关闭菜单
        </Button>
        <br />
        <br />
        <Select open={isOpen} options="狗:dog,猫,狮子,老虎,鲸鱼,非常长非常长非常长非常长非常长非常长非常长非常长动物" label="动物" placeholder="请选择" onMenuVisibleChange={setIsOpen} />
      </div>
    </div>;
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<string>('老虎');
  return <div style={{
    width: '300px'
  }}>
      <div>过滤器模式</div>
      <div className="select-story">
        <Form>
          <Select value={val} options="狗:dog,猫,狮子,老虎,鲸鱼,非常长非常长非常长非常长非常长非常长非常长非常长动物" label="动物-宽度自动" filterMode filterInput showClearButton onValueChange={setVal} optionsStyle={{
          minWidth: '100px'
        }} />
          <br />
          <div>禁用状态</div>
          <Select value={val} options="狗:dog,猫,狮子,老虎,鲸鱼,非常长非常长非常长非常长非常长非常长非常长非常长动物" label="动物-宽度自动" filterMode filterInput showClearButton disabled onValueChange={setVal} optionsStyle={{
          minWidth: '100px'
        }} />
        </Form>
      </div>
    </div>;
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,oe;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <div>禁用选项</div>
      <div className="select-story">
        <Select options={[{
        text: '可用选项1',
        value: 0
      }, {
        text: '不可用选项',
        value: 1,
        disabled: true
      }, {
        text: '可用选项2',
        value: 2
      }, {
        text: '可用选项3',
        value: 3
      }]} optionsStyle={{
        minWidth: '100px'
      }} />
      </div>
    </div>;
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,le,se;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <div>自定义底部</div>
      <div className="select-story">
        <Select options={[{
        text: '可用选项1',
        value: 0
      }, {
        text: '可用选项2',
        value: 2
      }, {
        text: '可用选项3',
        value: 3
      }]} optionsStyle={{
        minWidth: '100px'
      }} bottomElement={<div style={{
        textAlign: 'center',
        padding: '15px'
      }}>底部内容</div>} />
      </div>
    </div>;
}`,...(se=(le=S.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ae,ie,de;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <div style={{
    width: '300px'
  }}>
      <div>加载中状态</div>
      <div className="select-story">
        <Select options={[{
        text: '可用选项1',
        value: 0
      }, {
        text: '可用选项2',
        value: 2
      }, {
        text: '可用选项3',
        value: 3
      }]} optionsStyle={{
        minWidth: '100px'
      }} loading />
      </div>
    </div>;
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ne,ce,pe;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <div>定义option选项展示哪些字段以及分隔符: </div>
      <br />
      <div style={{
      width: '300px'
    }} className="select-story">
        <Select options="狗:dog,猫:cat,狮子:lion,老虎:tiger" label="text:value" placeholder="请选择" display={['text', 'value']} />
        <Select options="狗:dog,猫:cat,狮子:lion,老虎:tiger" label="isSameDisplay=false" placeholder="请选择" display={['text', 'value']} isSameDisplay={false} />
        <Select options="狗:dog,猫:cat,狮子:lion,老虎:tiger" label="value-text" placeholder="请选择" display={['value', 'text']} separator="-" />
      </div>
    </>;
}`,...(pe=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,ve,me;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <div>小尺寸</div>
      <br />
      <div style={{
      width: '200px'
    }} className="select-story">
        <Select size="tiny" showClearButton keepClearButton options="狗:dog,猫:cat,狮子:lion,老虎:tiger" placeholder="请选择" />
      </div>
    </>;
}`,...(me=(ve=g.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};const Ne=["SelectStoryBook","SelectStoryBook1","SelectStoryBook11","SelectStoryBook12","SelectStoryBook13","SelectStoryBook2","SelectStoryBook3","SelectStoryBook4","SelectStoryBook5","SelectStoryBook6","SelectStoryBook7","SelectStoryBook8","SelectStoryBook9","SelectStoryBook10","SelectStoryBook14"];export{s as SelectStoryBook,a as SelectStoryBook1,x as SelectStoryBook10,i as SelectStoryBook11,d as SelectStoryBook12,n as SelectStoryBook13,g as SelectStoryBook14,c as SelectStoryBook2,p as SelectStoryBook3,u as SelectStoryBook4,v as SelectStoryBook5,m as SelectStoryBook6,h as SelectStoryBook7,S as SelectStoryBook8,y as SelectStoryBook9,Ne as __namedExportsOrder,ke as default};
//# sourceMappingURL=select.stories-10c866ce.js.map
