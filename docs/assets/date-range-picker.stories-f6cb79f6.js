import{a as e,j as u}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import{b as t,F as y,r as h}from"./custom-picker-86da82ae.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const z={title:"Data Entry/DateRangePicker",component:t},o=()=>{const[a,r]=i.useState(["2020-01-01","2020-01-02"]);return e("div",{children:u(y,{children:[e(t,{value:a,width:"330px",label:"来访日期",showClearButton:!0,placeholderStartDate:"请选择开始日期",placeholderEndDate:"请选择结束日期",onValueChange:l=>{console.log(l),r(l)}}),e("br",{}),e("div",{children:"禁用状态"}),e(t,{width:"330px",label:"来访日期",value:a,showClearButton:!0,placeholderStartDate:"请选择开始日期",placeholderEndDate:"请选择结束日期",onValueChange:l=>{console.log(l),r(l)},disabled:!0})]})})};o.storyName="DateRangePicker";const n=()=>{const[a,r]=i.useState(["",""]),[l,f]=i.useState([null,null]);return i.useEffect(()=>{const V=a[1]!==""?h(new Date(a[1]),-5):null,M=a[0]!==""?h(new Date(a[0]),5):null;f([V,M])},[a]),u("div",{children:[e(t,{filterMode:!0,width:"330px",label:"来访日期(年月日)",showClearButton:!0,placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",nameStartDate:"startDate",nameEndDate:"endDate",value:a,range:l,onValueChange:r}),e("br",{}),"输出值：",JSON.stringify(a)]})};n.storyName="Data Binding";const d=()=>u("div",{children:[e(t,{width:"330px",label:"限定日期 2022-05-01 ~ 2022-05-31",showClearButton:!0,placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",range:["2022-05-01","2022-05-31"]}),e("br",{}),e("br",{}),e(t,{width:"330px",label:"限定结束日期 2022-10-12",showClearButton:!0,placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",range:[null,"2022-10-12"]}),e("br",{}),e("br",{}),e(t,{width:"330px",label:"限定开始日期 2022-03-12",showClearButton:!0,placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",range:["2022-03-12",null]})]});d.storyName="Limited Date";const s=()=>{const[a,r]=i.useState(["2020-01-01","2020-01-02"]);return e("div",{children:u(y,{children:[e(t,{value:a,label:"保修时间",showClearButton:!0,placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",filterMode:!0,onValueChange:r}),e("br",{}),e("div",{children:"禁用状态"}),e(t,{value:a,label:"保修时间",showClearButton:!0,placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",filterMode:!0,onValueChange:r,disabled:!0})]})})};s.storyName="Filter Mode";const c=()=>u("div",{children:[e(t,{label:"保修时间",showClearButton:!0,placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",filterMode:!0,mustPickStartEnd:!0}),e("br",{})," ",e("br",{}),e(t,{label:"保修时间",showClearButton:!0,placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",mustPickStartEnd:!0,width:"300px"})]});c.storyName="Force to pick start and end";var p,D,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<string[]>(['2020-01-01', '2020-01-02']);
  return <div>
      <Form>
        <DateRangePicker value={val} width="330px" label="来访日期" showClearButton placeholderStartDate="请选择开始日期" placeholderEndDate="请选择结束日期" onValueChange={v => {
        console.log(v);
        setVal(v);
      }} />
        <br />
        <div>禁用状态</div>
        <DateRangePicker width="330px" label="来访日期" value={val} showClearButton placeholderStartDate="请选择开始日期" placeholderEndDate="请选择结束日期" onValueChange={v => {
        console.log(v);
        setVal(v);
      }} disabled />
      </Form>
    </div>;
}`,...(g=(D=o.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var S,m,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [dates, setDates] = useState(['', '']);
  const [range, setRange] = useState<any>([null, null]);
  useEffect(() => {
    const rangeStart = dates[1] !== '' ? addMonth(new Date(dates[1]), -5) : null;
    const rangeEnd = dates[0] !== '' ? addMonth(new Date(dates[0]), 5) : null;
    setRange([rangeStart, rangeEnd]);
  }, [dates]);
  return <div>
      <DateRangePicker filterMode width="330px" label="来访日期(年月日)" showClearButton placeholderStartDate="开始日期" placeholderEndDate="结束日期" nameStartDate="startDate" nameEndDate="endDate" value={dates} range={range} onValueChange={setDates} />
      <br />
      输出值：{JSON.stringify(dates)}
    </div>;
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,k,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <div>
      <DateRangePicker width="330px" label="限定日期 2022-05-01 ~ 2022-05-31" showClearButton placeholderStartDate="开始日期" placeholderEndDate="结束日期" range={['2022-05-01', '2022-05-31']} />

      <br />
      <br />

      <DateRangePicker width="330px" label="限定结束日期 2022-10-12" showClearButton placeholderStartDate="开始日期" placeholderEndDate="结束日期" range={[null, '2022-10-12']} />

      <br />
      <br />

      <DateRangePicker width="330px" label="限定开始日期 2022-03-12" showClearButton placeholderStartDate="开始日期" placeholderEndDate="结束日期" range={['2022-03-12', null]} />
    </div>;
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,B,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<string[]>(['2020-01-01', '2020-01-02']);
  return <div>
      <Form>
        <DateRangePicker value={val} label="保修时间" showClearButton placeholderStartDate="开始日期" placeholderEndDate="结束日期" filterMode onValueChange={setVal} />
        <br />
        <div>禁用状态</div>
        <DateRangePicker value={val} label="保修时间" showClearButton placeholderStartDate="开始日期" placeholderEndDate="结束日期" filterMode onValueChange={setVal} disabled />
      </Form>
    </div>;
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var P,R,x;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <div>
      <DateRangePicker label="保修时间" showClearButton placeholderStartDate="开始日期" placeholderEndDate="结束日期" filterMode mustPickStartEnd />
      <br /> <br />
      <DateRangePicker label="保修时间" showClearButton placeholderStartDate="开始日期" placeholderEndDate="结束日期" mustPickStartEnd width="300px" />
    </div>;
}`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const A=["DateRangePickerStoryBook","DateRangePickerStoryBook1","DateRangePickerStoryBook2","DateRangePickerStoryBook3","DateRangePickerStoryBook4"];export{o as DateRangePickerStoryBook,n as DateRangePickerStoryBook1,d as DateRangePickerStoryBook2,s as DateRangePickerStoryBook3,c as DateRangePickerStoryBook4,A as __namedExportsOrder,z as default};
//# sourceMappingURL=date-range-picker.stories-f6cb79f6.js.map
