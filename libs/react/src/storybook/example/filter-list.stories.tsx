import React from 'react'

import {
  DatePicker,
  Select,
  MultiSelect,
  DateRangePicker,
  Form,
  Search
} from '../..'
import './filter-list.stories.scss'

export default {
  title: 'Example/Filters'
}

export const FilterStoryBook = () => {
  const renderFilter = (props?: any, labelStyle?: any) => {
    const renderLabel = (text: string) => {
      return labelStyle ? <span style={{ ...labelStyle }}>{text}</span> : text
    }

    return (
      <div>
        <Search
          showSearchButtonBg
          width="200px"
          placeholder="搜索"
          className="pui-form-item"
          {...props}
        />
        <Select
          filterMode
          options="911,718"
          label={renderLabel('车型')}
          {...props}
        />
        <Select
          filterMode
          filterInput
          options="上海保时捷中心,北京保时捷中心"
          label={renderLabel('经销商')}
          {...props}
        />
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,TigerTigerTigerTigerTigerTigerTiger"
          filterMode
          label={renderLabel('动物')}
          {...props}
        />
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,TigerTigerTigerTigerTigerTigerTiger"
          filterInput
          filterMode
          label={renderLabel('动物')}
          {...props}
        />

        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
          filterMode
          label={renderLabel('动物')}
          maxWidth="300px"
          optionsStyle={{ minWidth: '200px' }}
          {...props}
        />

        <Select
          filterMode
          filterInput
          options={[
            {
              value: 1,
              text: (
                <>
                  李军<span className="title-info"> (主管)</span>
                </>
              )
            },
            {
              value: 2,
              text: (
                <>
                  熊丽<span className="title-info"> (员工)</span>
                </>
              )
            }
          ]}
          label={renderLabel('业务员')}
          {...props}
        />

        <Select
          filterMode
          filterInput
          options={[
            {
              group: '主管',
              options: [
                {
                  value: 1,
                  text: '李军'
                },
                {
                  value: 2,
                  text: '林宁'
                }
              ]
            },
            {
              group: '员工',
              options: [
                {
                  value: 3,
                  text: '熊力'
                },
                {
                  value: 6,
                  text: '李江'
                }
              ]
            }
          ]}
          label={renderLabel('业务员')}
          {...props}
        />

        <DatePicker filterMode label={renderLabel('预约试驾日期')} {...props} />
        <DateRangePicker
          filterMode
          label={renderLabel('活动时间')}
          placeholderStartDate="不限"
          placeholderEndDate="不限"
          {...props}
        />
      </div>
    )
  }

  return (
    <div className="filter-list-wrap">
      {renderFilter()}
      <br /> <br />
      自定义标签颜色 <br /> <br />
      {renderFilter({}, { color: '#d5001c' })}
      <br /> <br />
      显示清除按钮 <br /> <br />
      {renderFilter({ showClearButton: true })}
      <br /> <br />
      保留清除按钮 <br /> <br />
      {renderFilter({ showClearButton: true, keepClearButton: true })}
      <br /> <br />
      保留清除按钮-在 Form 中是使用filterMode itemStyle 统一设置过滤器样式
      <br /> <br />
      <div>
        <Form
          filterMode
          // itemStyle={{ marginRight: '12px', marginBottom: '12px' }}
        >
          {renderFilter({ showClearButton: true, keepClearButton: true })}
        </Form>
      </div>
      <br /> <br />
      禁用状态 <br /> <br />
      {renderFilter({ disabled: true })}
    </div>
  )
}
