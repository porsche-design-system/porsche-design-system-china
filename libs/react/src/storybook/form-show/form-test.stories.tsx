import React from 'react'

import { Button, Input, Form, Select, Row, Col, TextArea, Modal } from '../..'

export default {
  title: 'Form Example/Form Test',
  component: Form
}

export const ExampleStoryBook = () => {
  return (
    <div>
      <Modal
        visible
        onOk={() => {
          Form['updateForm'].submit()
        }}
      >
        <Form
          onDataChange={data => {
            console.log(data)
          }}
          name="updateForm"
        >
          <Row>
            <Col span={12}>
              <Input
                label="名称"
                width="96%"
                name="channelName"
                placeholder="请输入名称"
                rules={{ required: true, message: '请输入渠道名称' }}
              />
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Select
                label="类型"
                width="96%"
                options="PDC:0,第三方:1,自定义:2"
                name="channelType"
                rules={{ required: true, message: '请选择类型' }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <TextArea label="描述" placeholder="请输入描述" />
            </Col>
          </Row>
          <Button type="primary" submit>
            测试
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
