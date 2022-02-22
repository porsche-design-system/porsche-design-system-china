import React from 'react'

import { DatePicker, Select, MultiSelect, DateRangePicker } from '../..'
import './filter-list.stories.scss'

export default {
  title: 'Example/Filters'
}

export const FilterStoryBook = () => {
  return (
    <div>
      <div>
        <Select
          filterMode
          filterInput
          options="上海保时捷中心,北京保时捷中心"
          label="经销商"
          showClearButton
          marginRight="10px"
        />
        <Select
          filterMode
          options="911,718"
          label="车型"
          showClearButton
          marginRight="10px"
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
          label="业务员"
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
          label="业务员"
          showClearButton
        />

        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
          filterMode
          showClearButton
          label="动物"
          maxWidth="300px"
          optionsStyle={{ minWidth: '200px' }}
        />

        <DatePicker filterMode label="预约试驾日期" />
        <DateRangePicker
          filterMode
          label="活动时间"
          placeholderStartDate="不限"
          placeholderEndDate="不限"
        />
      </div>
      <br /> <br />
      保留清除按钮 <br /> <br />
      <div>
        <Select
          filterMode
          filterInput
          options="上海保时捷中心,北京保时捷中心"
          label="经销商"
          showClearButton
          marginRight="10px"
          keepClearButton
        />
        <Select
          filterMode
          options="911,718"
          label="车型"
          showClearButton
          marginRight="10px"
          keepClearButton
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
          label="业务员"
          keepClearButton
          showClearButton
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
          label="业务员"
          showClearButton
          keepClearButton
        />

        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
          filterMode
          showClearButton
          label="动物"
          maxWidth="300px"
          keepClearButton
          optionsStyle={{ minWidth: '200px' }}
        />

        <DatePicker filterMode label="预约试驾日期" keepClearButton />
        <DateRangePicker
          filterMode
          label="活动时间"
          placeholderStartDate="不限"
          placeholderEndDate="不限"
          keepClearButton
        />
      </div>
    </div>
  )
}
