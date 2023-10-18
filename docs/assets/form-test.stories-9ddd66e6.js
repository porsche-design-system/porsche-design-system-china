import{a as e,j as t}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{F as o,g as p,h as l,i as a,I as d,S as u,T as c,B as h}from"./custom-picker-1a2c1035.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const T={title:"Example/Form Test",component:o},r=()=>e("div",{children:e(p,{visible:!0,onOk:()=>{o.findByName("updateForm").submit()},children:t(o,{onDataChange:m=>{console.log(m)},name:"updateForm",children:[t(l,{children:[e(a,{span:12,children:e(d,{label:"名称",width:"96%",name:"channelName",placeholder:"请输入名称",rules:{required:!0,message:"请输入渠道名称"}})}),e(a,{span:12,style:{textAlign:"right"},children:e(u,{label:"类型",width:"96%",options:"PDC:0,第三方:1,自定义:2",name:"channelType",rules:{required:!0,message:"请选择类型"}})})]}),e(l,{children:e(a,{span:24,children:e(c,{label:"描述",placeholder:"请输入描述"})})}),e(h,{type:"primary",submit:!0,children:"测试"})]})})});var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <div>
      <Modal visible onOk={() => {
      Form.findByName('updateForm').submit();
    }}>
        <Form onDataChange={data => {
        console.log(data);
      }} name="updateForm">
          <Row>
            <Col span={12}>
              <Input label="名称" width="96%" name="channelName" placeholder="请输入名称" rules={{
              required: true,
              message: '请输入渠道名称'
            }} />
            </Col>
            <Col span={12} style={{
            textAlign: 'right'
          }}>
              <Select label="类型" width="96%" options="PDC:0,第三方:1,自定义:2" name="channelType" rules={{
              required: true,
              message: '请选择类型'
            }} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <TextArea label="描述" placeholder="请输入描述" />
            </Col>
          </Row>
          <Button type="primary" submit>
            测试
          </Button>
        </Form>
      </Modal>
    </div>;
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const f=["ExampleStoryBook"];export{r as ExampleStoryBook,f as __namedExportsOrder,T as default};
//# sourceMappingURL=form-test.stories-9ddd66e6.js.map
