import{a as e,j as t}from"./jsx-runtime-e43ccb36.js";import{r as h}from"./index-1b03fe98.js";/* empty css              */import{D as a,F as c}from"./custom-picker-86da82ae.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const L={title:"Data Entry/DatePicker",component:a},i=()=>{const[r,o]=h.useState("2020-01-01");return e("div",{children:t(c,{children:[e(a,{width:"300px",label:"来访日期",placeholder:"请选择",showClearButton:!0,value:r,onValueChange:l=>{console.log(l),o(l)}}),"  ",e(a,{width:"300px",label:"年月",placeholder:"请选择",showClearButton:!0,pickerType:"month"}),e("br",{}),e("div",{children:"禁用状态（禁用状态不再校验日期选择范围等限制）"}),e(a,{width:"300px",label:"来访日期",placeholder:"请选择",value:r,onValueChange:l=>{console.log(l),o(l)},disabled:!0}),"  ",e(a,{width:"300px",label:"年月",placeholder:"请选择",value:r,showClearButton:!0,pickerType:"month",disabled:!0}),e("br",{})]})})};i.storyName="DatePicker";const d=()=>t("div",{children:[e("div",{children:"出错状态"}),e(a,{width:"300px",label:"来访日期",placeholder:"请选择",error:{show:!0,message:"请选择"}}),"  ",e(a,{width:"300px",label:"年月",pickerType:"month",placeholder:"请选择",error:{show:!0,message:"请选择"}})]});d.storyName="Error";const n=()=>t("div",{children:[e("div",{children:"限定时间各种写法"}),e(a,{width:"300px",label:"来访日期(限定时间，In{num}Days 写法)",placeholder:"请选择",range:"In15Days"}),"  ",e(a,{width:"300px",label:"来访日期(限定时间，In{num}Days 写法)",placeholder:"请选择",pickerType:"month",range:"In15Days"}),e("br",{})," ",e("br",{})," ",e("br",{}),e(a,{width:"300px",label:"来访日期(限定时间，字符串写法 '2021-05-01,2021-05-21' )",placeholder:"请选择",range:"2021-05-01,2021-05-21"}),"  ",e(a,{width:"300px",label:"来访日期(限定时间，字符串写法 '2021-05,2021-06' )",placeholder:"请选择",pickerType:"month",range:"2021-05,2021-06"}),e("br",{})," ",e("br",{})," ",e("br",{}),e(a,{width:"300px",label:"来访日期(限定时间，字符串数组 {['2021-05-01','2021-05-21']} )",placeholder:"请选择",range:["2021-05-01","2021-05-21"]}),"  ",e(a,{width:"300px",label:"来访日期(限定时间，字符串数组 {['2021-05','2021-07']} )",placeholder:"请选择",pickerType:"month",range:["2021-05","2021-07"]}),e("br",{})," ",e("br",{})," ",e("br",{}),e(a,{width:"300px",label:"限定时间，Date数组写法{[new Date(2020, 5, 1), new Date(2020, 5, 21)]}(5是六月)",placeholder:"请选择",range:[new Date(2020,5,1),new Date(2020,5,21)]}),"  ",e(a,{width:"300px",label:"限定时间，Date数组写法{[new Date(2020, 5), new Date(2020, 6)]}(5是六月)",placeholder:"请选择",pickerType:"month",range:[new Date(2020,5),new Date(2020,6)]}),e("br",{})," ",e("br",{}),e(a,{width:"300px",label:"限定开始时间 2022-04-04",placeholder:"请选择",range:["2022-04-04",null]}),"  ",e(a,{width:"300px",label:"限定开始时间 2022-04-04",placeholder:"请选择",pickerType:"month",range:["2022-04-04",null]}),e("br",{})," ",e("br",{}),e(a,{width:"300px",label:"限定结束时间 2022-10-13",placeholder:"请选择",range:[null,"2022-10-13"]}),"  ",e(a,{width:"300px",label:"限定结束时间 2022-10",placeholder:"请选择",pickerType:"month",range:[null,"2022-10"]}),e("br",{})," ",e("br",{})]});n.storyName="Limited Time";const p=()=>{const[r,o]=h.useState("2020-01-01"),[l,b]=h.useState("2020-01");return t("div",{children:[e("div",{children:"过滤器模式"}),t(c,{children:[e(a,{value:r,width:"400px",label:"来访日期",placeholder:"请选择",filterMode:!0,showClearButton:!0,onValueChange:o}),"  ",e(a,{value:l,width:"400px",label:"来访日期",placeholder:"请选择",filterMode:!0,showClearButton:!0,pickerType:"month",onValueChange:b}),e("br",{}),e("div",{children:"禁用状态"}),e(a,{value:r,width:"400px",label:"来访日期",placeholder:"请选择",filterMode:!0,showClearButton:!0,onValueChange:o,disabled:!0}),"  ",e(a,{value:l,width:"400px",label:"来访日期",placeholder:"请选择",filterMode:!0,showClearButton:!0,pickerType:"month",onValueChange:b,disabled:!0})]})]})};p.storyName="Limited Time";const s=()=>t("div",{children:[e("div",{children:"禁用日期"}),t("div",{children:["传参形式可以是3种",e("br",{}),"1. 日期string数组 disableDates=","{['2021-07-01', '2021-06-01']}",e("br",{}),"2. Date数组 disableDates=","{[new Date(),new Date()]}",e("br",{}),"3. 方法，返回true为禁用 disableDates=","{d => (  d.getDay() === 0 || d.getDay() === 6  )}"]}),t(c,{children:[e(a,{disableDates:["2022-07-01","2022-06-01"],width:"300px",label:"来访日期（7月1日，6月1日不可选）",placeholder:"请选择"}),"  ",e(a,{disableDates:["2022-07","2022-04"],width:"300px",label:"来访日期（7月，4月不可选）",placeholder:"请选择",pickerType:"month"}),e("br",{}),e(a,{disableDates:r=>r.getDay()===0||r.getDay()===6,width:"300px",label:"来访日期（周六周日不可选）",placeholder:"请选择"}),"  ",e(a,{disableDates:r=>[1,3,5].includes(r.getMonth()+1),width:"300px",label:"来访日期（1, 3, 5月不可选）",placeholder:"请选择",pickerType:"month"})]})]});s.storyName="Disabled Dates";var u,D,w;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<string>('2020-01-01');
  return <div>
      <Form>
        <DatePicker width="300px" label="来访日期" placeholder="请选择" showClearButton value={val} onValueChange={v => {
        console.log(v);
        setVal(v);
      }} />
        &nbsp;&nbsp;
        <DatePicker width="300px" label="年月" placeholder="请选择" showClearButton pickerType="month" />
        <br />
        <div>禁用状态（禁用状态不再校验日期选择范围等限制）</div>
        <DatePicker width="300px" label="来访日期" placeholder="请选择" value={val} onValueChange={v => {
        console.log(v);
        setVal(v);
      }} disabled />
        &nbsp;&nbsp;
        <DatePicker width="300px" label="年月" placeholder="请选择" value={val} showClearButton pickerType="month" disabled />
        <br />
      </Form>
    </div>;
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var m,k,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <div>
      <div>出错状态</div>
      <DatePicker width="300px" label="来访日期" placeholder="请选择" error={{
      show: true,
      message: '请选择'
    }} />
      &nbsp;&nbsp;
      <DatePicker width="300px" label="年月" pickerType="month" placeholder="请选择" error={{
      show: true,
      message: '请选择'
    }} />
    </div>;
}`,...(g=(k=d.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var v,y,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <div>
      <div>限定时间各种写法</div>
      <DatePicker width="300px" label="来访日期(限定时间，In{num}Days 写法)" placeholder="请选择" range="In15Days" />
      &nbsp;&nbsp;
      <DatePicker width="300px" label="来访日期(限定时间，In{num}Days 写法)" placeholder="请选择" pickerType="month" range="In15Days" />
      <br /> <br /> <br />
      <DatePicker width="300px" label="来访日期(限定时间，字符串写法 '2021-05-01,2021-05-21' )" placeholder="请选择" range="2021-05-01,2021-05-21" />
      &nbsp;&nbsp;
      <DatePicker width="300px" label="来访日期(限定时间，字符串写法 '2021-05,2021-06' )" placeholder="请选择" pickerType="month" range="2021-05,2021-06" />
      <br /> <br /> <br />
      <DatePicker width="300px" label="来访日期(限定时间，字符串数组 {['2021-05-01','2021-05-21']} )" placeholder="请选择" range={['2021-05-01', '2021-05-21']} />
      &nbsp;&nbsp;
      <DatePicker width="300px" label="来访日期(限定时间，字符串数组 {['2021-05','2021-07']} )" placeholder="请选择" pickerType="month" range={['2021-05', '2021-07']} />
      <br /> <br /> <br />
      <DatePicker width="300px" label="限定时间，Date数组写法{[new Date(2020, 5, 1), new Date(2020, 5, 21)]}(5是六月)" placeholder="请选择" range={[new Date(2020, 5, 1), new Date(2020, 5, 21)]} />
      &nbsp;&nbsp;
      <DatePicker width="300px" label="限定时间，Date数组写法{[new Date(2020, 5), new Date(2020, 6)]}(5是六月)" placeholder="请选择" pickerType="month" range={[new Date(2020, 5), new Date(2020, 6)]} />
      <br /> <br />
      <DatePicker width="300px" label="限定开始时间 2022-04-04" placeholder="请选择" range={['2022-04-04', null]} />
      &nbsp;&nbsp;
      <DatePicker width="300px" label="限定开始时间 2022-04-04" placeholder="请选择" pickerType="month" range={['2022-04-04', null]} />
      <br /> <br />
      <DatePicker width="300px" label="限定结束时间 2022-10-13" placeholder="请选择" range={[null, '2022-10-13']} />
      &nbsp;&nbsp;
      <DatePicker width="300px" label="限定结束时间 2022-10" placeholder="请选择" pickerType="month" range={[null, '2022-10']} />
      <br /> <br />
    </div>;
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var P,T,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<string>('2020-01-01');
  const [monthVal, setMonthVal] = useState<string>('2020-01');
  return <div>
      <div>过滤器模式</div>
      <Form>
        <DatePicker value={val} width="400px" label="来访日期" placeholder="请选择" filterMode showClearButton onValueChange={setVal} />
        &nbsp;&nbsp;
        <DatePicker value={monthVal} width="400px" label="来访日期" placeholder="请选择" filterMode showClearButton pickerType="month" onValueChange={setMonthVal} />
        <br />
        <div>禁用状态</div>
        <DatePicker value={val} width="400px" label="来访日期" placeholder="请选择" filterMode showClearButton onValueChange={setVal} disabled />
        &nbsp;&nbsp;
        <DatePicker value={monthVal} width="400px" label="来访日期" placeholder="请选择" filterMode showClearButton pickerType="month" onValueChange={setMonthVal} disabled />
      </Form>
    </div>;
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var C,B,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <div>
      <div>禁用日期</div>
      <div>
        传参形式可以是3种
        <br />
        1. 日期string数组 disableDates=
        {"{['2021-07-01', '2021-06-01']}"}
        <br />
        2. Date数组 disableDates=
        {'{[new Date(),new Date()]}'}
        <br />
        3. 方法，返回true为禁用 disableDates=
        {'{d => (  d.getDay() === 0 || d.getDay() === 6  )}'}
      </div>
      <Form>
        <DatePicker disableDates={['2022-07-01', '2022-06-01']} width="300px" label="来访日期（7月1日，6月1日不可选）" placeholder="请选择" />
        &nbsp;&nbsp;
        <DatePicker disableDates={['2022-07', '2022-04']} width="300px" label="来访日期（7月，4月不可选）" placeholder="请选择" pickerType="month" />
        <br />
        <DatePicker disableDates={d => d.getDay() === 0 || d.getDay() === 6} width="300px" label="来访日期（周六周日不可选）" placeholder="请选择" />
        &nbsp;&nbsp;
        <DatePicker disableDates={d => [1, 3, 5].includes(d.getMonth() + 1)} width="300px" label="来访日期（1, 3, 5月不可选）" placeholder="请选择" pickerType="month" />
      </Form>
    </div>;
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const O=["DatePickerStoryBook","DatePickerStoryBook1","DatePickerStoryBook3","DatePickerStoryBook4","DatePickerStoryBook5"];export{i as DatePickerStoryBook,d as DatePickerStoryBook1,n as DatePickerStoryBook3,p as DatePickerStoryBook4,s as DatePickerStoryBook5,O as __namedExportsOrder,L as default};
//# sourceMappingURL=date-picker.stories-20a99086.js.map
