import { IconCheck, IconLink } from '@pui/icons'
import React from 'react'
import { Input, FashionInput, Row, Col, Form, Tooltip } from '../..'

import './input.stories.scss'

export default {
  title: 'Data Entry/Input',
  component: Input
}

export const InputsStoryBook = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Default</div>
        <div>
          <Input
            placeholder="请输入"
            onValueChange={val => {
              console.log(val)
            }}
          />
        </div>
        <br />
        <div className="states">Disabled</div>
        <div>
          <Input placeholder="请输入" disabled suffixIcon={IconCheck} />
        </div>
        <br />
      </Col>
    </Row>
  )
}
InputsStoryBook.storyName = 'Input'

export const InputsStoryBook1 = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Max Length</div>
        <div>
          <Input placeholder="最多输入150个字符" maxLength={150} />
        </div>
        <br />
      </Col>
    </Row>
  )
}

InputsStoryBook1.storyName = 'MAX LENGTH'

export const InputBlurHideMaxLength = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">BLUR HIDE MAX LENGTH</div>
        <div>
          <FashionInput placeholder="最多输入30个字符" maxLength={30} />
        </div>
        <br />
      </Col>
    </Row>
  )
}

InputBlurHideMaxLength.storyName = 'BLUR HIDE MAX LENGTH'

export const InputsStoryBook2 = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Label Top</div>
        <div>
          <Input
            label="姓名"
            placeholder="请输入"
            error={{ show: true, message: '输入信息有误' }}
            rules={{ required: true, message: '必须填写' }}
          />
        </div>
        <br />
      </Col>
    </Row>
  )
}

InputsStoryBook2.storyName = 'Label Top'

export const InputsStoryBook3 = () => {
  return (
    <Row>
      <Col span={12}>
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
      </Col>
    </Row>
  )
}

InputsStoryBook3.storyName = 'Label Left'

export const InputsStoryBook4 = () => {
  return (
    <Row>
      <Col span={12}>
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
      </Col>
    </Row>
  )
}

InputsStoryBook4.storyName = 'Label Left / Text Align Right'

export const InputsStoryBook5 = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Password</div>
        <div>
          <Input type="password" placeholder="请输入密码" />
        </div>
        <br />
      </Col>
    </Row>
  )
}

InputsStoryBook5.storyName = 'PASSWORD'

export const InputsStoryBook6 = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Show Clear Button</div>
        <div>
          <Input placeholder="点击右侧按钮清除" showClearButton />
        </div>
        <br />
      </Col>
    </Row>
  )
}

InputsStoryBook6.storyName = 'Show Clear Button'

export const InputsStoryBook7 = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Show View Password Button</div>
        <div>
          <Input
            type="password"
            placeholder="点击右侧按钮显示密码"
            showViewPasswordButton
          />
        </div>
        <br />
      </Col>
    </Row>
  )
}
InputsStoryBook7.storyName = 'Show View Password Button'

export const InputsStoryBook8 = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">自定义后缀</div>
        <div>
          <Input placeholder="自定义ICON" suffixIcon={IconCheck} />
        </div>
        <br />
        <div>
          <Input
            placeholder="自定义ICON"
            suffixIcon={
              <Tooltip content="Show View Suffix Icon">
                <IconLink />
              </Tooltip>
            }
          />
        </div>
        <br />
        <div>
          <Input placeholder="自定义后缀" suffixContent="km" />
        </div>
        <br />
      </Col>
    </Row>
  )
}

InputsStoryBook8.storyName = 'Show View Suffix Content & Icon'

export const InputsStoryBook9 = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Tiny Size</div>
        <div>
          <Input placeholder="请输入" size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input
            placeholder="请输入"
            disabled
            suffixIcon={IconCheck}
            size="tiny"
          />
        </div>
        <br />
        <br />
        <div>
          <Input placeholder="最多输入150个字符" maxLength={150} size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input
            placeholder="请输入"
            rules={{ required: true, message: '必须填写' }}
            error={{ show: true, message: '输入信息有误' }}
            size="tiny"
          />
        </div>
        <br />
        <br />
        <div>
          <Input type="password" placeholder="请输入密码" size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input placeholder="点击右侧按钮清除" showClearButton size="tiny" />
        </div>
        <br />
        <br />
        <div>
          <Input
            type="password"
            placeholder="点击右侧按钮显示密码"
            showViewPasswordButton
            size="tiny"
          />
        </div>
        <br />
      </Col>
    </Row>
  )
}

InputsStoryBook9.storyName = 'Tiny Size'
