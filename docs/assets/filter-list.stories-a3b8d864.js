import{j as i,a as e,F as n}from"./jsx-runtime-e43ccb36.js";/* empty css              */import{F as f,n as g,I as m,S as o,q as s,D as h,b as x,M}from"./custom-picker-1a2c1035.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const I={title:"Example/Filters"},a=()=>{const l=(r,d)=>{const t=p=>d?e("span",{style:{...d},children:p}):p;return i(n,{children:[e(g,{width:"200px",placeholder:"搜索",className:"pui-form-item",...r}),e(m,{width:"300px",placeholder:"请输入",...r}),e(o,{filterMode:!0,options:"911,718",label:t("车型"),...r}),e(o,{filterMode:!0,filterInput:!0,options:"上海保时捷中心,北京保时捷中心",label:t("经销商"),...r}),e(s,{options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,TigerTigerTigerTigerTigerTigerTiger",filterMode:!0,label:t("动物"),...r}),e(s,{options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,TigerTigerTigerTigerTigerTigerTiger",filterInput:!0,filterMode:!0,label:t("动物"),...r}),e(s,{options:"狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger",filterInput:!0,filterMode:!0,label:t("动物"),maxWidth:"300px",optionsStyle:{minWidth:"200px"},...r}),e(o,{filterMode:!0,filterInput:!0,options:[{value:1,text:i(n,{children:["李军",e("span",{className:"title-info",children:" (主管)"})]})},{value:2,text:i(n,{children:["熊丽",e("span",{className:"title-info",children:" (员工)"})]})}],label:t("业务员"),...r}),e(o,{filterMode:!0,filterInput:!0,options:[{group:"主管",options:[{value:1,text:"李军"},{value:2,text:"林宁"}]},{group:"员工",options:[{value:3,text:"熊力"},{value:6,text:"李江"}]}],label:t("业务员"),...r}),e(h,{filterMode:!0,label:t("预约试驾日期"),...r}),e(x,{filterMode:!0,label:t("活动时间"),placeholderStartDate:"不限",placeholderEndDate:"不限",...r}),e(M,{filterMode:!0,label:t("起止年月"),placeholderStartDate:"不限",placeholderEndDate:"不限",...r})]})};return i("div",{className:"filter-list-wrap",children:[l(),e("br",{})," ",e("br",{}),"自定义标签颜色 ",e("br",{})," ",e("br",{}),l({},{color:"#d5001c"}),e("br",{})," ",e("br",{}),"显示清除按钮 ",e("br",{})," ",e("br",{}),l({showClearButton:!0}),e("br",{})," ",e("br",{}),"保留清除按钮 ",e("br",{})," ",e("br",{}),l({showClearButton:!0,keepClearButton:!0}),e("br",{})," ",e("br",{}),"保留清除按钮-在 Form 中是使用filterMode itemStyle 统一设置过滤器样式",e("br",{})," ",e("br",{}),e("div",{children:e(f,{filterMode:!0,children:l({showClearButton:!0,keepClearButton:!0})})}),e("br",{})," ",e("br",{}),"禁用状态 ",e("br",{})," ",e("br",{}),l({disabled:!0})]})};var u,b,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const renderFilter = (props?: any, labelStyle?: any) => {
    const renderLabel = (text: string) => {
      return labelStyle ? <span style={{
        ...labelStyle
      }}>{text}</span> : text;
    };
    return <>
        <Search width="200px" placeholder="搜索" className="pui-form-item" {...props} />
        <Input width="300px" placeholder="请输入" {...props} />
        <Select filterMode options="911,718" label={renderLabel('车型')} {...props} />
        <Select filterMode filterInput options="上海保时捷中心,北京保时捷中心" label={renderLabel('经销商')} {...props} />
        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,TigerTigerTigerTigerTigerTigerTiger" filterMode label={renderLabel('动物')} {...props} />
        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,TigerTigerTigerTigerTigerTigerTiger" filterInput filterMode label={renderLabel('动物')} {...props} />

        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger" filterInput filterMode label={renderLabel('动物')} maxWidth="300px" optionsStyle={{
        minWidth: '200px'
      }} {...props} />

        <Select filterMode filterInput options={[{
        value: 1,
        text: <>
                  李军<span className="title-info"> (主管)</span>
                </>
      }, {
        value: 2,
        text: <>
                  熊丽<span className="title-info"> (员工)</span>
                </>
      }]} label={renderLabel('业务员')} {...props} />

        <Select filterMode filterInput options={[{
        group: '主管',
        options: [{
          value: 1,
          text: '李军'
        }, {
          value: 2,
          text: '林宁'
        }]
      }, {
        group: '员工',
        options: [{
          value: 3,
          text: '熊力'
        }, {
          value: 6,
          text: '李江'
        }]
      }]} label={renderLabel('业务员')} {...props} />

        <DatePicker filterMode label={renderLabel('预约试驾日期')} {...props} />
        <DateRangePicker filterMode label={renderLabel('活动时间')} placeholderStartDate="不限" placeholderEndDate="不限" {...props} />
        <MonthRangePicker filterMode label={renderLabel('起止年月')} placeholderStartDate="不限" placeholderEndDate="不限" {...props} />
      </>;
  };
  return <div className="filter-list-wrap">
      {renderFilter()}
      <br /> <br />
      自定义标签颜色 <br /> <br />
      {renderFilter({}, {
      color: '#d5001c'
    })}
      <br /> <br />
      显示清除按钮 <br /> <br />
      {renderFilter({
      showClearButton: true
    })}
      <br /> <br />
      保留清除按钮 <br /> <br />
      {renderFilter({
      showClearButton: true,
      keepClearButton: true
    })}
      <br /> <br />
      保留清除按钮-在 Form 中是使用filterMode itemStyle 统一设置过滤器样式
      <br /> <br />
      <div>
        <Form filterMode
      // itemStyle={{ marginRight: '12px', marginBottom: '12px' }}
      >
          {renderFilter({
          showClearButton: true,
          keepClearButton: true
        })}
        </Form>
      </div>
      <br /> <br />
      禁用状态 <br /> <br />
      {renderFilter({
      disabled: true
    })}
    </div>;
}`,...(c=(b=a.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const k=["FilterStoryBook"];export{a as FilterStoryBook,k as __namedExportsOrder,I as default};
//# sourceMappingURL=filter-list.stories-a3b8d864.js.map
