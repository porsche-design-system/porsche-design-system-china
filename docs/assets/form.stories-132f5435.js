import{j as t,a as e}from"./jsx-runtime-e43ccb36.js";import{F as o,R as N,o as u,h as G,i as y,I as a,D as be,S as D,b as L,c as P,n as fe,d as E,C as q,a4 as s,T,U as Be,a as g,B as l,f as b,Z as I,G as we,a5 as Se,g as Ce}from"./custom-picker-86da82ae.js";import{r as p}from"./index-1b03fe98.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const Ae={title:"Data Entry/Form",component:o},x=()=>{const[r,i]=p.useState({position:"top"}),[m,d]=p.useState("left"),[h,A]=p.useState({lastName:"李",uploadFiles:[{name:"图片1.jpg",uid:"uid1234",status:"success",fileId:"fileId1234"}]}),ye=n=>{A({...h,testTime4b:n}),console.log("testChange2",n,h)},xe=n=>{A({...h,testTime4:n}),console.log("testChange1",n,h)};return t("div",{children:[t(N,{label:{text:"表单标签显示方式",style:{fontWeight:"bold"}},onValueChange:n=>{i(JSON.parse(n))},value:JSON.stringify(r),children:[e(u,{text:"标签文字在上面",value:JSON.stringify({position:"top"})}),e(u,{text:"标签文字在左边",value:JSON.stringify({position:"left",textAlign:"left"})}),e(u,{text:"标签文字在左边，文字向右对齐",value:JSON.stringify({position:"left",textAlign:"right"})})]}),e("br",{})," ",e("br",{}),t(N,{label:{text:"底部按钮位置",style:{fontWeight:"bold"}},onValueChange:n=>{d(n)},value:m,children:[e(u,{text:"左",value:"left"}),e(u,{text:"中",value:"center"}),e(u,{text:"右",value:"right"})]}),e("br",{}),e("br",{}),t(G,{children:[t(y,{span:15,children:["表单数据捆绑现已支持多层级",e("br",{})," ",e("br",{}),t(o,{labelLayout:r,data:h,onDataChange:n=>{console.log(n),A(n)},onSubmit:(n,c)=>{console.log("submit",n),console.log("error",c)},children:[e(a,{label:"姓",name:"lastName",width:"44%",rules:{required:!0},marginRight:"2%"}),e(a,{label:"名",name:"firstName",width:"54%",rules:{required:!0,message:"必须填写"},instantValidate:!0}),e(be,{name:"info.birthday",label:"生日",width:"44%",marginRight:"2%",rules:[{required:!0,message:"日期必须填写"}]}),e(D,{options:"男:male,女:female",label:"性别",width:"54%",name:"gender"}),e(a,{label:"电子邮件",name:"info.yyy.email",rules:[{type:"email",message:"邮件格式不正确"},{required:!0,message:"电子邮件必须填写"}]}),e(L,{label:"上牌日期",name:"dateRange",showClearButton:!0,mustPickStartEnd:!0,rules:[{required:!0,message:"日期必须填写"}]}),e(L,{label:"修理时间",name:"dateRange2",showClearButton:!0}),e(a,{label:"手机号",name:"mobile",rules:[{required:!0,message:"必须填写"},{type:"number",message:"手机号必须是数字"}]}),e(P,{width:"300px",label:"DateTimePicker到港日期",placeholder:"请输入日期",showStyle:"CommonHHMMSS",name:"testTime4",componentId:"testTime4",rules:[{required:!0,message:"日期必须填写"}],onValueChange:xe}),e(P,{label:"DateTimePicker到港日期2",isRange:!0,width:"300px",placeholderStartDate:"开始日期",placeholderEndDate:"结束日期",showStyle:"CommonHHMMSS",name:"testTime4b",componentId:"testTime4b",rules:[{required:!0,message:"到港日期2必须填写"}],onValueChange:ye}),e(fe,{name:"search"}),e(E,{label:"保时捷车主",name:"ownCar"}),t(N,{name:"job",label:"职业",children:[e(u,{text:"教师"}),e(u,{text:"医生"}),e(u,{text:"警察"}),e(u,{text:"律师"})]}),t(q,{label:"兴趣爱好",name:"hobbies",rules:[{validator:(n,c)=>c.length>=3,message:"请选择至少3个爱好"}],children:[e(s,{text:"唱歌"}),e(s,{text:"玩游戏"}),e(s,{text:"跳舞"}),e(s,{text:"游泳"})]}),e(T,{label:"家庭地址",rules:{required:!0,message:"必须填写"},name:"address"}),e(Be,{rules:{message:"必须传1文件",validator:(n,c)=>c.length>=1},multiple:!0,maxCount:1,label:"上传身份证正反面",name:"uploadFiles",headers:{Authorization:"Bearer 1a5830xxx-12ee-4f69-a114-f0be5a40350a"},action:"https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload",formDataMapping:n=>n.length===0?[]:n.map(c=>{var O,M;return{name:c.name,uid:c.uid,status:c.status,fileId:c.fileId||((M=(O=c.response)==null?void 0:O.data)==null?void 0:M.fileId)}})}),e(s,{name:"xxx.agree",text:"同意条款"}),e("br",{})," ",e("br",{}),t(g,{align:m,children:[e(l,{type:"primary",icon:b,submit:!0,children:"提交"}),e(l,{type:"default",icon:I,children:"取消"})]})]})]}),e(y,{span:9,style:{paddingLeft:"15px",whiteSpace:"pre"},children:JSON.stringify(h,null,2)})]})]})};x.storyName="Form";const f=()=>e("div",{children:t(o,{style:{width:"600px"},children:[e(a,{label:"Field A",width:"44%",marginRight:"2%"}),e(a,{label:"Field B",width:"54%"}),e(be,{label:"Field A",width:"44%",marginRight:"2%"}),e(D,{label:"Field B",options:"男:male,女:female",width:"54%"}),e(a,{label:"Field A"}),e(a,{label:"Field B"})]})});f.storyName="Columns";const B=()=>t("div",{children:[e("div",{children:"标签文字在上面"}),e("br",{}),t(o,{labelLayout:{position:"top"},children:[e(a,{label:"Field A",width:"44%",marginRight:"2%"}),e(a,{label:"Field B",width:"54%"})]}),e("div",{children:"标签文字在左边"}),e("br",{}),t(o,{labelLayout:{position:"left",textAlign:"left"},children:[e(a,{label:"Field A",width:"44%",marginRight:"2%"}),e(a,{label:"Field B",width:"54%"})]}),e("div",{children:"标签文字在左边，文字向右对齐"}),e("br",{}),t(o,{labelLayout:{position:"left",textAlign:"right"},children:[e(a,{label:"Field A",width:"44%",marginRight:"2%"}),e(a,{label:"Field B",width:"54%"})]}),e("br",{}),e("div",{children:"自定义标签"}),t(o,{labelLayout:{position:"left",textAlign:"right"},children:[e(a,{label:t("span",{children:[e("span",{style:{color:"red"},children:"自定义"}),"Label",e(we,{content:"提示信息",children:e(Se,{style:{fontSize:"16px"}})})]}),width:"44%",marginRight:"2%"}),e(a,{label:{text:t("span",{children:[e("span",{style:{color:"red"},children:"自定义"}),"Label"]})},width:"54%"})]}),e("div",{children:"按钮在左边"}),e("br",{}),t(g,{align:"left",children:[e(l,{type:"primary",icon:b,submit:!0,children:"提交"}),e(l,{type:"default",icon:I,children:"取消"})]}),e("div",{children:"按钮在中间"}),e("br",{}),t(g,{align:"center",children:[e(l,{type:"primary",icon:b,submit:!0,children:"提交"}),e(l,{type:"default",icon:I,children:"取消"})]}),e("div",{children:"按钮在右边"}),e("br",{}),t(g,{align:"right",children:[e(l,{type:"primary",icon:b,submit:!0,children:"提交"}),e(l,{type:"default",icon:I,children:"取消"})]})]});B.storyName="Label";const w=()=>e("div",{children:t(o,{style:{width:"600px"},onSubmit:(r,i)=>{console.log("submit",r),console.log("error",i)},children:[e(a,{label:"姓名",width:"44%",marginRight:"2%",name:"uerName",placeholder:"请填写姓名",rules:{required:!0,message:"必须填写"}}),e(a,{type:"password",label:"密码",width:"54%",name:"password",placeholder:"请填写密码",rules:{required:!0,message:"必须填写"}}),t(q,{label:"兴趣爱好",name:"hobbies",rules:[{validator:(r,i)=>i.length>=3,message:"请选择至少3个爱好"}],children:[e(s,{text:"唱歌"}),e(s,{text:"玩游戏"}),e(s,{text:"跳舞"}),e(s,{text:"游泳"})]}),e(a,{label:"手机号",name:"mobile",rules:[{required:!0,message:"必须填写"},{type:"number",message:"手机号必须是数字"}]}),e(a,{name:"email",label:"电子邮箱",rules:{type:"email",message:"邮件格式不正确"}}),e(T,{label:"家庭地址",rules:{required:!0,message:"必须填写"},name:"address"}),e(l,{type:"primary",icon:b,submit:!0,children:"提交"})]})});w.storyName="Error Handle";const S=()=>{const[r,i]=p.useState({lastName:"李",firstName:"宁",hobbies:["唱歌","跳舞"],ownCar:!0,job:"警察"});return e("div",{children:t(G,{children:[e(y,{span:15,children:t(o,{data:r,onDataChange:m=>{i(m)},onSubmit:(m,d)=>{console.log("submit",m),console.log("error",d)},children:[e(a,{label:"姓",width:"44%",marginRight:"2%",name:"lastName",rules:{required:!0,message:"必须填写"}}),e(a,{label:"名",width:"54%",name:"firstName",rules:{required:!0,message:"必须填写"}}),t(q,{label:"兴趣爱好",name:"hobbies",rules:[{validator:(m,d)=>d.length>=3,message:"请选择至少3个爱好"}],children:[e(s,{text:"唱歌"}),e(s,{text:"玩游戏"}),e(s,{text:"跳舞"}),e(s,{text:"游泳"})]}),e(a,{label:"手机号",name:"mobile",rules:[{required:!0,message:"必须填写"},{type:"number",message:"手机号必须是数字"}]}),e(a,{name:"email",label:"电子邮箱",rules:{type:"email",message:"邮件格式不正确"}}),e(E,{label:"保时捷车主",name:"ownCar"}),t(N,{name:"job",label:"职业",children:[e(u,{text:"教师"}),e(u,{text:"医生"}),e(u,{text:"警察"}),e(u,{text:"律师"})]}),t(g,{children:[e(l,{type:"primary",icon:b,submit:!0,children:"提交"}),e(l,{type:"default",icon:I,children:"取消"})]})]})}),e(y,{span:9,style:{paddingLeft:"15px",whiteSpace:"pre"},children:JSON.stringify(r,null,2)})]})})};S.storyName="Data Binding";const C=()=>{const[r,i]=p.useState({lastName:"李",hobbies:["唱歌","跳舞"],ownCar:!0,job:"警察"});return t("div",{children:[t(G,{children:[e(y,{span:15,children:t(o,{name:"form",data:r,onDataChange:m=>{i(m)},onSubmit:(m,d)=>{console.log("submit",m),console.log("error",d)},children:[e(a,{label:"姓",width:"44%",marginRight:"2%",name:"lastName",rules:{required:!0,message:"必须填写"}}),e(a,{label:"名",width:"54%",name:"firstName",rules:{required:!0,message:"必须填写"}}),t(q,{label:"兴趣爱好",name:"hobbies",rules:[{validator:(m,d)=>d.length>=3,message:"请选择至少3个爱好"}],children:[e(s,{text:"唱歌"}),e(s,{text:"玩游戏"}),e(s,{text:"跳舞"}),e(s,{text:"游泳"})]}),e(a,{label:"手机号",name:"mobile",rules:[{required:!0,message:"必须填写"},{type:"number",message:"手机号必须是数字"}]}),e(a,{name:"email",label:"电子邮箱",rules:{type:"email",message:"邮件格式不正确"}}),e(E,{label:"保时捷车主",name:"ownCar"})]})}),e(y,{span:9,style:{paddingLeft:"15px",whiteSpace:"pre"},children:JSON.stringify(r,null,2)})]}),e(l,{type:"primary",onClick:()=>{o.findByName("form").submit()},children:"Submit"})]})};C.storyName="Outside Submit Button";const v=()=>e(l,{onClick:()=>{Ce.show({title:"样例弹出表单",onOk(){return o.findByName("MyForm").submit()},content:e("div",{children:t(o,{name:"MyForm",onSubmit:(r,i)=>i?Promise.reject():new Promise(m=>{setTimeout(()=>{m("")},2e3)}),children:[e(a,{label:"姓名",rules:[{required:!0}],name:"name"}),e(D,{label:"性别",rules:[{required:!0}],name:"gender",options:"男,女"}),e(a,{label:"保时捷邮箱",rules:[{type:"string",pattern:/^[.A-Za-z0-9u4e00-u9fa5]+@porsche-[a-zA-Z0-9_-]+.com$/,message:"仅支持绑定保时捷邮箱"},{required:!0,message:"请输入邮箱"}],name:"email"})]})})})},children:"显示弹出表单"});v.storyName="Modal Form Submit";const k=()=>t("div",{children:[t(o,{name:"my-form",width:"200px",onSubmit:(r,i)=>{console.log("submit",r),console.log("error",i)},children:[e(a,{label:"姓名",name:"name"}),e(D,{options:[{text:"先生",value:0},{text:"女士",value:1}],label:"性别",name:"gender"})]}),e(l,{onClick:()=>{o.findByName("my-form").reset()},marginRight:"5px",children:"重置数据"}),e(l,{onClick:()=>{o.findByName("my-form").setData({name:"蕾蕾",gender:1})},marginRight:"5px",children:"设置数据"}),e(l,{type:"primary",onClick:()=>{o.findByName("my-form").submit()},children:"提交"})]});k.storyName="Change Data";const F=()=>{const[r,i]=p.useState({address:"东方路12号",name:"",startDate:"2022-12-12"}),m=()=>e(s,{name:"checked"}),d=p.useCallback(()=>t("div",{children:[e(T,{name:"address",maxLength:20}),e(m,{})]}),[]);return t("div",{children:[t(o,{data:r,onDataChange:i,style:{width:"600px"},children:["子组件也可以使用 name 属性",e(a,{name:"name",maxLength:10}),e(d,{}),e(()=>e(L,{nameStartDate:"startDate",nameEndDate:"endDate"}),{}),e("br",{}),e(l,{onClick:()=>i({address:"长城路",name:"名字",startDate:"2012-12-12"}),children:"修改数据"})]}),JSON.stringify(r)]})};F.storyName="嵌套组件";const R=()=>{const[r,i]=p.useState(!0);return e("div",{children:t(o,{style:{width:"600px"},name:"form9",children:[e(a,{label:"姓名",name:"name",maxLength:10,rules:{required:!0,message:"必填"},error:{show:!1},requiredMark:r}),e(a,{label:"年龄",name:"age",maxLength:10,rules:[{required:!0,message:"必填"}]}),t(g,{children:[e(l,{type:"default",onClick:()=>{o.findByName("form9").submit()},children:"提交"}),e(l,{type:"default",onClick:()=>{o.findByName("form9").reset()},children:"重置"}),t(l,{type:"secondary",onClick:()=>{i(!r)},children:[r?"隐藏":"显示","必填标记"]})]})]})})};R.storyName="是否显示必填标记";var J,_,H;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [labelLayout, setLabelLayout] = useState<FormLabelStyle>({
    position: 'top'
  });
  const [buttonAlign, setButtonAlign] = useState('left');
  const [data, setData] = useState<any>({
    lastName: '李',
    // upload默认值必须字段：name,uid,status
    // 默认值对象结构需要和formDataMapping的返回值保持一致，因为默认值需要经过formDataMapping处理
    uploadFiles: [{
      name: '图片1.jpg',
      uid: 'uid1234',
      status: 'success',
      fileId: 'fileId1234'
    }]
  });
  const testChange2 = (val: any) => {
    setData({
      ...data,
      testTime4b: val
    });
    console.log('testChange2', val, data);
  };
  const testChange1 = (val: any) => {
    setData({
      ...data,
      testTime4: val
    });
    console.log('testChange1', val, data);
  };
  return <div>
      <RadioGroup label={{
      text: '表单标签显示方式',
      style: {
        fontWeight: 'bold'
      }
    }} onValueChange={value => {
      setLabelLayout(JSON.parse(value));
    }} value={JSON.stringify(labelLayout)}>
        <Radio text="标签文字在上面" value={JSON.stringify({
        position: 'top'
      })} />
        <Radio text="标签文字在左边" value={JSON.stringify({
        position: 'left',
        textAlign: 'left'
      })} />
        <Radio text="标签文字在左边，文字向右对齐" value={JSON.stringify({
        position: 'left',
        textAlign: 'right'
      })} />
      </RadioGroup>
      <br /> <br />
      <RadioGroup label={{
      text: '底部按钮位置',
      style: {
        fontWeight: 'bold'
      }
    }} onValueChange={value => {
      setButtonAlign(value);
    }} value={buttonAlign}>
        <Radio text="左" value="left" />
        <Radio text="中" value="center" />
        <Radio text="右" value="right" />
      </RadioGroup>
      <br />
      <br />
      <Row>
        <Col span={15}>
          表单数据捆绑现已支持多层级
          <br /> <br />
          <Form labelLayout={labelLayout} data={data} onDataChange={d => {
          console.log(d);
          setData(d);
        }} onSubmit={(data, error) => {
          console.log('submit', data);
          console.log('error', error);
        }}>
            <Input label="姓" name="lastName" width="44%" rules={{
            required: true
          }} marginRight="2%" />
            <Input label="名" name="firstName" width="54%" rules={{
            required: true,
            message: '必须填写'
          }} instantValidate />
            <DatePicker name="info.birthday" label="生日" width="44%" marginRight="2%" rules={[{
            required: true,
            message: '日期必须填写'
          }]} />
            <Select options="男:male,女:female" label="性别" width="54%" name="gender" />
            <Input label="电子邮件" name="info.yyy.email" rules={[{
            type: 'email',
            message: '邮件格式不正确'
          }, {
            required: true,
            message: '电子邮件必须填写'
          }]} />
            <DateRangePicker label="上牌日期" name="dateRange" showClearButton mustPickStartEnd rules={[{
            required: true,
            message: '日期必须填写'
          }]} />
            <DateRangePicker label="修理时间" name="dateRange2" showClearButton />
            <Input label="手机号" name="mobile" rules={[{
            required: true,
            message: '必须填写'
          }, {
            type: 'number',
            message: '手机号必须是数字'
          }]} />
            <DateTimePicker width="300px" label="DateTimePicker到港日期" placeholder="请输入日期" showStyle="CommonHHMMSS" name="testTime4" componentId="testTime4" rules={[{
            required: true,
            message: '日期必须填写'
          }]} onValueChange={testChange1} />
            <DateTimePicker label="DateTimePicker到港日期2" isRange width="300px" placeholderStartDate="开始日期" placeholderEndDate="结束日期" showStyle="CommonHHMMSS" name="testTime4b" componentId="testTime4b" rules={[{
            required: true,
            message: '到港日期2必须填写'
          }]} onValueChange={testChange2} />
            <Search name="search" />
            <Switch label="保时捷车主" name="ownCar" />
            <RadioGroup name="job" label="职业">
              <Radio text="教师" />
              <Radio text="医生" />
              <Radio text="警察" />
              <Radio text="律师" />
            </RadioGroup>
            <CheckBoxGroup label="兴趣爱好" name="hobbies" rules={[{
            validator: (_, val) => {
              return val.length >= 3;
            },
            message: '请选择至少3个爱好'
          }]}>
              <CheckBox text="唱歌" />
              <CheckBox text="玩游戏" />
              <CheckBox text="跳舞" />
              <CheckBox text="游泳" />
            </CheckBoxGroup>
            <TextArea label="家庭地址" rules={{
            required: true,
            message: '必须填写'
          }} name="address" />
            <Upload rules={{
            message: '必须传1文件',
            validator: (_, val) => {
              return val.length >= 1;
            }
          }} multiple maxCount={1} label="上传身份证正反面" name="uploadFiles" headers={{
            Authorization: 'Bearer 1a5830xxx-12ee-4f69-a114-f0be5a40350a'
          }} action="https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload" formDataMapping={files => {
            if (files.length === 0) {
              return [];
            }
            return files.map(f => {
              return {
                name: f.name,
                uid: f.uid,
                status: f.status,
                fileId: (f as any).fileId || f.response?.data?.fileId
              };
            });
          }} />
            <CheckBox name="xxx.agree" text="同意条款" />
            <br /> <br />
            <ButtonGroup align={(buttonAlign as any)}>
              <Button type="primary" icon={IconArrowHeadRight} submit>
                提交
              </Button>
              <Button type="default" icon={IconClose}>
                取消
              </Button>
            </ButtonGroup>
          </Form>
        </Col>
        <Col span={9} style={{
        paddingLeft: '15px',
        whiteSpace: 'pre'
      }}>
          {JSON.stringify(data, null, 2)}
        </Col>
      </Row>
    </div>;
}`,...(H=(_=x.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var j,W,V;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <div>
      <Form style={{
      width: '600px'
    }}>
        <Input label="Field A" width="44%" marginRight="2%" />
        <Input label="Field B" width="54%" />
        <DatePicker label="Field A" width="44%" marginRight="2%" />
        <Select label="Field B" options="男:male,女:female" width="54%" />
        <Input label="Field A" />
        <Input label="Field B" />
      </Form>
    </div>;
}`,...(V=(W=f.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var z,Z,U;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <div>
      <div>标签文字在上面</div>
      <br />
      <Form labelLayout={{
      position: 'top'
    }}>
        <Input label="Field A" width="44%" marginRight="2%" />
        <Input label="Field B" width="54%" />
      </Form>
      <div>标签文字在左边</div>
      <br />
      <Form labelLayout={{
      position: 'left',
      textAlign: 'left'
    }}>
        <Input label="Field A" width="44%" marginRight="2%" />
        <Input label="Field B" width="54%" />
      </Form>
      <div>标签文字在左边，文字向右对齐</div>
      <br />
      <Form labelLayout={{
      position: 'left',
      textAlign: 'right'
    }}>
        <Input label="Field A" width="44%" marginRight="2%" />
        <Input label="Field B" width="54%" />
      </Form>
      <br />
      <div>自定义标签</div>
      <Form labelLayout={{
      position: 'left',
      textAlign: 'right'
    }}>
        <Input label={<span>
              <span style={{
          color: 'red'
        }}>自定义</span>Label
              <Tooltip content="提示信息">
                <IconInformation style={{
            fontSize: '16px'
          }} />
              </Tooltip>
            </span>} width="44%" marginRight="2%" />
        <Input label={{
        text: <span>
                <span style={{
            color: 'red'
          }}>自定义</span>Label
              </span>
      }} width="54%" />
      </Form>
      <div>按钮在左边</div>
      <br />
      <ButtonGroup align="left">
        <Button type="primary" icon={IconArrowHeadRight} submit>
          提交
        </Button>
        <Button type="default" icon={IconClose}>
          取消
        </Button>
      </ButtonGroup>
      <div>按钮在中间</div>
      <br />
      <ButtonGroup align="center">
        <Button type="primary" icon={IconArrowHeadRight} submit>
          提交
        </Button>
        <Button type="default" icon={IconClose}>
          取消
        </Button>
      </ButtonGroup>
      <div>按钮在右边</div>
      <br />
      <ButtonGroup align="right">
        <Button type="primary" icon={IconArrowHeadRight} submit>
          提交
        </Button>
        <Button type="default" icon={IconClose}>
          取消
        </Button>
      </ButtonGroup>
    </div>;
}`,...(U=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var $,K,Q;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <div>
      <Form style={{
      width: '600px'
    }} onSubmit={(data, error) => {
      console.log('submit', data);
      console.log('error', error);
    }}>
        <Input label="姓名" width="44%" marginRight="2%" name="uerName" placeholder="请填写姓名" rules={{
        required: true,
        message: '必须填写'
      }} />
        <Input type="password" label="密码" width="54%" name="password" placeholder="请填写密码" rules={{
        required: true,
        message: '必须填写'
      }} />
        <CheckBoxGroup label="兴趣爱好" name="hobbies" rules={[{
        validator: (_, val) => {
          return val.length >= 3;
        },
        message: '请选择至少3个爱好'
      }]}>
          <CheckBox text="唱歌" />
          <CheckBox text="玩游戏" />
          <CheckBox text="跳舞" />
          <CheckBox text="游泳" />
        </CheckBoxGroup>
        <Input label="手机号" name="mobile" rules={[{
        required: true,
        message: '必须填写'
      }, {
        type: 'number',
        message: '手机号必须是数字'
      }]} />
        <Input name="email" label="电子邮箱" rules={{
        type: 'email',
        message: '邮件格式不正确'
      }} />
        <TextArea label="家庭地址" rules={{
        required: true,
        message: '必须填写'
      }} name="address" />
        <Button type="primary" icon={IconArrowHeadRight} submit>
          提交
        </Button>
      </Form>
    </div>;
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [data, setData] = useState({
    lastName: '李',
    firstName: '宁',
    hobbies: ['唱歌', '跳舞'],
    ownCar: true,
    job: '警察'
  });
  return <div>
      <Row>
        <Col span={15}>
          <Form data={data} onDataChange={d => {
          setData(d);
        }} onSubmit={(data, error) => {
          console.log('submit', data);
          console.log('error', error);
        }}>
            <Input label="姓" width="44%" marginRight="2%" name="lastName" rules={{
            required: true,
            message: '必须填写'
          }} />
            <Input label="名" width="54%" name="firstName" rules={{
            required: true,
            message: '必须填写'
          }} />
            <CheckBoxGroup label="兴趣爱好" name="hobbies" rules={[{
            validator: (_, val) => {
              return val.length >= 3;
            },
            message: '请选择至少3个爱好'
          }]}>
              <CheckBox text="唱歌" />
              <CheckBox text="玩游戏" />
              <CheckBox text="跳舞" />
              <CheckBox text="游泳" />
            </CheckBoxGroup>
            <Input label="手机号" name="mobile" rules={[{
            required: true,
            message: '必须填写'
          }, {
            type: 'number',
            message: '手机号必须是数字'
          }]} />
            <Input name="email" label="电子邮箱" rules={{
            type: 'email',
            message: '邮件格式不正确'
          }} />
            <Switch label="保时捷车主" name="ownCar" />
            <RadioGroup name="job" label="职业">
              <Radio text="教师" />
              <Radio text="医生" />
              <Radio text="警察" />
              <Radio text="律师" />
            </RadioGroup>
            <ButtonGroup>
              <Button type="primary" icon={IconArrowHeadRight} submit>
                提交
              </Button>
              <Button type="default" icon={IconClose}>
                取消
              </Button>
            </ButtonGroup>
          </Form>
        </Col>
        <Col span={9} style={{
        paddingLeft: '15px',
        whiteSpace: 'pre'
      }}>
          {JSON.stringify(data, null, 2)}
        </Col>
      </Row>
    </div>;
}`,...(ee=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,ae,re;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [data, setData] = useState({
    lastName: '李',
    hobbies: ['唱歌', '跳舞'],
    ownCar: true,
    job: '警察'
  });
  return <div>
      <Row>
        <Col span={15}>
          <Form name="form" data={data} onDataChange={d => {
          setData(d);
        }} onSubmit={(data, error) => {
          console.log('submit', data);
          console.log('error', error);
        }}>
            <Input label="姓" width="44%" marginRight="2%" name="lastName" rules={{
            required: true,
            message: '必须填写'
          }} />
            <Input label="名" width="54%" name="firstName" rules={{
            required: true,
            message: '必须填写'
          }} />
            <CheckBoxGroup label="兴趣爱好" name="hobbies" rules={[{
            validator: (_, val) => {
              return val.length >= 3;
            },
            message: '请选择至少3个爱好'
          }]}>
              <CheckBox text="唱歌" />
              <CheckBox text="玩游戏" />
              <CheckBox text="跳舞" />
              <CheckBox text="游泳" />
            </CheckBoxGroup>
            <Input label="手机号" name="mobile" rules={[{
            required: true,
            message: '必须填写'
          }, {
            type: 'number',
            message: '手机号必须是数字'
          }]} />
            <Input name="email" label="电子邮箱" rules={{
            type: 'email',
            message: '邮件格式不正确'
          }} />
            <Switch label="保时捷车主" name="ownCar" />
          </Form>
        </Col>
        <Col span={9} style={{
        paddingLeft: '15px',
        whiteSpace: 'pre'
      }}>
          {JSON.stringify(data, null, 2)}
        </Col>
      </Row>
      <Button type="primary" onClick={() => {
      Form.findByName('form').submit();
    }}>
        Submit
      </Button>
    </div>;
}`,...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,le,ne;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Button onClick={() => {
    Modal.show({
      title: '样例弹出表单',
      onOk() {
        // 这里会调用form的onSubmit方法，记得return
        return Form.findByName('MyForm').submit();
      },
      content: <div>
              <Form name="MyForm" onSubmit={(_d, error) => {
          // 有错误
          if (error) {
            return Promise.reject();
          }
          // 表单无错，发请求（模拟）
          return new Promise(resolve => {
            setTimeout(() => {
              resolve('');
            }, 2000);
          });
        }}>
                <Input label="姓名" rules={[{
            required: true
          }]} name="name" />
                <Select label="性别" rules={[{
            required: true
          }]} name="gender" options="男,女" />
                <Input label="保时捷邮箱" rules={[{
            type: 'string',
            pattern: /^[.A-Za-z0-9u4e00-u9fa5]+@porsche-[a-zA-Z0-9_-]+.com$/,
            message: '仅支持绑定保时捷邮箱'
          }, {
            required: true,
            message: '请输入邮箱'
          }]} name="email" />
              </Form>
            </div>
    });
  }}>
      显示弹出表单
    </Button>;
}`,...(ne=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,se,me;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <div>
      <Form name="my-form" width="200px" onSubmit={(data, error) => {
      console.log('submit', data);
      console.log('error', error);
    }}>
        <Input label="姓名" name="name" />
        <Select options={[{
        text: '先生',
        value: 0
      }, {
        text: '女士',
        value: 1
      }]} label="性别" name="gender" />
      </Form>

      <Button onClick={() => {
      Form.findByName('my-form').reset();
    }} marginRight="5px">
        重置数据
      </Button>
      <Button onClick={() => {
      Form.findByName('my-form').setData({
        name: '蕾蕾',
        gender: 1
      });
    }} marginRight="5px">
        设置数据
      </Button>
      <Button type="primary" onClick={() => {
      Form.findByName('my-form').submit();
    }}>
        提交
      </Button>
    </div>;
}`,...(me=(se=k.parameters)==null?void 0:se.docs)==null?void 0:me.source}}};var ue,de,ce;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [data, setData] = useState({
    address: '东方路12号',
    name: '',
    startDate: '2022-12-12'
  });
  const FormWrap2 = () => {
    return <CheckBox name="checked" />;
  };
  const FormWrap = useCallback(() => <div>
        <TextArea name="address" maxLength={20} />
        <FormWrap2 />
      </div>, []);
  const FormWrap3 = () => {
    return <DateRangePicker nameStartDate="startDate" nameEndDate="endDate" />;
  };
  return <div>
      <Form data={data} onDataChange={setData} style={{
      width: '600px'
    }}>
        子组件也可以使用 name 属性
        <Input name="name" maxLength={10} />
        <FormWrap />
        <FormWrap3 />
        <br />
        <Button onClick={() => setData({
        address: '长城路',
        name: '名字',
        startDate: '2012-12-12'
      })}>
          修改数据
        </Button>
      </Form>
      {JSON.stringify(data)}
    </div>;
}`,...(ce=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,he,ge;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [show, setShow] = useState<boolean>(true);
  return <div>
      <Form style={{
      width: '600px'
    }} name="form9">
        <Input label="姓名" name="name" maxLength={10} rules={{
        required: true,
        message: '必填'
      }} error={{
        show: false
      }} requiredMark={show} />
        <Input label="年龄" name="age" maxLength={10} rules={[{
        required: true,
        message: '必填'
      }]} />
        <ButtonGroup>
          <Button type="default" onClick={() => {
          Form.findByName('form9').submit();
        }}>
            提交
          </Button>
          <Button type="default" onClick={() => {
          Form.findByName('form9').reset();
        }}>
            重置
          </Button>
          <Button type="secondary" onClick={() => {
          setShow(!show);
        }}>
            {show ? '隐藏' : '显示'}必填标记
          </Button>
        </ButtonGroup>
      </Form>
    </div>;
}`,...(ge=(he=R.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const Le=["ExampleStoryBook","ExampleStoryBook1","ExampleStoryBook2","ExampleStoryBook3","ExampleStoryBook4","ExampleStoryBook5","ExampleStoryBook6","ExampleStoryBook7","ExampleStoryBook8","ExampleStoryBook9"];export{x as ExampleStoryBook,f as ExampleStoryBook1,B as ExampleStoryBook2,w as ExampleStoryBook3,S as ExampleStoryBook4,C as ExampleStoryBook5,v as ExampleStoryBook6,k as ExampleStoryBook7,F as ExampleStoryBook8,R as ExampleStoryBook9,Le as __namedExportsOrder,Ae as default};
//# sourceMappingURL=form.stories-132f5435.js.map
