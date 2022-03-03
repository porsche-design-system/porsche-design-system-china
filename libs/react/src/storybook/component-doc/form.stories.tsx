import { IconArrowHeadRight, IconClose } from '@pui/icons'
import React, { useState } from 'react'
import { FormLabelStyle } from '../../components/form/form'
import './form.stories.scss'

import {
  Select,
  Button,
  Input,
  TextArea,
  RadioGroup,
  Radio,
  Row,
  Col,
  Form,
  ButtonGroup,
  CheckBoxGroup,
  CheckBox,
  DatePicker,
  Switch,
  Search,
  DateRangePicker
} from '../..'

export default {
  title: 'Data Entry/Form',
  component: Form
}

export const ExampleStoryBook = () => {
  const [labelLayout, setLabelLayout] = useState<FormLabelStyle>({
    position: 'top'
  })
  const [buttonAlign, setButtonAlign] = useState('left')
  const [data, setData] = useState({ lastName: '李' })

  return (
    <div>
      <RadioGroup
        label={{ text: '表单标签显示方式', style: { fontWeight: 'bold' } }}
        onValueChange={value => {
          setLabelLayout(JSON.parse(value))
        }}
        value={JSON.stringify(labelLayout)}
      >
        <Radio
          text="标签文字在上面"
          value={JSON.stringify({ position: 'top' })}
        />
        <Radio
          text="标签文字在左边"
          value={JSON.stringify({
            position: 'left',
            textAlign: 'left'
          })}
        />
        <Radio
          text="标签文字在左边，文字向右对齐"
          value={JSON.stringify({ position: 'left', textAlign: 'right' })}
        />
      </RadioGroup>
      <br /> <br />
      <RadioGroup
        label={{ text: '底部按钮位置', style: { fontWeight: 'bold' } }}
        onValueChange={value => {
          setButtonAlign(value)
        }}
        value={buttonAlign}
      >
        <Radio text="左" value="left" />
        <Radio text="中" value="center" />
        <Radio text="右" value="right" />
      </RadioGroup>
      <br />
      <br />
      <Row>
        <Col span={15}>
          <Form
            labelLayout={labelLayout}
            data={data}
            onDataChange={d => {
              setData(d)
            }}
            onSubmit={(data, error) => {
              console.log('submit', data)
              console.log('error', error)
            }}
          >
            <Input
              label="姓"
              name="lastName"
              width="44%"
              rules={{ required: true, message: '必须填写' }}
              marginRight="2%"
            />
            <Input
              label="名"
              name="firstName"
              width="54%"
              rules={{ required: true, message: '必须填写' }}
            />
            <DatePicker
              name="birthday"
              label="生日"
              width="44%"
              marginRight="2%"
            />
            <Select
              options="男:male,女:female"
              label="性别"
              width="54%"
              name="gender"
            />
            <Input
              label="电子邮件"
              name="email"
              rules={{ type: 'email', message: '邮件格式不正确' }}
            />
            <DateRangePicker
              label="上牌日期"
              name="dateRange"
              showClearButton
              mustPickStartEnd
            />
            <DateRangePicker
              label="修理时间"
              name="dateRange2"
              showClearButton
            />
            <Input
              label="手机号"
              name="mobile"
              rules={[
                { required: true, message: '必须填写' },
                { type: 'number', message: '手机号必须是数字' }
              ]}
            />
            <Search name="search" />
            <Switch label="保时捷车主" name="ownCar" />
            <RadioGroup name="job" label="职业">
              <Radio text="教师" />
              <Radio text="医生" />
              <Radio text="警察" />
              <Radio text="律师" />
            </RadioGroup>
            <CheckBoxGroup
              label="兴趣爱好"
              name="hobbies"
              rules={[
                {
                  validator: (_, val) => {
                    return val.length >= 3
                  },
                  message: '请选择至少3个爱好'
                }
              ]}
            >
              <CheckBox text="唱歌" />
              <CheckBox text="玩游戏" />
              <CheckBox text="跳舞" />
              <CheckBox text="游泳" />
            </CheckBoxGroup>
            <TextArea
              label="家庭地址"
              rules={{ required: true, message: '必须填写' }}
              name="address"
            />
            <ButtonGroup align={buttonAlign as any}>
              <Button type="primary" icon={IconArrowHeadRight} submit>
                提交
              </Button>
              <Button type="default" icon={IconClose}>
                取消
              </Button>
            </ButtonGroup>
          </Form>
        </Col>
        <Col span={9} style={{ paddingLeft: '15px', whiteSpace: 'pre' }}>
          {JSON.stringify(data, null, 2)}
        </Col>
      </Row>
    </div>
  )
}

ExampleStoryBook.storyName = 'Form'

export const ExampleStoryBook1 = () => {
  return (
    <div>
      <Form style={{ width: '600px' }}>
        <Input label="Field A" width="44%" marginRight="2%" />
        <Input label="Field B" width="54%" />
        <DatePicker label="Field A" width="44%" marginRight="2%" />
        <Select label="Field B" options="男:male,女:female" width="54%" />
        <Input label="Field A" />
        <Input label="Field B" />
      </Form>
    </div>
  )
}

ExampleStoryBook1.storyName = 'Columns'

export const ExampleStoryBook2 = () => {
  return (
    <div>
      <div>标签文字在上面</div>
      <br />
      <Form labelLayout={{ position: 'top' }}>
        <Input label="Field A" width="44%" marginRight="2%" />
        <Input label="Field B" width="54%" />
      </Form>
      <div>标签文字在左边</div>
      <br />
      <Form labelLayout={{ position: 'left', textAlign: 'left' }}>
        <Input label="Field A" width="44%" marginRight="2%" />
        <Input label="Field B" width="54%" />
      </Form>
      <div>标签文字在左边，文字向右对齐</div>
      <br />
      <Form labelLayout={{ position: 'left', textAlign: 'right' }}>
        <Input label="Field A" width="44%" marginRight="2%" />
        <Input label="Field B" width="54%" />
      </Form>
      <div>按钮在左边</div>
      <br />
      <ButtonGroup align="left">
        <Button type="primary" icon={IconArrowHeadRight} submit>
          提交
        </Button>
        <Button type="default" icon={IconClose}>
          取消
        </Button>
      </ButtonGroup>
      <div>按钮在中间</div>
      <br />
      <ButtonGroup align="center">
        <Button type="primary" icon={IconArrowHeadRight} submit>
          提交
        </Button>
        <Button type="default" icon={IconClose}>
          取消
        </Button>
      </ButtonGroup>
      <div>按钮在右边</div>
      <br />
      <ButtonGroup align="right">
        <Button type="primary" icon={IconArrowHeadRight} submit>
          提交
        </Button>
        <Button type="default" icon={IconClose}>
          取消
        </Button>
      </ButtonGroup>
    </div>
  )
}

ExampleStoryBook2.storyName = 'Label'

export const ExampleStoryBook3 = () => {
  return (
    <div>
      <Form
        style={{ width: '600px' }}
        onSubmit={(data, error) => {
          console.log('submit', data)
          console.log('error', error)
        }}
      >
        <Input
          label="姓名"
          width="44%"
          marginRight="2%"
          name="uerName"
          placeholder="请填写姓名"
          rules={{ required: true, message: '必须填写' }}
        />
        <Input
          type="password"
          label="密码"
          width="54%"
          name="password"
          placeholder="请填写密码"
          rules={{ required: true, message: '必须填写' }}
        />
        <CheckBoxGroup
          label="兴趣爱好"
          name="hobbies"
          rules={[
            {
              validator: (_, val) => {
                return val.length >= 3
              },
              message: '请选择至少3个爱好'
            }
          ]}
        >
          <CheckBox text="唱歌" />
          <CheckBox text="玩游戏" />
          <CheckBox text="跳舞" />
          <CheckBox text="游泳" />
        </CheckBoxGroup>
        <Input
          label="手机号"
          name="mobile"
          rules={[
            { required: true, message: '必须填写' },
            { type: 'number', message: '手机号必须是数字' }
          ]}
        />
        <Input
          name="email"
          label="电子邮箱"
          rules={{ type: 'email', message: '邮件格式不正确' }}
        />
        <TextArea
          label="家庭地址"
          rules={{ required: true, message: '必须填写' }}
          name="address"
        />
        <Button type="primary" icon={IconArrowHeadRight} submit>
          提交
        </Button>
      </Form>
    </div>
  )
}

ExampleStoryBook3.storyName = 'Error Handle'

export const ExampleStoryBook4 = () => {
  const [data, setData] = useState({
    lastName: '李',
    firstName: '宁',
    hobbies: ['唱歌', '跳舞'],
    ownCar: true,
    job: '警察'
  })
  return (
    <div>
      <Row>
        <Col span={15}>
          <Form
            data={data}
            onDataChange={d => {
              setData(d)
            }}
            onSubmit={(data, error) => {
              console.log('submit', data)
              console.log('error', error)
            }}
          >
            <Input
              label="姓"
              width="44%"
              marginRight="2%"
              name="lastName"
              rules={{ required: true, message: '必须填写' }}
            />
            <Input
              label="名"
              width="54%"
              name="firstName"
              rules={{ required: true, message: '必须填写' }}
            />
            <CheckBoxGroup
              label="兴趣爱好"
              name="hobbies"
              rules={[
                {
                  validator: (_, val) => {
                    return val.length >= 3
                  },
                  message: '请选择至少3个爱好'
                }
              ]}
            >
              <CheckBox text="唱歌" />
              <CheckBox text="玩游戏" />
              <CheckBox text="跳舞" />
              <CheckBox text="游泳" />
            </CheckBoxGroup>
            <Input
              label="手机号"
              name="mobile"
              rules={[
                { required: true, message: '必须填写' },
                { type: 'number', message: '手机号必须是数字' }
              ]}
            />
            <Input
              name="email"
              label="电子邮箱"
              rules={{ type: 'email', message: '邮件格式不正确' }}
            />
            <Switch label="保时捷车主" name="ownCar" />
            <RadioGroup name="job" label="职业">
              <Radio text="教师" />
              <Radio text="医生" />
              <Radio text="警察" />
              <Radio text="律师" />
            </RadioGroup>
            <ButtonGroup>
              <Button type="primary" icon={IconArrowHeadRight} submit>
                提交
              </Button>
              <Button type="default" icon={IconClose}>
                取消
              </Button>
            </ButtonGroup>
          </Form>
        </Col>
        <Col span={9} style={{ paddingLeft: '15px', whiteSpace: 'pre' }}>
          {JSON.stringify(data, null, 2)}
        </Col>
      </Row>
    </div>
  )
}

ExampleStoryBook4.storyName = 'Data Binding'

export const ExampleStoryBook5 = () => {
  const [data, setData] = useState({
    lastName: '李',
    hobbies: ['唱歌', '跳舞'],
    ownCar: true,
    job: '警察'
  })
  return (
    <div>
      <Row>
        <Col span={15}>
          <Form
            name="form"
            data={data}
            onDataChange={d => {
              setData(d)
            }}
            onSubmit={(data, error) => {
              console.log('submit', data)
              console.log('error', error)
            }}
          >
            <Input
              label="姓"
              width="44%"
              marginRight="2%"
              name="lastName"
              rules={{ required: true, message: '必须填写' }}
            />
            <Input
              label="名"
              width="54%"
              name="firstName"
              rules={{ required: true, message: '必须填写' }}
            />
            <CheckBoxGroup
              label="兴趣爱好"
              name="hobbies"
              rules={[
                {
                  validator: (_, val) => {
                    return val.length >= 3
                  },
                  message: '请选择至少3个爱好'
                }
              ]}
            >
              <CheckBox text="唱歌" />
              <CheckBox text="玩游戏" />
              <CheckBox text="跳舞" />
              <CheckBox text="游泳" />
            </CheckBoxGroup>
            <Input
              label="手机号"
              name="mobile"
              rules={[
                { required: true, message: '必须填写' },
                { type: 'number', message: '手机号必须是数字' }
              ]}
            />
            <Input
              name="email"
              label="电子邮箱"
              rules={{ type: 'email', message: '邮件格式不正确' }}
            />
            <Switch label="保时捷车主" name="ownCar" />
          </Form>
        </Col>
        <Col span={9} style={{ paddingLeft: '15px', whiteSpace: 'pre' }}>
          {JSON.stringify(data, null, 2)}
        </Col>
      </Row>
      <Button
        type="primary"
        onClick={() => {
          Form.findById('form').submit()
        }}
      >
        Submit
      </Button>
    </div>
  )
}

ExampleStoryBook5.storyName = 'Outside Submit Button'
