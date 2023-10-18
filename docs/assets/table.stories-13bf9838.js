import{j as n,a as e,F as Q}from"./jsx-runtime-e43ccb36.js";import{j as s,S as T,k as W,P as X,B as d,g as c,l as v}from"./custom-picker-86da82ae.js";import{r as C}from"./index-1b03fe98.js";/* empty css              */import"./index-6fd5a17b.js";import"./iframe-7c6d5f29.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const le={title:"Data Display/Table",component:s},p=()=>{const[o,r]=C.useState("never"),i={dealerName:"上海浦东保时捷中心",dealerCode:"1000000",phoneNumber:"021-22211111",address:"上海市东方路123号",avgPrice:"￥1000000",info:{workingTime:"10:00AM - 10:30PM"},saleModel:"911 718 Taycan Panamera Macan Cayenne"},a=[];for(let l=0;l<10;l++)a.push(i);return n("div",{children:[e(s,{data:a,columns:[{title:"经销商",key:"dealerName",fixed:"left"},{title:"号码",customCell:l=>e("u",{children:l.dealerCode})},{title:"联系号码",key:"phoneNumber"},{title:"地址",key:"address"},{title:"工作时间",key:"info.workingTime",sortable:!0},{title:"在售车型",key:"saleModel"},{title:"经销商等级",width:200,customCell(){return e("div",{children:e(T,{size:"tiny",options:"普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商",defaultValue:"普通经销商"})})}},{title:"平均售价",key:"avgPrice",sortable:!0,sortIconPlace:"left",rowCellStyle:{textAlign:"right"},headCellStyle:{textAlign:"right"}},{title:"操作",fixed:"right",width:140,customCell:l=>n(Q,{children:[e(d,{type:"link",marginRight:"12px",children:"修改"}),e(d,{type:"link",marginRight:"12px",onClick:()=>{c.confirm("警告","确认要删除吗?",()=>{c.alert("提示信息",n("div",{children:[e("b",{children:l.dealerName})," 已删除！"]}))})},children:"删除"}),e(d,{icon:v,type:"link"})]})}],selectable:!0,rowKey:"id",height:"300px",scrollBarAutoHide:o,onSelect:(l,u)=>{console.log("选定数据",l),console.log("是否全选（选传）",u)},onSort:l=>console.log(l)}),e("br",{}),e(T,{label:"隐藏滚动条方式",onValueChange:r,value:o,options:"never,move,leave,scroll",width:"200px",marginLeft:"10px"}),e("br",{}),e("br",{}),"Table 现在已支持多层结构数据 使用方法：key: 'info.workingTime'"]})};p.storyName="Table";const y=()=>{const o={dealerName:"上海浦东保时捷中心",dealerCode:"1000000",phoneNumber:"021-22211111",address:"上海市东方路123号",avgPrice:"￥1000000",workingTime:"10:00AM - 10:30PM",saleModel:"911 718 Taycan Panamera Macan Cayenne"},r=[];for(let a=0;a<5;a++)r.push(o);return e("div",{children:e(s,{data:r,columns:[{title:"经销商",key:"dealerName"},{title:"联系号码",key:"phoneNumber"},{title:"地址",key:"address"},{title:"工作时间",key:"workingTime",sortable:!0},{title:"操作",fixed:"right",width:140,customCell:a=>n(Q,{children:[e(d,{type:"link",marginRight:"12px",children:"修改"}),e(d,{type:"link",marginRight:"12px",onClick:()=>{c.confirm("警告","确认要删除吗?",()=>{c.alert("提示信息",n("div",{children:[e("b",{children:a.dealerName})," 已删除！"]}))})},children:"删除"}),e(d,{icon:v,type:"link"})]})}],onSort:a=>console.log(a),rowExpandable:!0,expandData:r,expandCell:a=>n("div",{style:{padding:"10px 0",paddingLeft:"35px"},children:[n("div",{style:{display:"inline-block",marginRight:"24px"},children:["经销商号码: ",a.dealerCode,e("br",{}),e("div",{style:{color:"#999",fontSize:"12px"},children:"其他信息其他信息其他信息其他信息其他信息"})]}),n("div",{style:{display:"inline-block"},children:["经销商号码: ",a.dealerCode,e("br",{}),e("div",{style:{color:"#999",fontSize:"12px"},children:"其他信息其他信息其他信息其他信息其他信息"})]})]})})})};y.storyName="Row Expandable Table";const b=()=>{const o={dealerName:"上海浦东保时捷中心",dealerCode:"1000000",phoneNumber:"021-22211111",address:"上海市东方路123号",avgPrice:"￥1000000",workingTime:"10:00AM - 10:30PM",saleModel:"911 718 Taycan Panamera Macan Cayenne"},r=[];for(let t=0;t<5;t++)r.push(o);const i=t=>l=>n("div",{style:{padding:"10px 0"},children:[e("div",{children:l[t]}),e("div",{style:{color:"#999",fontSize:"12px"},children:"第二行文字"})]}),a=[{title:"经销商",customCell:i("dealerName")},{title:"联系号码",customCell:i("phoneNumber")},{title:"地址",customCell:i("address")},{title:"工作时间",sortable:!0,customCell:i("workingTime")},{title:"操作",fixed:"right",width:140,customCell:t=>n("div",{style:{padding:"2px 0"},children:[e(d,{type:"link",marginRight:"12px",children:"修改"}),e(d,{type:"link",marginRight:"12px",onClick:()=>{c.confirm("警告","确认要删除吗?",()=>{c.alert("提示信息",n("div",{children:[e("b",{children:t.dealerName})," 已删除！"]}))})},children:"删除"}),e(d,{icon:v,type:"link"})]})}];return e("div",{children:e(s,{data:r,columns:a,rowExpandable:!0,onSelect:t=>{console.log(t)},expandArrowStyle:{marginTop:"11px"},cellVerticalAlign:"top",onSort:t=>console.log(t),expandData:r,expandCell:t=>n("div",{style:{padding:"10px 0",paddingLeft:"35px"},children:[n("div",{style:{display:"inline-block",marginRight:"24px"},children:["经销商号码: ",t.dealerCode,e("br",{}),e("div",{style:{color:"#999",fontSize:"12px"},children:"其他信息其他信息其他信息其他信息其他信息"})]}),n("div",{style:{display:"inline-block"},children:["经销商号码: ",t.dealerCode,e("br",{}),e("div",{style:{color:"#999",fontSize:"12px"},children:"其他信息其他信息其他信息其他信息其他信息"})]})]})})})};b.storyName="Multi Row Line Table";const w=()=>{const o={id:0,dealerName:"上海浦东保时捷中心",dealerCode:1e6,phoneNumber:"021-22211111",address:"上海市东方路123号",avgPrice:"￥1000000",workingTime:"10:00AM - 10:30PM",saleModel:"911 718 Taycan Panamera Macan Cayenne"},r=[];for(let a=0;a<5;a++)o.id=a+1,o.dealerCode=Math.floor(Math.random()*1e4),r.push({...o});return e("div",{children:e(s,{data:r,columns:[{title:"Id",key:"id",sortable:!0,ignoreUnsortedState:!0},{title:"经销商",key:"dealerName"},{title:"经销商号码",key:"dealerCode",sortable:!0},{title:"地址",key:"address"},{title:"工作时间",key:"workingTime"}],defaultSorter:{key:"id",sortType:W.DESC},onSort:a=>console.log(a)})})};w.storyName="Multi Column Sort";const g=()=>{const o={id:0,dealerName:"上海浦东保时捷中心",dealerCode:1e6,phoneNumber:"021-22211111",address:"上海市东方路123号",avgPrice:"￥1000000",workingTime:"10:00AM - 10:30PM",saleModel:"911 718 Taycan Panamera Macan Cayenne"},r=[];for(let a=0;a<5;a++)o.id=a+1,o.dealerCode=Math.floor(Math.random()*1e4),r.push({...o});return n("div",{children:[e("div",{children:"通过 rowClassName 或 rowStyle 改变行样式 onRowClick 行点击事件"}),e("br",{}),e(s,{data:r,columns:[{title:"Id",key:"id",sortable:!0,ignoreUnsortedState:!0},{title:"经销商",key:"dealerName"},{title:"经销商号码",key:"dealerCode",sortable:!0},{title:"地址",key:"address"},{title:"工作时间",key:"workingTime"}],rowClassName:(a,t)=>"table-row"+t,onRowClick:(a,t,l)=>{console.log(a,t,l==null?void 0:l.target)},rowStyle:(a,t)=>t===1?{color:"red"}:{}})]})};g.storyName="Row Style";const k=()=>{const o={id:0,dealerName:"上海浦东保时捷中心",dealerCode:1e6,phoneNumber:"021-22211111",address:"上海市东方路123号",avgPrice:"￥1000000",workingTime:"10:00AM - 10:30PM",saleModel:"911 718 Taycan Panamera Macan Cayenne"},r=[];for(let a=0;a<5;a++)o.id=a+1,o.dealerCode=Math.floor(Math.random()*1e4),r.push({...o});return n("div",{children:[e("br",{}),e(s,{data:r,columns:[{title:"序号",customCell(a,t){return t+1}},{title:"经销商",key:"dealerName",cellMerge:(a,t)=>t===0?{rowSpan:2}:t===1?{rowSpan:0}:{}},{title:"经销商号码",key:"dealerCode",sortable:!0},{title:"地址与工作时间",colSpan:2,key:"address"},{colSpan:0,key:"workingTime"}],onRowClick:a=>{console.log(a)}})]})};k.storyName="Row Number and Cell Attributes";const h=()=>{const o={id:0,dealerName:"上海浦东保时捷中心",dealerCode:1e6,phoneNumber:"021-22211111",address:"上海市东方路123号",avgPrice:"￥1000000",workingTime:"10:00AM - 10:30PM",saleModel:"911 718 Taycan Panamera Macan Cayenne"},r=[];for(let a=0;a<5;a++)o.id=a+1,o.dealerCode=Math.floor(Math.random()*1e4),r.push({...o});return n("div",{children:[e("br",{}),e(s,{rowExpandable:!0,data:r,columns:[{title:"序号",customCell(a,t){return t+1}},{title:"经销商",key:"dealerName"},{title:"操作",customCell:(a,t,{isExpand:l,setExpand:u})=>e(d,{type:"link",onClick:()=>{u(!l)},children:l?"收起":"展开"})}],onRowClick:a=>{console.log(a)}})]})};h.storyName="Expand Action";const D=()=>{const[o,r]=C.useState(1),[i,a]=C.useState([1,3]),t={id:0,dealerName:"上海浦东保时捷中心"},l=[];for(let m=0;m<30;m++)t.id=m+1,l.push({...t});const u=[{title:"ID",width:50,key:"id"},{title:"经销商",key:"dealerName"}];return n("div",{children:[e("div",{children:"分页，并且保留勾选状态，默认勾选状态"}),e("br",{}),e(s,{selectable:!0,rowKey:"id",selectedRowKeyValues:i,onSelectedRowKeyValuesChange:a,data:l.splice((o-1)*5,5),columns:u,onRowClick:m=>{console.log(m)}}),e(X,{current:o,onCurrentChange:r,total:l.length,pageSize:5}),e("br",{}),"控制选定：",e(d,{size:"tiny",onClick:()=>{a([1,11])},children:"选定1,11"})]})};D.storyName="Paging";var S,x,M;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [scrollBarAutoHide, setScrollBarAutoHide] = useState<'move' | 'never' | 'leave' | 'scroll'>('never');
  const rowData = {
    dealerName: '上海浦东保时捷中心',
    dealerCode: '1000000',
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    info: {
      workingTime: '10:00AM - 10:30PM'
    },
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  };
  type DataType = typeof rowData;
  const tableData: DataType[] = [];
  for (let i = 0; i < 10; i++) {
    tableData.push(rowData);
  }
  const columns: TableColumn<DataType>[] = [{
    title: '经销商',
    key: 'dealerName',
    fixed: 'left'
  }, {
    title: '号码',
    customCell: rowData => <u>{rowData.dealerCode}</u>
  }, {
    title: '联系号码',
    key: 'phoneNumber'
  }, {
    title: '地址',
    key: 'address'
  }, {
    title: '工作时间',
    key: 'info.workingTime',
    sortable: true
  }, {
    title: '在售车型',
    key: 'saleModel'
  }, {
    title: '经销商等级',
    width: 200,
    customCell() {
      return <div>
            <Select size="tiny" options="普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商" defaultValue="普通经销商" />
          </div>;
    }
  }, {
    title: '平均售价',
    key: 'avgPrice',
    sortable: true,
    sortIconPlace: 'left',
    rowCellStyle: {
      textAlign: 'right'
    },
    headCellStyle: {
      textAlign: 'right'
    }
  }, {
    title: '操作',
    fixed: 'right',
    width: 140,
    customCell: rowData => <>
          <Button type="link" marginRight="12px">
            修改
          </Button>
          <Button type="link" marginRight="12px" onClick={() => {
        Modal.confirm('警告', '确认要删除吗?', () => {
          Modal.alert('提示信息', <div>
                    <b>{rowData.dealerName}</b> 已删除！
                  </div>);
        });
      }}>
            删除
          </Button>
          <Button icon={IconMenuDotsHorizontal} type="link" />
        </>
  }];
  return <div>
      <Table data={tableData} columns={columns} selectable rowKey="id" height="300px" scrollBarAutoHide={scrollBarAutoHide} onSelect={(data, allChecked) => {
      console.log('选定数据', data);
      console.log('是否全选（选传）', allChecked);
    }} onSort={sorter => console.log(sorter)} />
      <br />
      <Select label="隐藏滚动条方式" onValueChange={setScrollBarAutoHide} value={scrollBarAutoHide} options={('never,move,leave,scroll' as any)} width="200px" marginLeft="10px" />
      <br />
      <br />
      Table 现在已支持多层结构数据 使用方法：key: &apos;info.workingTime&apos;
    </div>;
}`,...(M=(x=p.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var f,N,P;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const rowData = {
    dealerName: '上海浦东保时捷中心',
    dealerCode: '1000000',
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  };
  type DataType = typeof rowData;
  const tableData: any[] = [];
  for (let i = 0; i < 5; i++) {
    tableData.push(rowData);
  }
  const columns: TableColumn<DataType>[] = [{
    title: '经销商',
    key: 'dealerName'
  }, {
    title: '联系号码',
    key: 'phoneNumber'
  }, {
    title: '地址',
    key: 'address'
  }, {
    title: '工作时间',
    key: 'workingTime',
    sortable: true
  }, {
    title: '操作',
    fixed: 'right',
    width: 140,
    customCell: rowData => <>
          <Button type="link" marginRight="12px">
            修改
          </Button>
          <Button type="link" marginRight="12px" onClick={() => {
        Modal.confirm('警告', '确认要删除吗?', () => {
          Modal.alert('提示信息', <div>
                    <b>{rowData.dealerName}</b> 已删除！
                  </div>);
        });
      }}>
            删除
          </Button>
          <Button icon={IconMenuDotsHorizontal} type="link" />
        </>
  }];
  return <div>
      <Table data={tableData} columns={columns} onSort={sorter => console.log(sorter)} rowExpandable expandData={tableData} expandCell={rowData => {
      return <div style={{
        padding: '10px 0',
        paddingLeft: '35px'
      }}>
              <div style={{
          display: 'inline-block',
          marginRight: '24px'
        }}>
                经销商号码: {rowData.dealerCode}
                <br />
                <div style={{
            color: '#999',
            fontSize: '12px'
          }}>
                  其他信息其他信息其他信息其他信息其他信息
                </div>
              </div>
              <div style={{
          display: 'inline-block'
        }}>
                经销商号码: {rowData.dealerCode}
                <br />
                <div style={{
            color: '#999',
            fontSize: '12px'
          }}>
                  其他信息其他信息其他信息其他信息其他信息
                </div>
              </div>
            </div>;
    }} />
    </div>;
}`,...(P=(N=y.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var B,R,A;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const rowData = {
    dealerName: '上海浦东保时捷中心',
    dealerCode: '1000000',
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  };
  type DataType = typeof rowData;
  const tableData: DataType[] = [];
  for (let i = 0; i < 5; i++) {
    tableData.push(rowData);
  }
  const renderCell = (key: string) => (rowData: any) => <div style={{
    padding: '10px 0'
  }}>
        <div>{rowData[key]}</div>
        <div style={{
      color: '#999',
      fontSize: '12px'
    }}>第二行文字</div>
      </div>;
  const columns: TableColumn<DataType>[] = [{
    title: '经销商',
    customCell: renderCell('dealerName')
  }, {
    title: '联系号码',
    customCell: renderCell('phoneNumber')
  }, {
    title: '地址',
    customCell: renderCell('address')
  }, {
    title: '工作时间',
    sortable: true,
    customCell: renderCell('workingTime')
  }, {
    title: '操作',
    fixed: 'right',
    width: 140,
    customCell: rowData => <div style={{
      padding: '2px 0'
    }}>
          <Button type="link" marginRight="12px">
            修改
          </Button>
          <Button type="link" marginRight="12px" onClick={() => {
        Modal.confirm('警告', '确认要删除吗?', () => {
          Modal.alert('提示信息', <div>
                    <b>{rowData.dealerName}</b> 已删除！
                  </div>);
        });
      }}>
            删除
          </Button>
          <Button icon={IconMenuDotsHorizontal} type="link" />
        </div>
  }];
  return <div>
      <Table data={tableData} columns={columns} rowExpandable onSelect={data => {
      console.log(data);
    }} expandArrowStyle={{
      marginTop: '11px'
    }} cellVerticalAlign="top" onSort={sorter => console.log(sorter)} expandData={tableData} expandCell={rowData => {
      return <div style={{
        padding: '10px 0',
        paddingLeft: '35px'
      }}>
              <div style={{
          display: 'inline-block',
          marginRight: '24px'
        }}>
                经销商号码: {rowData.dealerCode}
                <br />
                <div style={{
            color: '#999',
            fontSize: '12px'
          }}>
                  其他信息其他信息其他信息其他信息其他信息
                </div>
              </div>
              <div style={{
          display: 'inline-block'
        }}>
                经销商号码: {rowData.dealerCode}
                <br />
                <div style={{
            color: '#999',
            fontSize: '12px'
          }}>
                  其他信息其他信息其他信息其他信息其他信息
                </div>
              </div>
            </div>;
    }} />
    </div>;
}`,...(A=(R=b.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var z,E,V;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心',
    dealerCode: 1000000,
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  };
  type DataType = typeof rowData;
  const tableData: DataType[] = [];
  for (let i = 0; i < 5; i++) {
    rowData.id = i + 1;
    rowData.dealerCode = Math.floor(Math.random() * 10000);
    tableData.push({
      ...rowData
    });
  }
  const columns: TableColumn<DataType>[] = [{
    title: 'Id',
    key: 'id',
    sortable: true,
    ignoreUnsortedState: true
  }, {
    title: '经销商',
    key: 'dealerName'
  }, {
    title: '经销商号码',
    key: 'dealerCode',
    sortable: true
  }, {
    title: '地址',
    key: 'address'
  }, {
    title: '工作时间',
    key: 'workingTime'
  }];
  return <div>
      <Table data={tableData} columns={columns} defaultSorter={{
      key: 'id',
      sortType: SortType.DESC
    }} onSort={sorter => console.log(sorter)} />
    </div>;
}`,...(V=(E=w.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var I,K,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心',
    dealerCode: 1000000,
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  };
  type DataType = typeof rowData;
  const tableData: DataType[] = [];
  for (let i = 0; i < 5; i++) {
    rowData.id = i + 1;
    rowData.dealerCode = Math.floor(Math.random() * 10000);
    tableData.push({
      ...rowData
    });
  }
  const columns: TableColumn<DataType>[] = [{
    title: 'Id',
    key: 'id',
    sortable: true,
    ignoreUnsortedState: true
  }, {
    title: '经销商',
    key: 'dealerName'
  }, {
    title: '经销商号码',
    key: 'dealerCode',
    sortable: true
  }, {
    title: '地址',
    key: 'address'
  }, {
    title: '工作时间',
    key: 'workingTime'
  }];
  return <div>
      <div>通过 rowClassName 或 rowStyle 改变行样式 onRowClick 行点击事件</div>
      <br />
      <Table data={tableData} columns={columns} rowClassName={(rowData, row) => 'table-row' + row} onRowClick={(rowData, index, event) => {
      console.log(rowData, index, event?.target);
    }} rowStyle={(rowData, row) => {
      if (row === 1) {
        return {
          color: 'red'
        };
      }
      return {};
    }} />
    </div>;
}`,...(H=(K=g.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var L,_,j;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心',
    dealerCode: 1000000,
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  };
  type DataType = typeof rowData;
  const tableData: DataType[] = [];
  for (let i = 0; i < 5; i++) {
    rowData.id = i + 1;
    rowData.dealerCode = Math.floor(Math.random() * 10000);
    tableData.push({
      ...rowData
    });
  }
  const columns: TableColumn<DataType>[] = [{
    title: '序号',
    customCell(_, inx) {
      return inx + 1;
    }
  }, {
    title: '经销商',
    key: 'dealerName',
    cellMerge: (rowData, inx) => {
      if (inx === 0) {
        return {
          rowSpan: 2
        };
      } else if (inx === 1) {
        return {
          rowSpan: 0
        };
      }
      return {};
    }
  }, {
    title: '经销商号码',
    key: 'dealerCode',
    sortable: true
  }, {
    title: '地址与工作时间',
    colSpan: 2,
    key: 'address'
  }, {
    colSpan: 0,
    key: 'workingTime'
  }];
  return <div>
      <br />
      <Table data={tableData} columns={columns} onRowClick={rowData => {
      console.log(rowData);
    }} />
    </div>;
}`,...(j=(_=k.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var U,F,O;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心',
    dealerCode: 1000000,
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  };
  type DataType = typeof rowData;
  const tableData: DataType[] = [];
  for (let i = 0; i < 5; i++) {
    rowData.id = i + 1;
    rowData.dealerCode = Math.floor(Math.random() * 10000);
    tableData.push({
      ...rowData
    });
  }
  const columns: TableColumn<DataType>[] = [{
    title: '序号',
    customCell(_, inx) {
      return inx + 1;
    }
  }, {
    title: '经销商',
    key: 'dealerName'
  }, {
    title: '操作',
    customCell: (rowData, rowIndex, {
      isExpand,
      setExpand
    }) => {
      return <Button type="link" onClick={() => {
        setExpand(!isExpand);
      }}>
            {isExpand ? '收起' : '展开'}
          </Button>;
    }
  }];
  return <div>
      <br />
      <Table rowExpandable data={tableData} columns={columns} onRowClick={rowData => {
      console.log(rowData);
    }} />
    </div>;
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var q,G,J;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [current, setCurrent] = useState(1);
  const [selectedRowKeyValues, setSelectedRowKeyValues] = useState([1, 3]);
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心'
  };
  type DataType = typeof rowData;
  const tableData: DataType[] = [];
  for (let i = 0; i < 30; i++) {
    rowData.id = i + 1;
    tableData.push({
      ...rowData
    });
  }
  const columns: TableColumn<DataType>[] = [{
    title: 'ID',
    width: 50,
    key: 'id'
  }, {
    title: '经销商',
    key: 'dealerName'
  }];
  return <div>
      <div>分页，并且保留勾选状态，默认勾选状态</div>
      <br />
      <Table selectable rowKey="id" selectedRowKeyValues={selectedRowKeyValues} onSelectedRowKeyValuesChange={setSelectedRowKeyValues} data={tableData.splice((current - 1) * 5, 5)} columns={columns} onRowClick={rowData => {
      console.log(rowData);
    }} />
      <Pagination current={current} onCurrentChange={setCurrent} total={tableData.length} pageSize={5} />
      <br />
      控制选定：
      <Button size="tiny" onClick={() => {
      setSelectedRowKeyValues([1, 11]);
    }}>
        选定1,11
      </Button>
    </div>;
}`,...(J=(G=D.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ne=["TableStoryBook","TableStoryBook2","TableStoryBook3","TableStoryBook4","TableStoryBook5","TableStoryBook6","TableStoryBook7","TableStoryBook8"];export{p as TableStoryBook,y as TableStoryBook2,b as TableStoryBook3,w as TableStoryBook4,g as TableStoryBook5,k as TableStoryBook6,h as TableStoryBook7,D as TableStoryBook8,ne as __namedExportsOrder,le as default};
//# sourceMappingURL=table.stories-13bf9838.js.map
