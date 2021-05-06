import React, { useState } from 'react'
import { Input, Row, Col, Form, Button } from '../..'

import './input.stories.scss'

export default {
  title: 'Data Entry/Input',
  component: Input
}

export const InputsStoryBook = () => {
  const [value, setValue] = useState('')

  return (
    <Row>
      <Col span={12}>
        <div className="states">Default</div>
        <div>
          <Input placeholder="请输入" />
        </div>
        <br />
        <div className="states">Disabled</div>
        <div>
          <Input placeholder="请输入" disabled />
        </div>
        <br />
        <div className="states">Max Length</div>
        <div>
          <Input placeholder="最多输入150个字符" maxLength={150} />
        </div>
        <br />
        <div className="states">Label Top</div>
        <div>
          <Input
            label="姓名"
            placeholder="请输入"
            error={{ show: true, message: '输入信息有误' }}
            rules={{ required: true, message: '必须填写' }}
          />
        </div>
        <br /> <br />
        <div className="states">Label Left</div>
        <div>
          <Form>
            <Input
              label={{ text: '姓名', position: 'left' }}
              placeholder="请输入"
              rules={{ required: true, message: '必须填写' }}
            />
            <Input
              label={{ text: '家庭地址', position: 'left' }}
              placeholder="请输入"
              rules={{ required: true, message: '必须填写' }}
              error={{ show: true, message: '输入信息有误' }}
            />
          </Form>
        </div>
        <br />
        <div className="states">Label Left / Text Align Right</div>
        <div>
          <Form>
            <Input
              label={{ text: '姓名', textAlign: 'right', position: 'left' }}
              placeholder="请输入"
              rules={{ required: true, message: '必须填写' }}
            />
            <Input
              label={{ text: '家庭地址', textAlign: 'right', position: 'left' }}
              placeholder="请输入"
              rules={{ required: true, message: '必须填写' }}
              error={{ show: true, message: '输入信息有误' }}
            />
          </Form>
        </div>
        <br />
        <div className="states">Password</div>
        <div>
          <Input type="password" placeholder="请输入密码" />
        </div>
        <br />
        <div className="states">Show Clear Button</div>
        <div>
          <Input placeholder="点击右侧按钮清除" showClearButton />
        </div>
        <br />
        <div className="states">Show View Password Button</div>
        <div>
          <Input
            type="password"
            placeholder="点击右侧按钮显示密码"
            showViewPasswordButton
          />
        </div>
        <br />
        <br />
        <br />
        <div>
          <Input value={value} onValueChange={setValue} placeholder="测试" />
        </div>
        <div>
          <Button
            onClick={() => {
              setValue('123')
            }}
            type="text"
          >
            测试赋值
          </Button>
        </div>
      </Col>
    </Row>
  )
}
