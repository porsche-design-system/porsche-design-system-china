import React from 'react'

import { DatePicker, Select } from '../..'
import './filter-list.stories.scss'

export default {
  title: 'Example/Filters'
}

export const FilterStoryBook = () => {
  return (
    <div>
      <Select
        filterMode
        filterInput
        options="上海保时捷中心,北京保时捷中心"
        placeholder="经销商"
        showClearButton
        marginRight="10px"
      />
      <Select
        filterMode
        options="911,718"
        placeholder="车型"
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
        placeholder="业务员"
        showClearButton
        marginRight="10px"
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
        placeholder="业务员"
        showClearButton
        marginRight="10px"
      />

      <DatePicker filterMode label="预约试驾日期" />
    </div>
  )
}
