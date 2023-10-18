import{a as e,j as c}from"./jsx-runtime-e43ccb36.js";import{r as S}from"./index-1b03fe98.js";/* empty css              */import{c as t,F as h}from"./custom-picker-86da82ae.js";import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const O={title:"Data Entry/DateTimePicker",component:t},i=()=>e("div",{children:c(h,{children:[e(t,{width:"300px",label:"年月日时分",placeholder:"年月日时分",showStyle:"CommonHHMMSS",componentId:"testTime4",size:"small"}),e("br",{}),e(t,{width:"300px",label:"时分秒",placeholder:"时分秒",showStyle:"HHMMSS",componentId:"testTime5"}),e("br",{}),e("div",{children:"时分"}),e(t,{width:"300px",placeholder:"时分",showStyle:"HHMM",componentId:"testTime8"})]})});i.storyName="DateTimePicker 时间";const r=()=>e("div",{children:c(h,{children:[e("div",{children:"年"}),e(t,{width:"300px",placeholder:"年",showStyle:"OnlyYear",componentId:"testTime001"}),e("br",{}),e("div",{children:"年月"}),e(t,{width:"300px",placeholder:"年月",showStyle:"YearAndMonth",componentId:"testTime2"}),e("br",{}),e("div",{children:"年月日"}),e(t,{width:"300px",placeholder:"年月日",showStyle:"Common",componentId:"testTime3"}),e("div",{children:"禁用状态"}),e(t,{width:"300px",disabled:!0,placeholder:"请输入日期",showStyle:"Common",componentId:"testTime6",value:"2023-01-23"}),e("br",{}),e("div",{children:"过滤器模式"}),e(t,{label:"到港日期",filterMode:!0,labelPosition:"left",showStyle:"HHMM",componentId:"testTime5cb"})]})});r.storyName="DateTimePicker";const l=()=>{const[x]=S.useState(),[g]=S.useState(),p=(o,d)=>{const a=o.split("-");let m=parseInt(a[0],10),n=parseInt(a[1],10);if(n+=d,n>12){const s=parseInt((n-1)/12,10);n=n%12===0?12:n%12,m+=s}else if(n<=0){n=Math.abs(n);const s=parseInt((n+12)/12,10);m-=s}n=n===0?1:n;const k=n<10?"0"+n:n+"";return m+"-"+k};return e("div",{children:c(h,{children:[e("div",{children:"年"}),e(t,{isRange:!0,width:"300px",placeholderStartDate:"开始年份",placeholderEndDate:"结束年份",showStyle:"OnlyYear",componentId:"testTime2a"}),e("br",{}),e("div",{children:"年月"}),e(t,{isRange:!0,width:"300px",placeholderStartDate:"开始年月",placeholderEndDate:"结束年月",showStyle:"YearAndMonth",componentId:"testTime2testId"}),e("br",{}),e("div",{children:"动态范围年月"}),e(t,{isRange:!0,width:"300px",placeholderStartDate:"开始年月",placeholderEndDate:"结束年月",showStyle:"YearAndMonth",componentId:"testTime2b",monthItemClickFun:o=>{let d=p(o[0].YYYY+"-"+o[0].MM,5),a=o[0].YYYY+"-"+(o[0].MM<10?"0"+o[0].MM:o[0].MM);o.length>1&&(a=p(o[1].YYYY+"-"+o[1].MM,-5),d=o[1].YYYY+"-"+(o[1].MM<10?"0"+o[1].MM:o[1].MM)),sessionStorage.setItem("pui-month-min",a),sessionStorage.setItem("pui-month-max",d)},minDate:x,maxDate:g,dynamicRangeDate:!0,minSession:"pui-month-min",maxSession:"pui-month-max"}),e("br",{}),e("div",{children:"年月日"}),e(t,{isRange:!0,width:"300px",placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",showStyle:"Common",componentId:"testTime3b"}),e("br",{}),e("div",{children:"年月日时分"}),e(t,{isRange:!0,width:"300px",placeholderStartDate:"开始时间",placeholderEndDate:"结束时间",showStyle:"CommonHHMMSS",componentId:"testTime4b"}),e("br",{}),e("div",{children:"年月日时分 最大/最小日期"}),e(t,{isRange:!0,width:"300px",placeholderStartDate:"开始时间",placeholderEndDate:"结束时间",showStyle:"CommonHHMMSS",componentId:"testTime4bTest",minDate:"2022-12-16 10:20:25",maxDate:"2023-01-10 18:30:35"}),e("br",{}),e("div",{children:"时分秒"}),e(t,{isRange:!0,width:"300px",placeholderStartDate:"开始时间",placeholderEndDate:"结束时间",showStyle:"HHMMSS",componentId:"testTime5b"}),e("br",{}),e("div",{children:"禁用状态"}),e(t,{disabled:!0,isRange:!0,width:"300px",placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",showStyle:"HHMMSS",componentId:"testTime5c",value:["13:29","15:49"]}),e("br",{}),e("div",{children:"过滤器模式 / 可以为空"}),e(t,{label:"到港日期",placeholder:"请输入日期",width:"200px",isRange:!0,filterMode:!0,allowNullDate:!0,labelPosition:"left",showStyle:"CommonHHMMSS",componentId:"testTime6cb"}),e("br",{}),e(t,{label:"到港日期",placeholder:"请输入日期",width:"200px",isRange:!0,filterMode:!0,labelPosition:"left",showStyle:"HHMM",componentId:"testTime6cbafda",value:["13:29","15:49"],clearFun:()=>{console.log("clearFun")},onValueChange:o=>{console.log("valueChange",o)}})]})})};l.storyName="DateTimePicker 范围选择面板";var M,u,D;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <div>
      <Form>
        <DateTimePicker width="300px" label="年月日时分" placeholder="年月日时分" showStyle="CommonHHMMSS" componentId="testTime4" size="small" />
        <br />
        <DateTimePicker width="300px" label="时分秒" placeholder="时分秒" showStyle="HHMMSS" componentId="testTime5" />
        <br />
        <div>时分</div>
        <DateTimePicker width="300px" placeholder="时分" showStyle="HHMM" componentId="testTime8" />
      </Form>
    </div>;
}`,...(D=(u=i.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var w,b,T;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <div>
      <Form>
        <div>年</div>
        <DateTimePicker width="300px" placeholder="年" showStyle="OnlyYear" componentId="testTime001" />
        <br />
        <div>年月</div>
        <DateTimePicker width="300px" placeholder="年月" showStyle="YearAndMonth" componentId="testTime2" />

        <br />
        <div>年月日</div>
        <DateTimePicker width="300px" placeholder="年月日" showStyle="Common" componentId="testTime3" />

        <div>禁用状态</div>
        <DateTimePicker width="300px" disabled placeholder="请输入日期" showStyle="Common" componentId="testTime6" value="2023-01-23" />

        <br />

        {/* <DateTimePicker
          label="label在左边"
          labelPosition="left"
          width="300px"
          placeholder="label在左边"
          showStyle="Common"
          componentId="testTime7"
         /> */}

        <div>过滤器模式</div>
        <DateTimePicker label="到港日期"
      // placeholder="到港日期"
      filterMode
      // width="200px"
      labelPosition="left" showStyle="HHMM" componentId="testTime5cb"
      // value="15:48"
      />
      </Form>
    </div>;
}`,...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var y,v,I;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [minDate] = useState();
  const [maxDate] = useState();
  const addMonths = (yearMonthDay: string, monthNum: number) => {
    const arr = yearMonthDay.split('-'); // 2020-08-19或2020-08
    let year = parseInt(arr[0], 10);
    let month: number = parseInt(arr[1], 10);
    month += monthNum;
    if (month > 12) {
      // 月份加
      const yearNum = parseInt((month - 1) / 12, 10);
      month = month % 12 === 0 ? 12 : month % 12;
      year += yearNum;
    } else if (month <= 0) {
      // 份减月
      month = Math.abs(month);
      const yearNum = parseInt((month + 12) / 12, 10);
      year -= yearNum;
    }
    month = month === 0 ? 1 : month;
    const month2: string = month < 10 ? '0' + month : month + '';
    return year + '-' + month2;
  };
  const clearFun = () => {
    console.log('clearFun');
  };
  const valueChange = (val: any) => {
    console.log('valueChange', val);
  };
  const monthItemClickFun = (data: any) => {
    let eDate = addMonths(data[0].YYYY + '-' + data[0].MM, 5);
    let min = data[0].YYYY + '-' + (data[0].MM < 10 ? '0' + data[0].MM : data[0].MM);
    if (data.length > 1) {
      min = addMonths(data[1].YYYY + '-' + data[1].MM, -5);
      eDate = data[1].YYYY + '-' + (data[1].MM < 10 ? '0' + data[1].MM : data[1].MM);
    }
    sessionStorage.setItem('pui-month-min', min);
    sessionStorage.setItem('pui-month-max', eDate);
  };
  return <div>
      <Form>
        <div>年</div>
        <DateTimePicker isRange width="300px" placeholderStartDate="开始年份" placeholderEndDate="结束年份" showStyle="OnlyYear" componentId="testTime2a" />
        <br />
        <div>年月</div>
        <DateTimePicker isRange width="300px" placeholderStartDate="开始年月" placeholderEndDate="结束年月" showStyle="YearAndMonth" componentId="testTime2testId" />

        <br />
        <div>动态范围年月</div>
        <DateTimePicker isRange width="300px" placeholderStartDate="开始年月" placeholderEndDate="结束年月" showStyle="YearAndMonth" componentId="testTime2b" monthItemClickFun={monthItemClickFun} minDate={minDate} maxDate={maxDate} dynamicRangeDate minSession="pui-month-min" maxSession="pui-month-max" />

        <br />
        <div>年月日</div>
        <DateTimePicker isRange width="300px" placeholderStartDate="开始日期" placeholderEndDate="结束日期" showStyle="Common" componentId="testTime3b" />

        <br />
        <div>年月日时分</div>
        <DateTimePicker isRange width="300px" placeholderStartDate="开始时间" placeholderEndDate="结束时间" showStyle="CommonHHMMSS" componentId="testTime4b" />
        <br />
        <div>年月日时分 最大/最小日期</div>
        <DateTimePicker isRange width="300px" placeholderStartDate="开始时间" placeholderEndDate="结束时间" showStyle="CommonHHMMSS" componentId="testTime4bTest" minDate="2022-12-16 10:20:25" maxDate="2023-01-10 18:30:35" />

        <br />
        <div>时分秒</div>
        <DateTimePicker isRange width="300px" placeholderStartDate="开始时间" placeholderEndDate="结束时间" showStyle="HHMMSS" componentId="testTime5b" />
        <br />
        <div>禁用状态</div>
        <DateTimePicker disabled isRange width="300px" placeholderStartDate="开始日期" placeholderEndDate="结束日期" showStyle="HHMMSS" componentId="testTime5c" value={['13:29', '15:49']} />

        <br />
        <div>过滤器模式 / 可以为空</div>
        <DateTimePicker label="到港日期" placeholder="请输入日期" width="200px" isRange filterMode allowNullDate labelPosition="left" showStyle="CommonHHMMSS" componentId="testTime6cb" />
        <br />
        <DateTimePicker label="到港日期" placeholder="请输入日期" width="200px" isRange filterMode
      // allowNullDate
      labelPosition="left" showStyle="HHMM" componentId="testTime6cbafda" value={['13:29', '15:49']} clearFun={clearFun} onValueChange={valueChange} />
      </Form>
    </div>;
}`,...(I=(v=l.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const j=["DateTimePickerStoryBookTime","DateTimePickerStoryBook","DateTimePickerStoryBook2"];export{r as DateTimePickerStoryBook,l as DateTimePickerStoryBook2,i as DateTimePickerStoryBookTime,j as __namedExportsOrder,O as default};
//# sourceMappingURL=date-time-picker.stories-b94cf031.js.map
