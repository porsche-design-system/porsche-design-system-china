import React from 'react'
import { Switch, Form } from '../..'

export default {
  title: 'Data Entry/Switch',
  component: Switch
}

export const SwitchBook = () => {
  return (
    <div>
      <Form>
        <Switch
          label={{ text: '是否发送邮件', position: 'left', width: '120px' }}
        />
        <Switch
          label={{ text: '禁用状态', position: 'left', width: '120px' }}
          disabled
          value
        />
      </Form>
    </div>
  )
}

SwitchBook.storyName = 'Switch'

export const SwitchBook1 = () => {
  return (
    <div>
      <Form>
        <Switch
          label={{ text: '出错状态', position: 'left', width: '120px' }}
          error={{ show: true, message: '必须打开' }}
        />
      </Form>
    </div>
  )
}

SwitchBook1.storyName = 'Error'

export const SwitchBook2 = () => {
  return (
    <div>
      <Form>
        <div>修改值为 0/1</div>
        <Switch
          label={{ text: '修改值为 0/1', position: 'left', width: '120px' }}
          alterValues="ZeroOrOne"
          onValueChange={val => {
            console.log(val)
          }}
        />
        <div>修改值为 false/true</div>
        <Switch
          label={{
            text: '修改值为 false/true',
            position: 'left',
            width: '150px'
          }}
          alterValues="FalseOrTrue"
          onValueChange={val => {
            console.log(val)
          }}
        />
        <div>修改值为 male/female</div>
        <Switch
          label={{
            text: '修改值为 male/female',
            position: 'left',
            width: '150px'
          }}
          alterValues="Male,Female"
          onValueChange={val => {
            console.log(val)
          }}
        />
      </Form>
    </div>
  )
}

SwitchBook2.storyName = 'Switch Value'
