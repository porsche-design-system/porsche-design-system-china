import{j as a,a as e}from"./jsx-runtime-e43ccb36.js";import{r as f}from"./index-1b03fe98.js";/* empty css              */import{t as m,F as w,u as S}from"./custom-picker-86da82ae.js";/* empty css                    */import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const M={title:"Data Entry/CustomPicker",component:m},p=()=>{const d=["red","blue","green","yellow"],t=S({label:"颜色选择",placeHolder:"请选择",width:"300px",displayRender(i,l,o){return i?a("div",{style:{display:"inline-block"},children:[e("div",{style:{backgroundColor:i,width:o==="small"?"15px":"20px",height:o==="small"?"15px":"20px",float:"left",marginTop:o==="small"?"9px":"13px",marginRight:"5px"}})," ",i.toUpperCase()]}):null},popRender(i,l,o){return a("div",{style:{padding:"10px"},children:[e("div",{children:"车身颜色："}),e("div",{style:{marginTop:"5px"},children:d.map(r=>e("div",{onClick:()=>{l(r),o()},style:{width:"50px",height:"50px",backgroundColor:r,display:"inline-block",marginRight:"5px",cursor:"pointer",border:i===r?"3px solid black":""}},r))})]})}});return a("div",{children:[e("div",{children:"使用 createCustomPicker 创建自定义选择器"}),e("br",{}),e(t,{}),e("br",{})," ",e("br",{}),e(t,{label:"禁用状态",disabled:!0}),e("br",{})," ",e("br",{}),e(t,{label:"颜色选择",filterMode:!0,showClearButton:!0}),e("br",{})," ",e("br",{}),e(t,{label:"颜色选择(禁用)",filterMode:!0,disabled:!0})]})},s=()=>{const d=["911","718","cayenne","panamera"],t="https://static.porsche-preview.cn/static/car-model/";return a("div",{children:[e("div",{children:"直接使用 <CustomPicker />"}),e(m,{width:"300px",popRender:(i,l,o)=>e("div",{children:d.map(r=>a("div",{style:{padding:"10px",cursor:"pointer",lineHeight:"30px"},onClick:()=>{l(r),o()},children:[e("img",{height:"30px",src:`${t}${r}.jpg`,alt:""})," ",r.toUpperCase()]}))})})]})};s.storyName="<CustomPicker />";const n=()=>{const d=["911","718","cayenne","panamera"],t="https://static.porsche-preview.cn/static/car-model/",[i,l]=f.useState({model:"911"});return a("div",{children:[e("div",{children:"使用Form绑定"}),e(w,{data:i,onDataChange:l,children:e(m,{name:"model",width:"300px",popRender:(o,r,P)=>e("div",{children:d.map(c=>a("div",{style:{padding:"10px",cursor:"pointer",lineHeight:"30px"},onClick:()=>{r(c),P()},children:[e("img",{width:"65px",height:"30px",src:`${t}${c}.jpg`,alt:""})," ",c.toUpperCase()]}))})})}),JSON.stringify(i)]})};n.storyName="Bind with <Form/>";var u,h,g;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const colors = ['red', 'blue', 'green', 'yellow'];
  const ColorPicker = createCustomPicker({
    label: '颜色选择',
    placeHolder: '请选择',
    width: '300px',
    displayRender(value: string, onValueChange, size) {
      if (value) {
        return <div style={{
          display: 'inline-block'
        }}>
            <div style={{
            backgroundColor: value,
            width: size === 'small' ? '15px' : '20px',
            height: size === 'small' ? '15px' : '20px',
            float: 'left',
            marginTop: size === 'small' ? '9px' : '13px',
            marginRight: '5px'
          }} />{' '}
            {value.toUpperCase()}
          </div>;
      }
      return null;
    },
    popRender(value, onValueChange, hide) {
      return <div style={{
        padding: '10px'
      }}>
          <div>车身颜色：</div>
          <div style={{
          marginTop: '5px'
        }}>
            {colors.map(c => <div key={c} onClick={() => {
            onValueChange(c);
            hide();
          }} style={{
            width: '50px',
            height: '50px',
            backgroundColor: c,
            display: 'inline-block',
            marginRight: '5px',
            cursor: 'pointer',
            border: value === c ? '3px solid black' : ''
          }} />)}
          </div>
        </div>;
    }
  });
  return <div>
      <div>使用 createCustomPicker 创建自定义选择器</div>
      <br />
      <ColorPicker />
      <br /> <br />
      <ColorPicker label="禁用状态" disabled />
      <br /> <br />
      <ColorPicker label="颜色选择" filterMode showClearButton />
      <br /> <br />
      <ColorPicker label="颜色选择(禁用)" filterMode disabled />
    </div>;
}`,...(g=(h=p.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,x,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const model = ['911', '718', 'cayenne', 'panamera'];
  const imgPrefix = 'https://static.porsche-preview.cn/static/car-model/';
  return <div>
      <div>直接使用 &lt;CustomPicker /&gt;</div>
      <CustomPicker width="300px" popRender={(value: string, onValueChange, hide) => {
      return <div>
              {model.map(m => <div style={{
          padding: '10px',
          cursor: 'pointer',
          lineHeight: '30px'
        }} onClick={() => {
          onValueChange(m);
          hide();
        }}>
                  <img height="30px" src={\`\${imgPrefix}\${m}.jpg\`} alt="" />{' '}
                  {m.toUpperCase()}
                </div>)}
            </div>;
    }} />
    </div>;
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var k,b,y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const model = ['911', '718', 'cayenne', 'panamera'];
  const imgPrefix = 'https://static.porsche-preview.cn/static/car-model/';
  const [data, setData] = useState({
    model: '911'
  });
  return <div>
      <div>使用Form绑定</div>
      <Form data={data} onDataChange={setData}>
        <CustomPicker name="model" width="300px" popRender={(value: string, onValueChange, hide) => {
        return <div>
                {model.map(m => <div style={{
            padding: '10px',
            cursor: 'pointer',
            lineHeight: '30px'
          }} onClick={() => {
            onValueChange(m);
            hide();
          }}>
                    <img width="65px" height="30px" src={\`\${imgPrefix}\${m}.jpg\`} alt="" />{' '}
                    {m.toUpperCase()}
                  </div>)}
              </div>;
      }} />
      </Form>
      {JSON.stringify(data)}
    </div>;
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const N=["CustomPickerStoryBook","CustomPickerStoryBook2","CustomPickerStoryBook3"];export{p as CustomPickerStoryBook,s as CustomPickerStoryBook2,n as CustomPickerStoryBook3,N as __namedExportsOrder,M as default};
//# sourceMappingURL=custom-picker.stories-063b9bd2.js.map
