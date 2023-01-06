import { IconArrowHeadRight, IconClose, IconInformation } from '@pui/icons'
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
  DateRangePicker,
  Modal,
  Tooltip,
  DateTimePicker,
  Upload
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
  const [data, setData] = useState<any>({
    lastName: '李',
    // upload默认值必须字段：name,uid,status
    // 默认值对象结构需要和formDataMapping的返回值保持一致，因为默认值需要经过formDataMapping处理
    uploadFiles: [
      {
        name: '图片1.jpg',
        uid: 'uid1234',
        status: 'success',
        fileId: 'fileId1234'
      }
    ]
  })

  const testChange2 = (val: any) => {
    data.testTime4b = val
    setData(data)
    console.log('testChange2', val, data)
  }

  const testChange1 = (val: any) => {
    data.testTime4 = val
    setData(data)
    console.log('testChange1', val, data)
  }
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
              console.log(d)
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
              rules={{ required: true }}
              marginRight="2%"
            />
            <Input
              label="名"
              name="firstName"
              width="54%"
              rules={{ required: true, message: '必须填写' }}
              instantValidate
            />
            <DatePicker
              name="birthday"
              label="生日"
              width="44%"
              marginRight="2%"
              rules={[{ required: true, message: '日期必须填写' }]}
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
              rules={[{ required: true, message: '日期必须填写' }]}
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
            <DateTimePicker
              width="300px"
              label="DateTimePicker到港日期"
              placeholder="请输入日期"
              showStyle="CommonHHMMSS"
              name="testTime4"
              componentId="testTime4"
              rules={[{ required: true, message: '日期必须填写' }]}
              onValueChange={testChange1}
            />
            <DateTimePicker
              label="DateTimePicker到港日期2"
              isRange
              width="300px"
              placeholderStartDate="开始日期"
              placeholderEndDate="结束日期"
              showStyle="CommonHHMMSS"
              name="testTime4b"
              componentId="testTime4b"
              rules={[{ required: true, message: '到港日期2必须填写' }]}
              onValueChange={testChange2}
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
            <Upload
              rules={{
                message: '必须传1文件',
                validator: (_, val) => {
                  return val.length >= 1
                }
              }}
              multiple
              maxCount={1}
              label="上传身份证正反面"
              name="uploadFiles"
              headers={{
                Authorization: 'Bearer 1a5830xxx-12ee-4f69-a114-f0be5a40350a'
              }}
              action="https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload"
              formDataMapping={files => {
                if (files.length === 0) {
                  return []
                }
                return files.map(f => {
                  return {
                    name: f.name,
                    uid: f.uid,
                    status: f.status,
                    fileId: (f as any).fileId || f.response?.data?.fileId
                  }
                })
              }}
            />
            <CheckBox name="agree" text="同意条款" />
            <br /> <br />
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
      <br />
      <div>自定义标签</div>
      <Form labelLayout={{ position: 'left', textAlign: 'right' }}>
        <Input
          label={
            <span>
              <span style={{ color: 'red' }}>自定义</span>Label
              <Tooltip content="提示信息">
                <IconInformation style={{ fontSize: '16px' }} />
              </Tooltip>
            </span>
          }
          width="44%"
          marginRight="2%"
        />
        <Input
          label={{
            text: (
              <span>
                <span style={{ color: 'red' }}>自定义</span>Label
              </span>
            )
          }}
          width="54%"
        />
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
          Form.findByName('form').submit()
        }}
      >
        Submit
      </Button>
    </div>
  )
}

ExampleStoryBook5.storyName = 'Outside Submit Button'

export const ExampleStoryBook6 = () => {
  return (
    <Button
      onClick={() => {
        Modal.show({
          title: '样例弹出表单',
          onOk() {
            // 这里会调用form的onSubmit方法，记得return
            return Form.findByName('MyForm').submit()
          },
          content: (
            <div>
              <Form
                name="MyForm"
                onSubmit={(_d, error) => {
                  // 有错误
                  if (error) {
                    return Promise.reject()
                  }
                  // 表单无错，发请求（模拟）
                  return new Promise(resolve => {
                    setTimeout(() => {
                      resolve('')
                    }, 2000)
                  })
                }}
              >
                <Input label="姓名" rules={[{ required: true }]} name="name" />
                <Select
                  label="性别"
                  rules={[{ required: true }]}
                  name="gender"
                  options="男,女"
                />
                <Input
                  label="保时捷邮箱"
                  rules={[
                    {
                      type: 'string',
                      pattern:
                        /^[.A-Za-z0-9u4e00-u9fa5]+@porsche-[a-zA-Z0-9_-]+.com$/,
                      message: '仅支持绑定保时捷邮箱'
                    },
                    { required: true, message: '请输入邮箱' }
                  ]}
                  name="email"
                />
              </Form>
            </div>
          )
        })
      }}
    >
      显示弹出表单
    </Button>
  )
}

ExampleStoryBook6.storyName = 'Modal Form Submit'

export const ExampleStoryBook7 = () => {
  return (
    <div>
      <Form
        name="my-form"
        width="200px"
        onSubmit={(data, error) => {
          console.log('submit', data)
          console.log('error', error)
        }}
      >
        <Input label="姓名" name="name" />
        <Select
          options={[
            { text: '先生', value: 0 },
            { text: '女士', value: 1 }
          ]}
          label="性别"
          name="gender"
        />
      </Form>

      <Button
        onClick={() => {
          Form.findByName('my-form').reset()
        }}
        marginRight="5px"
      >
        重置数据
      </Button>
      <Button
        onClick={() => {
          Form.findByName('my-form').setData({ name: '蕾蕾', gender: 1 })
        }}
        marginRight="5px"
      >
        设置数据
      </Button>
      <Button
        type="primary"
        onClick={() => {
          Form.findByName('my-form').submit()
        }}
      >
        提交
      </Button>
    </div>
  )
}

ExampleStoryBook7.storyName = 'Change Data'

const FormWrap2 = () => {
  return <CheckBox name="checked" />
}

const FormWrap = () => {
  return (
    <div>
      <TextArea name="address" />
      <FormWrap2 />
    </div>
  )
}

export const ExampleStoryBook8 = () => {
  const [data, setData] = useState({})

  /*
  这个代码应该写在 该组件外 写在这里是为了StoryBook展示
  const FormWrap2 = () => {
    return <CheckBox name="checked" />
  }

  const FormWrap = () => {
    return (
      <div>
        <TextArea name="address" />
        <FormWrap2 />
      </div>
    )
  }
  */

  return (
    <div>
      <Form data={data} onDataChange={setData} style={{ width: '600px' }}>
        子组件也可以使用 name 属性
        <Input label="Field A" name="name" />
        <FormWrap />
      </Form>
      {JSON.stringify(data)}
    </div>
  )
}

ExampleStoryBook8.storyName = '嵌套组件'
