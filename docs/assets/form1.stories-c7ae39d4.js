import{j as i,a as e}from"./jsx-runtime-e43ccb36.js";import{r as l}from"./index-1b03fe98.js";import{F as d,a as u,B as r,I as c,S as y,D as R,b as f,M as E,c as p,C as w,d as q,R as P,T,U as B,e as C,f as M}from"./custom-picker-1a2c1035.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const V={title:"Example/Form 1",component:d},o=()=>{const[t,n]=l.useState({}),[a,D]=l.useState(!1),g={action:"https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload",headers:{Authorization:"Bearer 752aa8fa-97c6-48cf-ad1d-4567b3221687"}};return i("div",{children:[i(u,{children:[e(r,{onClick:()=>{n({contact:"Paul",address:"Shanghai DongFang Road 100",mobile:"15000232222",dealer:"PC",repairStartDate:"2021-01-12",repairEndDate:"2021-05-33",repairStartMonth:"2021-01",repairEndMonth:"2021-05",date:"2021-12-12",services:["Repair"],invoice:"yes",invoiceType:"E-Invoice",testTime3b:[],files:[{uid:"-1",name:"image1.png",status:"success"},{uid:"-2",name:"image2.png",status:"success"}]})},children:"Load Data"}),e(r,{onClick:()=>n({contact:"",address:"",mobile:"",dealer:"",repairStartDate:"",repairEndDate:"",repairStartMonth:"",repairEndMonth:"",date:"",services:[],invoice:"",invoiceType:"",files:[],testTime3b:[]}),children:"清空数据"}),i(r,{onClick:()=>D(!a),children:[a?"启用":"禁用","表单"]})]}),e("br",{}),e("br",{}),e("br",{}),i(d,{name:"form1",labelLayout:{textAlign:"right",position:"left"},data:t,onDataChange:n,width:"80%",onSubmit:(s,S)=>{if(!S)return new Promise(v=>{setTimeout(()=>{v("")},2e3)})},children:[e(c,{label:"Name",name:"contact",width:"45%",rules:{required:!0,message:"Required"},marginRight:"10%",placeholder:"请输入姓名",disabled:a}),e(c,{label:"Mobile",name:"mobile",width:"45%",placeholder:"请输入手机号",disabled:a}),e(y,{label:"Dealer",name:"dealer",width:"45%",options:"Shanghai PuDong:PD,Shanghai PuXi:PC",rules:{required:!0,message:"Required"},placeholder:"请选择",marginRight:"10%",disabled:a}),e(R,{label:"Visit Date",name:"date",width:"45%",rules:{required:!0,message:"Required"},placeholder:"请选择",disabled:a}),e(f,{label:"Repair Date",nameStartDate:"repairStartDate",nameEndDate:"repairEndDate",rules:{required:!0,message:"Required"},placeholderStartDate:"Start",placeholderEndDate:"End",disabled:a}),e(E,{label:"Repair Month1",nameStartDate:"repairStartMonth",nameEndDate:"repairEndMonth",rules:{required:!0,message:"Required"},placeholderStartDate:"Start Month",placeholderEndDate:"End Month"}),e(p,{isRange:!0,label:"Repair Date",width:"300px",placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",showStyle:"Common",rules:{required:!0,message:"日期必填"},componentId:"testTime3b",name:"testTime3b"}),e("br",{}),e(p,{label:"Repair Date",width:"300px",placeholder:"Date",showStyle:"Common",rules:{required:!0,message:"日期必填"},componentId:"testTime3bTest",name:"DealDate"}),e(w,{label:"Service Type",name:"services",options:"Repair,Paint,Change Wheel,Lubrication",disabled:a}),e(q,{label:"Send Invoice",name:"invoice",alterValues:"no,yes",onValueChange:s=>{s==="no"&&(t.invoiceType="",t.invoice=s,n({...t}))},disabled:a}),e(P,{disabled:a||t.invoice==="no",label:"Invoice Type",name:"invoiceType",options:"Paper-Invoice,E-Invoice"}),e(T,{label:"Address",rules:{required:!0,message:"Required"},name:"address",placeholder:"请输入地址",disabled:a}),e(B,{label:"Upload",name:"files",rules:{required:!0,message:"Required"},disabled:a,...g}),i(u,{align:"right",children:[e(r,{type:"default",icon:C,disabled:a,children:"Prev"}),e(r,{type:"primary",icon:M,submit:!0,disabled:a,children:"Submit"})]})]}),e(r,{type:"primary",onClick:()=>{d.findByName("form1").submit()},disabled:a,children:"Submit"}),e("div",{style:{whiteSpace:"pre"},children:JSON.stringify(t,null,2)})]})};var m,h,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [data, setData] = useState<FormData>(({} as any));
  const [disabled, setDisabled] = useState(false);
  const uploadProps = {
    action: 'https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload',
    headers: {
      Authorization: 'Bearer 752aa8fa-97c6-48cf-ad1d-4567b3221687'
    }
  };
  return <div>
      <ButtonGroup>
        <Button onClick={() => {
        setData({
          contact: 'Paul',
          address: 'Shanghai DongFang Road 100',
          mobile: '15000232222',
          dealer: 'PC',
          repairStartDate: '2021-01-12',
          repairEndDate: '2021-05-33',
          repairStartMonth: '2021-01',
          repairEndMonth: '2021-05',
          date: '2021-12-12',
          services: ['Repair'],
          invoice: 'yes',
          invoiceType: 'E-Invoice',
          testTime3b: [],
          files: [{
            uid: '-1',
            name: 'image1.png',
            status: 'success'
          }, {
            uid: '-2',
            name: 'image2.png',
            status: 'success'
          }]
        });
      }}>
          Load Data
        </Button>
        <Button onClick={() => setData({
        contact: '',
        address: '',
        mobile: '',
        dealer: '',
        repairStartDate: '',
        repairEndDate: '',
        repairStartMonth: '',
        repairEndMonth: '',
        date: '',
        services: [],
        invoice: '',
        invoiceType: '',
        files: [],
        testTime3b: []
      })}>
          清空数据
        </Button>
        <Button onClick={() => setDisabled(!disabled)}>
          {disabled ? '启用' : '禁用'}表单
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <br />
      <Form name="form1" labelLayout={{
      textAlign: 'right',
      position: 'left'
    }} data={data} onDataChange={setData} width="80%" onSubmit={(_data, errors) => {
      if (!errors) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('');
          }, 2000);
        });
      }
      // eslint-disable-next-line consistent-return,no-useless-return
      return;
    }}>
        <Input label="Name" name="contact" width="45%" rules={{
        required: true,
        message: 'Required'
      }} marginRight="10%" placeholder="请输入姓名" disabled={disabled} />
        <Input label="Mobile" name="mobile" width="45%" placeholder="请输入手机号" disabled={disabled} />
        <Select label="Dealer" name="dealer" width="45%" options="Shanghai PuDong:PD,Shanghai PuXi:PC" rules={{
        required: true,
        message: 'Required'
      }} placeholder="请选择" marginRight="10%" disabled={disabled} />
        <DatePicker label="Visit Date" name="date" width="45%" rules={{
        required: true,
        message: 'Required'
      }} placeholder="请选择" disabled={disabled} />
        <DateRangePicker label="Repair Date" nameStartDate="repairStartDate" nameEndDate="repairEndDate" rules={{
        required: true,
        message: 'Required'
      }} placeholderStartDate="Start" placeholderEndDate="End" disabled={disabled} />
        <MonthRangePicker label="Repair Month1" nameStartDate="repairStartMonth" nameEndDate="repairEndMonth" rules={{
        required: true,
        message: 'Required'
      }} placeholderStartDate="Start Month" placeholderEndDate="End Month" />
        <DateTimePicker isRange label="Repair Date" width="300px" placeholderStartDate="开始日期" placeholderEndDate="结束日期" showStyle="Common" rules={{
        required: true,
        message: '日期必填'
      }} componentId="testTime3b" name="testTime3b" />
        <br />
        <DateTimePicker label="Repair Date" width="300px" placeholder="Date" showStyle="Common" rules={{
        required: true,
        message: '日期必填'
      }} componentId="testTime3bTest" name="DealDate" />
        <CheckBoxGroup label="Service Type" name="services" options="Repair,Paint,Change Wheel,Lubrication" disabled={disabled} />
        <Switch label="Send Invoice" name="invoice" alterValues="no,yes" onValueChange={val => {
        if (val === 'no') {
          data.invoiceType = '';
          data.invoice = val;
          setData({
            ...data
          });
        }
      }} disabled={disabled} />
        <RadioGroup disabled={disabled || data.invoice === 'no'} label="Invoice Type" name="invoiceType" options="Paper-Invoice,E-Invoice" />
        <TextArea label="Address" rules={{
        required: true,
        message: 'Required'
      }} name="address" placeholder="请输入地址" disabled={disabled} />
        <Upload label="Upload" name="files" rules={{
        required: true,
        message: 'Required'
      }} disabled={disabled} {...uploadProps} />
        <ButtonGroup align="right">
          <Button type="default" icon={IconArrowHeadLeft} disabled={disabled}>
            Prev
          </Button>
          <Button type="primary" icon={IconArrowHeadRight} submit disabled={disabled}>
            Submit
          </Button>
        </ButtonGroup>
      </Form>
      <Button type="primary" onClick={() => {
      Form.findByName('form1').submit();
    }} disabled={disabled}>
        Submit
      </Button>
      <div style={{
      whiteSpace: 'pre'
    }}>{JSON.stringify(data, null, 2)}</div>
    </div>;
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const U=["ExampleStoryBook"];export{o as ExampleStoryBook,U as __namedExportsOrder,V as default};
//# sourceMappingURL=form1.stories-c7ae39d4.js.map
