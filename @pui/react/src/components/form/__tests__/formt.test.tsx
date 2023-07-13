import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form } from '../form'
import { Input, Button, RadioGroup, Radio, Select } from '../../..'

describe('Test Form', () => {
  test('test default data rendering', async () => {
    render(
      <Form defaultData={{ title: 'title1' }}>
        <Input name="title" />
      </Form>
    )

    expect(screen.getByDisplayValue('title1')).toBeInTheDocument()
  })

  test('test form submit', async () => {
    const handleSubmit = jest.fn()

    const { getByPlaceholderText, getByText } = render(
      <Form onSubmit={handleSubmit}>
        <Input label="姓名" placeholder="请输入姓名" name="name" />
        <Input label="年龄" placeholder="请输入年龄" name="age" />
        <RadioGroup name="job" label="职业">
          <Radio text="教师" />
          <Radio text="医生" />
          <Radio text="警察" />
          <Radio text="律师" />
          <Select
            placeholder="请选择性别"
            options="男:male,女:female"
            label="性别"
            width="54%"
            name="gender"
          />
        </RadioGroup>

        <Button submit>提交</Button>
      </Form>
    )

    await userEvent.type(getByPlaceholderText('请输入姓名'), '测试姓名1')
    await userEvent.type(getByPlaceholderText('请输入年龄'), '28')
    await userEvent.click(getByText('医生'))
    await userEvent.click(getByText('请选择性别'))
    await userEvent.click(getByText('男'))

    await userEvent.click(getByText('提交'))

    expect(handleSubmit).not.toBeCalledWith({
      name: '',
      age: '',
      job: '',
      gender: ''
    })

    expect(handleSubmit).not.toBeCalledWith({
      name: '测试姓名1',
      age: '28',
      job: '医生',
      gender: 'male'
    })
  })
})
