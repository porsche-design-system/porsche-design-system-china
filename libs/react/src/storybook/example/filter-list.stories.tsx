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
  return (
    <div className="filter-list-wrap">
      <div>
        <Search
          showSearchButtonBg
          width="200px"
          placeholder="搜索"
          className="pui-form-item"
        />
        <Select
          filterMode
          filterInput
          options="上海保时捷中心,北京保时捷中心"
          label={<span style={{ color: '#d5001c' }}>经销商</span>}
        />
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,TigerTigerTigerTigerTigerTigerTiger"
          filterInput
          filterMode
          label="动物"
        />
        <Select filterMode options="911,718" label="车型" />
        <Select
          filterMode
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
        />

        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
          filterMode
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
      显示清除按钮 <br /> <br />
      <div>
        <Search
          showSearchButtonBg
          showClearButton
          width="200px"
          placeholder="搜索"
          className="pui-form-item"
        />
        <Select
          filterMode
          filterInput
          options="上海保时捷中心,北京保时捷中心"
          label="经销商"
          showClearButton
        />
        <Select filterMode options="911,718" label="车型" showClearButton />
        <Select
          filterMode
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
        />

        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
          filterMode
          label="动物"
          maxWidth="300px"
          optionsStyle={{ minWidth: '200px' }}
          showClearButton
        />

        <DatePicker filterMode label="预约试驾日期" showClearButton />
        <DateRangePicker
          filterMode
          label="活动时间"
          placeholderStartDate="不限"
          placeholderEndDate="不限"
          showClearButton
        />
      </div>
      <br /> <br />
      保留清除按钮 <br /> <br />
      <div>
        <Search
          showSearchButtonBg
          showClearButton
          width="200px"
          placeholder="搜索"
          className="pui-form-item"
        />
        <Select
          filterMode
          filterInput
          options="上海保时捷中心,北京保时捷中心"
          label="经销商"
          showClearButton
          keepClearButton
        />
        <Select
          filterMode
          options="911,718"
          label="车型"
          showClearButton
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

        <DatePicker
          filterMode
          label="预约试驾日期"
          keepClearButton
          showClearButton
        />
        <DateRangePicker
          filterMode
          label="活动时间"
          placeholderStartDate="不限"
          placeholderEndDate="不限"
          showClearButton
          keepClearButton
        />
      </div>
      <br /> <br />
      保留清除按钮-在 Form 中是使用filterMode itemStyle 统一设置过滤器样式
      <br /> <br />
      <div>
        <Form
          filterMode
          itemStyle={{ marginRight: '12px', marginBottom: '12px' }}
        >
          <Search
            showSearchButtonBg
            showClearButton
            width="200px"
            placeholder="搜索"
            className="pui-form-item"
          />
          <Select
            filterInput
            options="上海保时捷中心,北京保时捷中心"
            label="经销商"
            showClearButton
            keepClearButton
          />
          <Select
            options="911,718"
            label="车型"
            showClearButton
            keepClearButton
          />
          <Select
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
            showClearButton
            label="动物"
            maxWidth="300px"
            keepClearButton
            optionsStyle={{ minWidth: '200px' }}
          />

          <DatePicker label="预约试驾日期" keepClearButton showClearButton />
          <DateRangePicker
            label="活动时间"
            placeholderStartDate="不限"
            placeholderEndDate="不限"
            showClearButton
            keepClearButton
            onValueChange={vals => {
              console.log(vals)
            }}
          />
        </Form>
      </div>
      <br /> <br />
      禁用状态 <br /> <br />
      <div>
        <Search
          showSearchButtonBg
          showClearButton
          width="200px"
          placeholder="搜索"
          className="pui-form-item"
          disabled
        />
        <Select
          filterMode
          filterInput
          options="上海保时捷中心,北京保时捷中心"
          value="北京保时捷中心"
          label="经销商"
          showClearButton
          keepClearButton
          disabled
        />
        <Select
          filterMode
          options="911,718"
          value="911"
          label="车型"
          showClearButton
          keepClearButton
          disabled
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
          value={2}
          label="业务员"
          keepClearButton
          showClearButton
          disabled
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
          value={6}
          label="业务员"
          showClearButton
          keepClearButton
          disabled
        />

        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          value={['狗', '老虎']}
          filterInput
          filterMode
          showClearButton
          label="动物"
          maxWidth="300px"
          keepClearButton
          optionsStyle={{ minWidth: '200px' }}
          disabled
        />

        <DatePicker
          filterMode
          label="预约试驾日期"
          value="2022-02-16"
          showClearButton
          keepClearButton
          disabled
        />
        <DateRangePicker
          filterMode
          label="活动时间"
          value={['2022-02-16']}
          placeholderStartDate="不限"
          placeholderEndDate="不限"
          showClearButton
          keepClearButton
          disabled
        />
      </div>
    </div>
  )
}
