import React from 'react'
import { Select, Form } from '../..'
import './select.stories.scss'

export default {
  title: 'Data Entry/Select',
  component: Select
}

export const SelectStoryBook = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <Select
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
          placeholder="请选择"
          width="200px"
          onValueChange={() => {}}
        />
        <div>禁用状态</div>
        <Select options="狗,猫,狮子,老虎,鲸鱼" disabled />
      </Form>
    </div>
  )
}

SelectStoryBook.storyName = 'Select'

export const SelectStoryBook1 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <Select
          options={[10, 12, 33]}
          label="数字"
          placeholder="请选择"
          width="200px"
          onValueChange={val => {
            console.log(typeof val)
          }}
        />
      </Form>
    </div>
  )
}

SelectStoryBook1.storyName = 'Number Options'

export const SelectStoryBook11 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <Select
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
          placeholder="请选择"
          width="200px"
        />
      </Form>
    </div>
  )
}

SelectStoryBook11.storyName = 'String Options'

export const SelectStoryBook12 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
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
          width="200px"
        />
      </Form>
    </div>
  )
}

SelectStoryBook12.storyName = 'Group Options'

export const SelectStoryBook13 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
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
          width="200px"
        />
      </Form>
    </div>
  )
}

SelectStoryBook13.storyName = 'Custom Options Style'

export const SelectStoryBook2 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>出错状态</div>
        <Select
          options="狗,猫,狮子,老虎,鲸鱼"
          error={{ show: true, message: '未选择' }}
        />
      </Form>
    </div>
  )
}

SelectStoryBook2.storyName = 'Error'

export const SelectStoryBook3 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>显示过滤输入框</div>
        <Select
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
        />
      </Form>
    </div>
  )
}

SelectStoryBook3.storyName = 'Show filter Input'

export const SelectStoryBook4 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>显示清除按钮</div>
        <div className="select-story">
          <Select
            defaultValue="dog"
            options="狗:dog,猫,狮子,老虎,鲸鱼"
            label="动物"
            placeholder="请选择"
            width="200px"
            showClearButton
          />
        </div>
      </Form>
    </div>
  )
}

SelectStoryBook4.storyName = 'Clear Button'

export const SelectStoryBook5 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>控制菜单显示</div>
        <div className="select-story">
          <Select
            defaultOpen
            options="狗:dog,猫,狮子,老虎,鲸鱼"
            label="动物"
            placeholder="请选择"
            width="200px"
          />
        </div>
      </Form>
    </div>
  )
}

SelectStoryBook5.storyName = 'Menu Control'

export const SelectStoryBook6 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>过滤器模式</div>
        <div className="select-story">
          <Select
            options="狗:dog,猫,狮子,老虎,鲸鱼,动物"
            width="200px"
            label="动物"
            maxWidth="260px"
            filterMode
            showClearButton
            optionsStyle={{ minWidth: '100px' }}
          />
        </div>
      </Form>
    </div>
  )
}

SelectStoryBook6.storyName = 'Filter Mode'
