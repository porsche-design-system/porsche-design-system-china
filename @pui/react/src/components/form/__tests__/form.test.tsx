import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Form } from '../form'
import { Input, Button, RadioGroup, Radio, Select } from '../../..'

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (T: any) => T,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {}
  }
}))

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
        <RadioGroup name="info.job" label="职业">
          <Radio text="教师" />
          <Radio text="医生" />
          <Radio text="警察" />
          <Radio text="律师" />
        </RadioGroup>

        <Select
          data-testId="123"
          placeholder="请选择性别"
          options="男:male,女:female"
          label="性别"
          width="54%"
          name="gender"
        />
        <Button submit>提交</Button>
      </Form>
    )

    fireEvent.input(getByPlaceholderText('请输入姓名'), '测试姓名1')
    fireEvent.input(getByPlaceholderText('请输入年龄'), '28')
    fireEvent.click(getByText('医生'))
    fireEvent.click(getByText('请选择性别'))
    fireEvent.click(getByText('男'))

    fireEvent.click(getByText('提交'))

    expect(handleSubmit).not.toBeCalledWith({
      name: '',
      age: '',
      job: '',
      gender: ''
    })

    expect(handleSubmit).not.toBeCalledWith({
      name: '测试姓名1',
      age: '28',
      info: {
        job: '医生'
      },
      gender: 'male'
    })
  })
})
