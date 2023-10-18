import{a as e,j as r,F as f}from"./jsx-runtime-e43ccb36.js";import{U as n,h as p,i as d,B as T,w as G,x as B,E as j,s as u}from"./custom-picker-1a2c1035.js";import{r as g}from"./index-1b03fe98.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const i="https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload",l="Bearer xxxxx",ie={title:"Data Entry/Upload",component:n},y=()=>(g.useEffect(()=>{const s=document.getElementById("anchor--data-entry-upload--upload-story-book");s&&(s.style.display="none");const t=document.getElementsByClassName("sbdocs-title");if(t.length>0){const o=t[0];o.style.marginBottom="48px"}}),e("div",{}));y.storyName="Upload";const U=()=>r(f,{children:[e(p,{children:e(d,{span:12,children:e(n,{action:i,headers:{Authorization:l},multiple:!0,...{onChange:(t,o)=>{console.log(t),console.log(o)},defaultFileList:[{uid:"-1",name:"image.png",status:"success"},{uid:"-2",name:"image.png",status:"error"}],beforeUpload:t=>t.type==="image/jpeg"||t.type==="image/png"?t.size/1024/1024<2?!0:(u.pop("error","文件大小不能超过2M"),!1):(u.pop("error","请上传jpg或png格式的文件"),!1)}})})}),e(p,{style:{marginTop:"20px"},children:r("small",{children:[" ",e("big",{children:"*"})," btnProps 可修饰默认按钮， 如有children，则覆盖默认按钮。"]})})]});U.storyName="Upload Files";const Q=[{uid:"-1",name:"image.png",status:"success"},{uid:"-2",name:"image.png",status:"success"}],b=()=>{const[s,t]=g.useState(Q),o={fileList:s,onChange:(x,h)=>{const c=h.slice(-2);c.forEach(m=>{m.status="success"}),t(c)}},a=()=>{t([])};return r(f,{children:[r(p,{children:[e(d,{span:12,children:e(n,{action:i,headers:{Authorization:l},...o})}),e(T,{onClick:a,type:"primary",children:"全部清除"})]}),e(p,{style:{marginTop:"20px"},children:r("small",{children:[" ",e("big",{children:"*"})," 使用 fileList 对列表进行完全控制，以下演示二种情况：1.上传列表数量的限制。2.改变文件上传状态"]})})]})};b.storyName="Upload 受控";const L=()=>e(f,{children:e(p,{children:e(d,{span:12,children:e(n,{action:i,headers:{Authorization:l},drag:!0,multiple:!0,beforeUpload:t=>{const o=t.type==="image/jpeg"||t.type==="image/png";o||u.pop("error","请上传jpg或png格式的文件");const a=t.size/1024/1024<2;return a||u.pop("error","文件大小不能超过2M"),o&&a}})})})});L.storyName="Upload Drag";const F=()=>{const[s,t]=g.useState(!0),[o,a]=g.useState([]);g.useEffect(()=>{o.length&&t(!1)},[o]);const x={listIgnore:!1,action:i,headers:{Authorization:l},fileList:o,defaultFileList:[{uid:"-1",name:"image.png",status:"success"},{uid:"-2",name:"image.png",status:"error"}],onRemove:c=>{a(m=>m.filter(q=>q.uid!==c.uid))},beforeUpload:c=>{const m={uid:Math.random().toString().replace(/0./,""),name:c.name,size:c.size,percent:0,originFileObj:c};return a([...o,m]),!1},onChange:(c,m)=>{console.log(c),console.log(m)}},h=()=>{console.log(o),u.pop("success","上传成功"),a([])};return r(f,{children:[e(p,{style:{marginBottom:"20px"},children:e(d,{span:12,children:e(n,{multiple:!0,...x})})}),e(p,{style:{marginBottom:"20px"},children:e(T,{disabled:s,onClick:h,children:"开始上传"})}),e(p,{style:{marginBottom:"20px"},children:r("small",{children:[" ",e("big",{children:"*"})," beforeUpload 返回 false 后，手动上传文件。可手动控制setFileList是否清空所选文件列表。"]})})]})};F.storyName="Upload Manually";const C=()=>{const s=[{uid:"-1",name:"image.png",status:"success",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],t=[{uid:"-1",name:"image.png",status:"error",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],o=[{uid:"-xxx",percent:50,name:"image.png",status:"uploading",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],[a,x]=g.useState("1");return r(f,{children:[r(G,{size:"small",hasLine:!0,onActiveKeyChange:h=>{x(h)},children:[e(B,{tabKey:"1",title:"Default"}),e(B,{tabKey:"2",title:"Success"}),e(B,{tabKey:"3",title:"Error"}),e(B,{tabKey:"4",title:"Uploading"})]}),a==="1"&&r("div",{className:"upload-component-list",children:[e(n,{action:i,headers:{Authorization:l},listType:"picture-card"}),e(n,{action:i,headers:{Authorization:l},listType:"picture-card"})]}),a==="2"&&e("div",{className:"upload-component-list",children:e(n,{action:i,headers:{Authorization:l},listType:"picture-card",defaultFileList:s,className:"list-uploaded"})}),a==="3"&&e("div",{className:"upload-component-list",children:e(n,{action:i,headers:{Authorization:l},listType:"picture-card",defaultFileList:t,className:"list-uploaded"})}),a==="4"&&e("div",{className:"upload-component-list",children:e(n,{action:i,headers:{Authorization:l},listType:"picture-card",defaultFileList:o,className:"list-uploaded"})})]})};C.storyName="Upload Pictures";const P=()=>{const s={onChange:(t,o)=>{console.log(t),console.log(o)},beforeUpload:t=>t.type==="image/jpeg"||t.type==="image/png"?t.size/1024/1024<2?!0:(u.pop("error","文件大小不能超过2M"),!1):(u.pop("error","请上传jpg或png格式的文件"),!1),tip:"最多上传1个文件",maxCount:1};return r(f,{children:[r(p,{children:[e(d,{span:10,children:e(n,{action:i,headers:{Authorization:l},multiple:!0,...s,children:e(T,{icon:j,children:"添加文件（maxCount: 1）"})})}),e(d,{span:10,children:e(n,{action:i,headers:{Authorization:l},multiple:!0,...s,maxCount:2,tip:"最多上传2个文件",onExceededMaxCount:(t,o)=>{u.warning(`上传文件个数${t}，超出最大值${o}`)},children:e(T,{icon:j,children:"添加文件（maxCount: 2）"})})})]}),e("br",{}),e(p,{children:e(d,{span:10,children:e(n,{action:i,headers:{Authorization:l},multiple:!0,...s,listType:"picture-card",maxCount:1})})}),e("br",{}),e(p,{children:e(d,{span:10,children:e(n,{action:i,headers:{Authorization:l},multiple:!0,...s,listType:"picture",maxCount:1,tip:"最多上传1个文件"})})})]})};P.storyName="Upload Count Limit";var w,S,z;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  useEffect(() => {
    const mainStory = document.getElementById('anchor--data-entry-upload--upload-story-book');
    if (mainStory) {
      mainStory.style.display = 'none';
    }
    const mainTitles = document.getElementsByClassName('sbdocs-title');
    if (mainTitles.length > 0) {
      const mainTitle = (mainTitles[0] as HTMLElement);
      mainTitle.style.marginBottom = '48px';
    }
  });
  return <div />;
}`,...(z=(S=y.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var M,k,v;U.parameters={...U.parameters,docs:{...(M=U.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const uploadProps = {
    // showUploadList: { showRemoveIcon: false },
    // showUploadList: false,
    onChange: (file: UploadFile, list: UploadFile[]) => {
      console.log(file);
      console.log(list);
    },
    defaultFileList: [{
      uid: '-1',
      name: 'image.png',
      status: 'success'
    }, {
      uid: '-2',
      name: 'image.png',
      status: 'error'
    }],
    beforeUpload: (file: File) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        Message.pop('error', '请上传jpg或png格式的文件');
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        Message.pop('error', '文件大小不能超过2M');
        return false;
      }
      return true;
    }
  };
  return <>
      <Row>
        <Col span={12}>
          <Upload
        // btnProps={{ type: 'primary', size: 'small' }}
        action={action} headers={{
          Authorization
        }} multiple
        // tip="要求文件格式jpg,png, 大小不超过2M"
        {...uploadProps} />
        </Col>
      </Row>
      <Row style={{
      marginTop: '20px'
    }}>
        <small>
          {' '}
          <big>*</big> btnProps 可修饰默认按钮， 如有children，则覆盖默认按钮。
        </small>
      </Row>
    </>;
}`,...(v=(k=U.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var R,E,N;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [fileList, setFileList] = useState<UploadFile[]>(initialFileList);
  const uploadProps = {
    fileList,
    onChange: (file: UploadFile, list: UploadFile[]) => {
      const newFileList = list.slice(-2);
      newFileList.forEach(file => {
        file.status = 'success';
      });
      setFileList(newFileList);
    }
  };
  const clearList = () => {
    setFileList([]);
  };
  return <>
      <Row>
        <Col span={12}>
          <Upload action={action} headers={{
          Authorization
        }} {...uploadProps} />
        </Col>
        <Button onClick={clearList} type="primary">
          全部清除
        </Button>
      </Row>
      <Row style={{
      marginTop: '20px'
    }}>
        <small>
          {' '}
          <big>*</big> 使用 fileList
          对列表进行完全控制，以下演示二种情况：1.上传列表数量的限制。2.改变文件上传状态
        </small>
      </Row>
    </>;
}`,...(N=(E=b.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var J,A,O;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const handleBeforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      Message.pop('error', '请上传jpg或png格式的文件');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      Message.pop('error', '文件大小不能超过2M');
    }
    return isJpgOrPng && isLt2M;
  };
  return <>
      <Row>
        <Col span={12}>
          <Upload action={action} headers={{
          Authorization
        }} drag multiple beforeUpload={handleBeforeUpload} />
        </Col>
      </Row>
    </>;
}`,...(O=(A=L.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var I,V,Z;F.parameters={...F.parameters,docs:{...(I=F.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  useEffect(() => {
    if (fileList.length) {
      setBtnDisabled(false);
    }
  }, [fileList]);
  const uploadProps = {
    listIgnore: false,
    action,
    headers: {
      Authorization
    },
    fileList,
    // 测试defaultFileList与fileList同时存在时，以fileList为准
    defaultFileList: [{
      uid: '-1',
      name: 'image.png',
      status: 'success'
    }, {
      uid: '-2',
      name: 'image.png',
      status: 'error'
    }],
    onRemove: (file: UploadFile) => {
      setFileList(prevFile => prevFile.filter(item => item.uid !== file.uid));
    },
    beforeUpload: (file: File) => {
      const baseFile: UploadFile = {
        uid: Math.random().toString().replace(/0./, ''),
        name: file.name,
        size: file.size,
        percent: 0,
        originFileObj: file
      };
      setFileList([...fileList, baseFile]);
      return false;
    },
    onChange: (file: UploadFile, list: UploadFile[]) => {
      console.log(file);
      console.log(list);
    }
  };
  const uploadHandle = () => {
    console.log(fileList);
    Message.pop('success', '上传成功');
    setFileList([]);
  };
  return <>
      <Row style={{
      marginBottom: '20px'
    }}>
        <Col span={12}>
          <Upload multiple {...uploadProps} />
        </Col>
      </Row>
      <Row style={{
      marginBottom: '20px'
    }}>
        <Button disabled={btnDisabled} onClick={uploadHandle}>
          开始上传
        </Button>
      </Row>
      <Row style={{
      marginBottom: '20px'
    }}>
        <small>
          {' '}
          <big>*</big> beforeUpload 返回 false
          后，手动上传文件。可手动控制setFileList是否清空所选文件列表。
        </small>
      </Row>
    </>;
}`,...(Z=(V=F.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var D,K,W;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const successFileList = [{
    uid: '-1',
    name: 'image.png',
    status: 'success',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }];
  const errorFileList = [{
    uid: '-1',
    name: 'image.png',
    status: 'error',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }];
  const uploadingFileList = [{
    uid: '-xxx',
    percent: 50,
    name: 'image.png',
    status: 'uploading',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }];
  const [buttonType, setButtonType] = useState('1');
  return <>
      <Tabs size="small" hasLine onActiveKeyChange={key => {
      setButtonType(key);
    }}>
        <TabPane tabKey="1" title="Default" />
        <TabPane tabKey="2" title="Success" />
        <TabPane tabKey="3" title="Error" />
        <TabPane tabKey="4" title="Uploading" />
      </Tabs>

      {buttonType === '1' && <div className="upload-component-list">
          <Upload action={action} headers={{
        Authorization
      }} listType="picture-card" />
          <Upload action={action} headers={{
        Authorization
      }} listType="picture-card" />
        </div>}
      {buttonType === '2' && <div className="upload-component-list">
          <Upload action={action} headers={{
        Authorization
      }} listType="picture-card" defaultFileList={successFileList} className="list-uploaded" />
        </div>}
      {buttonType === '3' && <div className="upload-component-list">
          <Upload action={action} headers={{
        Authorization
      }} listType="picture-card" defaultFileList={errorFileList} className="list-uploaded" />
        </div>}
      {buttonType === '4' && <div className="upload-component-list">
          <Upload action={action} headers={{
        Authorization
      }} listType="picture-card" defaultFileList={uploadingFileList} className="list-uploaded" />
        </div>}
    </>;
}`,...(W=(K=C.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var $,H,_;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const uploadProps = {
    onChange: (file: UploadFile, list: UploadFile[]) => {
      console.log(file);
      console.log(list);
    },
    beforeUpload: (file: File) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        Message.pop('error', '请上传jpg或png格式的文件');
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        Message.pop('error', '文件大小不能超过2M');
        return false;
      }
      return true;
    },
    tip: '最多上传1个文件',
    maxCount: 1
  };
  return <>
      <Row>
        <Col span={10}>
          <Upload action={action} headers={{
          Authorization
        }} multiple {...uploadProps}>
            <Button icon={IconUpload}>添加文件（maxCount: 1）</Button>
          </Upload>
        </Col>
        <Col span={10}>
          <Upload
        // btnProps={{ type: 'primary', size: 'small' }}
        action={action} headers={{
          Authorization
        }} multiple {...uploadProps} maxCount={2} tip="最多上传2个文件" onExceededMaxCount={(limit, now) => {
          Message.warning(\`上传文件个数\${limit}，超出最大值\${now}\`);
        }}>
            <Button icon={IconUpload}>添加文件（maxCount: 2）</Button>
          </Upload>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={10}>
          <Upload action={action} headers={{
          Authorization
        }} multiple {...uploadProps} listType="picture-card" maxCount={1} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={10}>
          <Upload action={action} headers={{
          Authorization
        }} multiple {...uploadProps} listType="picture" maxCount={1} tip="最多上传1个文件" />
        </Col>
      </Row>
    </>;
}`,...(_=(H=P.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const le=["UploadStoryBook","UploadStoryBook1","UploadControlStory","UploadStoryBook2","UploadStoryBook7","UploadStoryBook3","UploadStoryBook4"];export{b as UploadControlStory,y as UploadStoryBook,U as UploadStoryBook1,L as UploadStoryBook2,C as UploadStoryBook3,P as UploadStoryBook4,F as UploadStoryBook7,le as __namedExportsOrder,ie as default};
//# sourceMappingURL=upload.stories-c4c7b478.js.map
