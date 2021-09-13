import React, { useState } from 'react'
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  TextArea,
  Row,
  Col,
  Message
} from '../..'

export default {
  title: 'Feedback/Modal',
  component: Modal
}

export const ModalStoryBook = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOk = () => {
    Form['updateForm'].submit()
  }

  const handleSubmit = (data: any, error: any) => {
    if (!error) {
      setTimeout(() => {
        Message.pop('success', '数据更新成功')
        setIsModalVisible(false)
      }, 1000)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            children:
              '纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框',
            okText: '主要按钮',
            cancelText: '次要按钮'
          })
        }
        type="secondary"
      >
        基础对话框 - 默认
      </Button>
      <br />
      <br />
    </>
  )
}

ModalStoryBook.storyName = 'Modal'

export const ModalStoryBook1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOk = () => {
    Form['updateForm'].submit()
  }

  const handleSubmit = (data: any, error: any) => {
    if (!error) {
      setTimeout(() => {
        Message.pop('success', '数据更新成功')
        setIsModalVisible(false)
      }, 1000)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Modal
        style={{ width: '800px' }}
        title="对话框标题"
        subtitle="对话框副标题"
        hasDivider
        okText="主要按钮"
        cancelText="次要按钮"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          onSubmit={handleSubmit}
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
        </Form>
      </Modal>
      <Button
        onClick={() => {
          setIsModalVisible(true)
        }}
        type="primary"
      >
        复合对话话框
      </Button>

      <br />
      <br />
    </>
  )
}

ModalStoryBook1.storyName = 'Composite Modal'

export const ModalStoryBook2 = () => {
  return (
    <>
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            subtitle: '对话框副标题',
            children:
              '纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框文字内容纯文字对话框',
            okText: '主要按钮',
            cancelText: '次要按钮'
          })
        }
        type="secondary"
      >
        基础对话框 - 含副标题
      </Button>

      <br />
      <br />
    </>
  )
}

ModalStoryBook2.storyName = 'With Subtitles'

export const ModalStoryBook3 = () => {
  return (
    <>
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            titleIconType: 'warning',
            children: '确定执行这个操作吗？',
            showClose: false,
            okText: '确定删除',
            okIcon: null,
            cancelText: '我再想想',
            cancelIcon: null
          })
        }
        type="secondary"
      >
        警示对话框
      </Button>

      <br />
      <br />
    </>
  )
}

ModalStoryBook3.storyName = 'Warning Modal'

export const ModalStoryBook4 = () => {
  return (
    <>
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            subtitle: '对话框副标题',
            titleIconType: 'warning',
            children: '确定执行这个操作吗？',
            showClose: false,
            okText: '确定删除',
            okIcon: null,
            cancelText: '我再想想',
            cancelIcon: null
          })
        }
        type="secondary"
      >
        警示对话框 - 含副标题
      </Button>
    </>
  )
}

ModalStoryBook4.storyName = 'Warning Modal With Subtitles'
