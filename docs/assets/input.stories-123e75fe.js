import{a as e,j as s}from"./jsx-runtime-e43ccb36.js";import{I as r,h as t,i as o,a2 as v,G as J,a3 as K,F as X}from"./custom-picker-1a2c1035.js";import"./index-1b03fe98.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const oe={title:"Data Entry/Input",component:r},a=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Default"}),e("div",{children:e(r,{placeholder:"请输入",onValueChange:$=>{console.log($)}})}),e("br",{}),e("div",{className:"states",children:"Disabled"}),e("div",{children:e(r,{placeholder:"请输入",disabled:!0,suffixIcon:v})}),e("br",{}),e("div",{className:"states",children:"readOnly"}),e("div",{children:e(r,{defaultValue:"test readOnly ",readOnly:!0})}),e("br",{})]})});a.storyName="Input";const n=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Password"}),e("div",{children:e(r,{type:"password",placeholder:"请输入密码"})}),e("br",{})]})});n.storyName="PASSWORD";const i=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Show View Password Button"}),e("div",{children:e(r,{type:"password",placeholder:"点击右侧按钮显示密码",showViewPasswordButton:!0})}),e("br",{})]})});i.storyName="Show View Password Button";const l=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Show Clear Button"}),e("div",{children:e(r,{placeholder:"点击右侧按钮清除",showClearButton:!0})}),e("br",{})]})});l.storyName="Show Clear Button";const d=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Max Length"}),e("div",{children:e(r,{placeholder:"最多输入150个字符",maxLength:150})}),e("br",{})]})});d.storyName="MAX LENGTH";const c=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"自定义后缀"}),e("div",{children:e(r,{placeholder:"自定义ICON",suffixIcon:v})}),e("br",{}),e("div",{children:e(r,{placeholder:"自定义ICON",suffixIcon:e(J,{content:"Show View Suffix Icon",children:e(K,{})})})}),e("br",{}),e("div",{children:e(r,{placeholder:"自定义后缀",suffixContent:"km"})}),e("br",{})]})});c.storyName="Show View Suffix Content & Icon";const p=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Label Top"}),e("div",{children:e(r,{label:"姓名",placeholder:"请输入",error:{show:!0,message:"输入信息有误"},rules:{required:!0,message:"必须填写"}})}),e("br",{})]})});p.storyName="Label Top";const u=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Label Left"}),e("div",{children:s(X,{children:[e(r,{label:{text:"姓名",position:"left"},placeholder:"请输入",rules:{required:!0,message:"必须填写"}}),e(r,{label:{text:"家庭地址",position:"left"},placeholder:"请输入",rules:{required:!0,message:"必须填写"},error:{show:!0,message:"输入信息有误"}})]})}),e("br",{})]})});u.storyName="Label Left";const h=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Label Left / Text Align Right"}),e("div",{children:s(X,{children:[e(r,{label:{text:"姓名",textAlign:"right",position:"left"},placeholder:"请输入",rules:{required:!0,message:"必须填写"}}),e(r,{label:{text:"家庭地址",textAlign:"right",position:"left"},placeholder:"请输入",rules:{required:!0,message:"必须填写"},error:{show:!0,message:"输入信息有误"}})]})}),e("br",{})]})});h.storyName="Label Left / Text Align Right";const m=()=>e(t,{children:s(o,{span:12,children:[e("div",{className:"states",children:"Status"}),e("div",{children:e(r,{placeholder:"请输入",size:"tiny"})}),e("br",{}),e("br",{}),e("div",{children:e(r,{placeholder:"请输入",disabled:!0,suffixIcon:v,size:"tiny"})}),e("br",{}),e("br",{}),e("div",{children:e(r,{placeholder:"请输入",rules:{required:!0,message:"必须填写"},error:{show:!0,message:"输入信息有误"},size:"tiny"})}),e("br",{}),e("br",{}),e("div",{className:"states",children:"Type"}),e("div",{children:e(r,{type:"password",placeholder:"请输入密码",size:"tiny"})}),e("br",{}),e("br",{}),e("div",{children:e(r,{type:"password",placeholder:"点击右侧按钮显示密码",showViewPasswordButton:!0,size:"tiny"})}),e("br",{}),e("br",{}),e("div",{children:e(r,{placeholder:"点击右侧按钮清除",showClearButton:!0,size:"tiny"})}),e("br",{}),e("br",{}),e("div",{children:e(r,{placeholder:"最多输入150个字符",maxLength:150,size:"tiny"})}),e("br",{}),e("br",{}),e("div",{children:e(r,{placeholder:"请输入",suffixContent:"元",size:"tiny"})}),e("br",{})]})});m.storyName="Tiny Size";var b,w,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Default</div>
        <div>
          <Input placeholder="请输入" onValueChange={val => {
          console.log(val);
        }} />
        </div>
        <br />
        <div className="states">Disabled</div>
        <div>
          <Input placeholder="请输入" disabled suffixIcon={IconCheck} />
        </div>
        <br />
        <div className="states">readOnly</div>
        <div>
          <Input defaultValue="test readOnly " readOnly />
        </div>
        <br />
      </Col>
    </Row>;
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var y,g,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Password</div>
        <div>
          <Input type="password" placeholder="请输入密码" />
        </div>
        <br />
      </Col>
    </Row>;
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,C,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Show View Password Button</div>
        <div>
          <Input type="password" placeholder="点击右侧按钮显示密码" showViewPasswordButton />
        </div>
        <br />
      </Col>
    </Row>;
}`,...(N=(C=i.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var x,B,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Show Clear Button</div>
        <div>
          <Input placeholder="点击右侧按钮清除" showClearButton />
        </div>
        <br />
      </Col>
    </Row>;
}`,...(k=(B=l.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var R,L,z;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Max Length</div>
        <div>
          <Input placeholder="最多输入150个字符" maxLength={150} />
        </div>
        <br />
      </Col>
    </Row>;
}`,...(z=(L=d.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var V,T,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">自定义后缀</div>
        <div>
          <Input placeholder="自定义ICON" suffixIcon={IconCheck} />
        </div>
        <br />
        <div>
          <Input placeholder="自定义ICON" suffixIcon={<Tooltip content="Show View Suffix Icon">
                <IconLink />
              </Tooltip>} />
        </div>
        <br />
        <div>
          <Input placeholder="自定义后缀" suffixContent="km" />
        </div>
        <br />
      </Col>
    </Row>;
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var O,P,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Label Top</div>
        <div>
          <Input label="姓名" placeholder="请输入" error={{
          show: true,
          message: '输入信息有误'
        }} rules={{
          required: true,
          message: '必须填写'
        }} />
        </div>
        <br />
      </Col>
    </Row>;
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,F,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Label Left</div>
        <div>
          <Form>
            <Input label={{
            text: '姓名',
            position: 'left'
          }} placeholder="请输入" rules={{
            required: true,
            message: '必须填写'
          }} />
            <Input label={{
            text: '家庭地址',
            position: 'left'
          }} placeholder="请输入" rules={{
            required: true,
            message: '必须填写'
          }} error={{
            show: true,
            message: '输入信息有误'
          }} />
          </Form>
        </div>
        <br />
      </Col>
    </Row>;
}`,...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var j,E,M;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Label Left / Text Align Right</div>
        <div>
          <Form>
            <Input label={{
            text: '姓名',
            textAlign: 'right',
            position: 'left'
          }} placeholder="请输入" rules={{
            required: true,
            message: '必须填写'
          }} />
            <Input label={{
            text: '家庭地址',
            textAlign: 'right',
            position: 'left'
          }} placeholder="请输入" rules={{
            required: true,
            message: '必须填写'
          }} error={{
            show: true,
            message: '输入信息有误'
          }} />
          </Form>
        </div>
        <br />
      </Col>
    </Row>;
}`,...(M=(E=h.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var G,H,W;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Row>
      <Col span={12}>
        <div className="states">Status</div>
        <div>
          <Input placeholder="请输入" size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input placeholder="请输入" disabled suffixIcon={IconCheck} size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input placeholder="请输入" rules={{
          required: true,
          message: '必须填写'
        }} error={{
          show: true,
          message: '输入信息有误'
        }} size="tiny" />
        </div>
        <br />
        <br />
        <div className="states">Type</div>
        <div>
          <Input type="password" placeholder="请输入密码" size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input type="password" placeholder="点击右侧按钮显示密码" showViewPasswordButton size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input placeholder="点击右侧按钮清除" showClearButton size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input placeholder="最多输入150个字符" maxLength={150} size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input placeholder="请输入" suffixContent="元" size="tiny" />
        </div>
        <br />
      </Col>
    </Row>;
}`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const ae=["InputsStoryBook","InputsStoryBook1","InputsStoryBook2","InputsStoryBook3","InputsStoryBook4","InputsStoryBook5","InputsStoryBook6","InputsStoryBook7","InputsStoryBook8","InputsStoryBook9"];export{a as InputsStoryBook,n as InputsStoryBook1,i as InputsStoryBook2,l as InputsStoryBook3,d as InputsStoryBook4,c as InputsStoryBook5,p as InputsStoryBook6,u as InputsStoryBook7,h as InputsStoryBook8,m as InputsStoryBook9,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=input.stories-123e75fe.js.map
