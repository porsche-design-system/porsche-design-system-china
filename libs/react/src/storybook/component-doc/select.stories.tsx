import React, { useState } from 'react'
import { Button, Form, Select } from '../..'

import './select.stories.scss'

export default {
  title: 'Data Entry/Select',
  component: Select
}

export const SelectStoryBook = () => {
  return (
    <div style={{ width: '300px' }}>
      <Select
        options="狗:dog,猫,狮子,老虎,鲸鱼"
        label="动物"
        placeholder="请选择"
      />
      <div>禁用状态</div>
      <Select options="狗,猫,狮子,老虎,鲸鱼" disabled />
    </div>
  )
}

SelectStoryBook.storyName = 'Select'

export const SelectStoryBook1 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Select
        options={[10, 12, 33]}
        label="数字"
        placeholder="请选择"
        display={['value', 'text', 'aaa']}
        onValueChange={val => {
          console.log(typeof val)
        }}
      />
    </div>
  )
}

SelectStoryBook1.storyName = 'Number Options'

export const SelectStoryBook11 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Select
        options="狗:dog,猫,狮子,老虎,鲸鱼"
        label="动物"
        placeholder="请选择"
      />
    </div>
  )
}

SelectStoryBook11.storyName = 'String Options'

export const SelectStoryBook12 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Select
        label="分组选项"
        options={[
          {
            group: '动物',
            options: [
              { text: '狗', value: '狗' },
              { text: '猫', value: '猫' }
            ]
          },
          {
            group: '交通工具',
            options: [
              { text: '汽车', value: '汽车' },
              { text: '飞机', value: '飞机' }
            ]
          }
        ]}
        placeholder="请选择"
      />
    </div>
  )
}

SelectStoryBook12.storyName = 'Group Options'

export const SelectStoryBook13 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Select
        label="分组选项"
        options={[
          {
            text: (
              <>
                猫 <span className="leg">4条腿</span>
              </>
            ),
            value: '狗'
          },
          {
            text: (
              <>
                企鹅 <span className="leg">2条腿</span>
              </>
            ),
            value: '猫'
          }
        ]}
        placeholder="请选择"
      />
    </div>
  )
}

SelectStoryBook13.storyName = 'Custom Options Style'

export const SelectStoryBook2 = () => {
  return (
    <div style={{ width: '300px' }}>
      <div>出错状态</div>
      <Form>
        <Select
          options="狗,猫,狮子,老虎,鲸鱼"
          error={{ show: true, message: '未选择' }}
        />
        <Select
          label="动物"
          options="狗,猫,狮子,老虎,鲸鱼"
          rules={[{ required: true }]}
        />
      </Form>
    </div>
  )
}

SelectStoryBook2.storyName = 'Error'

export const SelectStoryBook3 = () => {
  return (
    <div style={{ width: '300px' }}>
      <div>显示过滤输入框</div>
      <Select
        options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger,动物"
        filterInput
        filterInputPlaceholder="查找动物"
      />
    </div>
  )
}

SelectStoryBook3.storyName = 'Show filter Input'

export const SelectStoryBook4 = () => {
  return (
    <div style={{ width: '300px' }}>
      <div>显示清除按钮</div>
      <div className="select-story">
        <Select
          defaultValue="dog"
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
          placeholder="请选择"
          showClearButton
        />
      </div>
    </div>
  )
}

SelectStoryBook4.storyName = 'Clear Button'

export const SelectStoryBook5 = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={{ width: '300px' }}>
      <div>控制菜单显示</div>
      <div className="select-story">
        <Button
          onClick={() => {
            setIsOpen(true)
          }}
          marginRight="10px"
        >
          打开菜单
        </Button>
        <Button
          onClick={() => {
            setIsOpen(false)
          }}
        >
          关闭菜单
        </Button>
        <br />
        <br />
        <Select
          open={isOpen}
          options="狗:dog,猫,狮子,老虎,鲸鱼,非常长非常长非常长非常长非常长非常长非常长非常长动物"
          label="动物"
          placeholder="请选择"
          onMenuVisibleChange={setIsOpen}
        />
      </div>
    </div>
  )
}

SelectStoryBook5.storyName = 'Menu Control'

export const SelectStoryBook6 = () => {
  return (
    <div style={{ width: '300px' }}>
      <div>过滤器模式</div>
      <div className="select-story">
        <Select
          options="狗:dog,猫,狮子,老虎,鲸鱼,非常长非常长非常长非常长非常长非常长非常长非常长动物"
          label="动物-宽度自动"
          filterMode
          filterInput
          showClearButton
          optionsStyle={{ minWidth: '100px' }}
        />
      </div>
    </div>
  )
}

SelectStoryBook6.storyName = 'Filter Mode'

export const SelectStoryBook7 = () => {
  return (
    <div style={{ width: '300px' }}>
      <div>禁用选项</div>
      <div className="select-story">
        <Select
          options={[
            { text: '可用选项1', value: 0 },
            { text: '不可用选项', value: 1, disabled: true },
            { text: '可用选项2', value: 2 },
            { text: '可用选项3', value: 3 }
          ]}
          optionsStyle={{ minWidth: '100px' }}
        />
      </div>
    </div>
  )
}

SelectStoryBook7.storyName = 'Disable Options'

export const SelectStoryBook8 = () => {
  return (
    <div style={{ width: '300px' }}>
      <div>自定义底部</div>
      <div className="select-story">
        <Select
          options={[
            { text: '可用选项1', value: 0 },
            { text: '可用选项2', value: 2 },
            { text: '可用选项3', value: 3 }
          ]}
          optionsStyle={{ minWidth: '100px' }}
          bottomElement={
            <div style={{ textAlign: 'center', padding: '15px' }}>底部内容</div>
          }
        />
      </div>
    </div>
  )
}

SelectStoryBook8.storyName = 'Bottom Element'

export const SelectStoryBook9 = () => {
  return (
    <div style={{ width: '300px' }}>
      <div>加载中状态</div>
      <div className="select-story">
        <Select
          options={[
            { text: '可用选项1', value: 0 },
            { text: '可用选项2', value: 2 },
            { text: '可用选项3', value: 3 }
          ]}
          optionsStyle={{ minWidth: '100px' }}
          loading
        />
      </div>
    </div>
  )
}

SelectStoryBook9.storyName = 'Loading State'

export const SelectStoryBook10 = () => {
  return (
    <>
      <div>定义option选项展示哪些字段以及分隔符: </div>
      <br />
      <div style={{ width: '300px' }} className="select-story">
        <Select
          options="狗:dog,猫:cat,狮子:lion,老虎:tiger"
          label="text:value"
          placeholder="请选择"
          display={['text', 'value']}
        />
        <Select
          options="狗:dog,猫:cat,狮子:lion,老虎:tiger"
          label="isSameDisplay=false"
          placeholder="请选择"
          display={['text', 'value']}
          isSameDisplay={false}
        />
        <Select
          options="狗:dog,猫:cat,狮子:lion,老虎:tiger"
          label="value-text"
          placeholder="请选择"
          display={['value', 'text']}
          separator="-"
        />
      </div>
    </>
  )
}

SelectStoryBook10.storyName = 'Customize Option'
