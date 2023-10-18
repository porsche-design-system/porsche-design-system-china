import{a as e,j as l}from"./jsx-runtime-e43ccb36.js";import{r as D}from"./index-1b03fe98.js";/* empty css              */import{a4 as t,C as o}from"./custom-picker-1a2c1035.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const $={title:"Data Entry/CheckBox",component:t,subcomponents:{CheckBoxGroup:o}},r=()=>{const[d,u]=D.useState(!0);return e("div",{children:l("div",{children:[e(t,{text:"选项1",defaultChecked:!0}),e("br",{}),e(t,{text:"选项2"}),e("br",{}),e(t,{text:"半选状态",partChecked:d,onCheckedChange:()=>{u(!1)}}),e("br",{}),e(t,{text:"失效选项",disabled:!0})]})})};r.storyName="CheckBox";const a=()=>{const[d,u]=D.useState([1,3]);return l("div",{children:[e("div",{children:"value值支持使用number型，options必须写成object形式"}),e("br",{}),e(o,{value:d,onValueChange:u,label:"动画片",options:[{text:"柯南",value:1},{text:"猫和老鼠",value:2},{text:"齐天大圣",value:3},{text:"葫芦娃",value:4}]}),e("br",{})," ",e("br",{}),l("div",{children:["选定值: ",JSON.stringify(d)]})]})};a.storyName="Number Value";const s=()=>e("div",{children:l(o,{label:"兴趣爱好",width:"300px",children:[e(t,{text:"唱歌",value:"singing"}),e(t,{text:"玩游戏",value:"gaming"}),e(t,{text:"跳舞",value:"dance"}),e(t,{text:"游泳",value:"swimming"}),e(t,{text:"听音乐",value:"music"}),e(t,{text:"瑜伽",value:"yoga"})]})});s.storyName="With Label";const c=()=>e("div",{children:e(o,{label:{text:"热门电影",position:"left"},error:{show:!0,message:"必须勾选3个电影"},options:"阿甘正传,肖申克的救赎,寻龙传说,复仇者联盟"})});c.storyName="Error";const n=()=>e("div",{children:e(o,{label:{text:"热门电影",position:"left"},options:"阿甘正传,肖申克的救赎,寻龙传说,复仇者联盟"})});n.storyName="String Options";const i=()=>l("div",{children:[e("div",{children:"设置选项间距"}),e(o,{itemsDistance:{x:"5px"},label:{text:"热门电影",position:"left"},options:"光年正传,肖申克的救赎,寻龙传说,复仇者联盟,瞬息全宇宙,美丽人生,尖峰时刻"})]});i.storyName="Item Distance";var x,p,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [partChecked, setPartChecked] = useState(true);
  return <div>
      <div>
        <CheckBox text="选项1" defaultChecked />
        <br />
        <CheckBox text="选项2" />
        <br />
        <CheckBox text="半选状态" partChecked={partChecked} onCheckedChange={() => {
        setPartChecked(false);
      }} />
        <br />
        <CheckBox text="失效选项" disabled />
      </div>
    </div>;
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,v,k;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [vals, setVals] = useState([1, 3]);
  return <div>
      <div>value值支持使用number型，options必须写成object形式</div>
      <br />
      <CheckBoxGroup value={vals} onValueChange={setVals} label="动画片" options={[{
      text: '柯南',
      value: 1
    }, {
      text: '猫和老鼠',
      value: 2
    }, {
      text: '齐天大圣',
      value: 3
    }, {
      text: '葫芦娃',
      value: 4
    }]} />
      <br /> <br />
      <div>选定值: {JSON.stringify(vals)}</div>
    </div>;
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,B,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <div>
      <CheckBoxGroup label="兴趣爱好" width="300px">
        <CheckBox text="唱歌" value="singing" />
        <CheckBox text="玩游戏" value="gaming" />
        <CheckBox text="跳舞" value="dance" />
        <CheckBox text="游泳" value="swimming" />
        <CheckBox text="听音乐" value="music" />
        <CheckBox text="瑜伽" value="yoga" />
      </CheckBoxGroup>
    </div>;
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var g,S,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div>
      <CheckBoxGroup label={{
      text: '热门电影',
      position: 'left'
    }} error={{
      show: true,
      message: '必须勾选3个电影'
    }} options="阿甘正传,肖申克的救赎,寻龙传说,复仇者联盟" />
    </div>;
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,N,G;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <div>
      <CheckBoxGroup label={{
      text: '热门电影',
      position: 'left'
    }} options="阿甘正传,肖申克的救赎,寻龙传说,复仇者联盟" />
    </div>;
}`,...(G=(N=n.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var w,V,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <div>
      <div>设置选项间距</div>
      <CheckBoxGroup itemsDistance={{
      x: '5px'
    }} label={{
      text: '热门电影',
      position: 'left'
    }} options="光年正传,肖申克的救赎,寻龙传说,复仇者联盟,瞬息全宇宙,美丽人生,尖峰时刻" />
    </div>;
}`,...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const q=["CheckBoxStoryBook","CheckBoxStoryBook1","CheckBoxStoryBook2","CheckBoxStoryBook3","CheckBoxStoryBook4","CheckBoxStoryBook5"];export{r as CheckBoxStoryBook,a as CheckBoxStoryBook1,s as CheckBoxStoryBook2,c as CheckBoxStoryBook3,n as CheckBoxStoryBook4,i as CheckBoxStoryBook5,q as __namedExportsOrder,$ as default};
//# sourceMappingURL=checkbox.stories-cead6192.js.map
