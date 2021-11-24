import React, { useEffect, useState } from 'react'
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  TextArea,
  Row,
  Col,
  Message,
  Tabs,
  TabPane
} from '../..'

export default {
  title: 'Feedback/Modal',
  component: Modal
}

export const ModalStoryBook = () => {
  useEffect(() => {
    const mainStory = document.getElementById(
      'anchor--feedback-modal--modal-story-book'
    )
    if (mainStory) {
      mainStory.style.display = 'none'
    }
    const mainTitles = document.getElementsByClassName('sbdocs-title')
    if (mainTitles.length > 0) {
      const mainTitle = mainTitles[0] as HTMLElement
      mainTitle.style.marginBottom = '48px'
    }
  })
  return <div />
}

ModalStoryBook.storyName = 'Modal'

export const ModalStoryBook1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOk = () => {
    Form.findById['updateForm'].submit()
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
    <div>
      <div >
        <Tabs
          size="small"
          

         
        >
          <TabPane tabKey="Default" title="Default" >

            default

          {/* <Modal
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
      </Button> */}
          </TabPane>
          <TabPane tabKey="Confirm" title="Confirm" >
            confirm
          </TabPane>
          <TabPane tabKey="Maximum" title="Maximum" >
            maximum
          </TabPane>
        </Tabs>
      </div>
      

    
    </div>
  )
}

ModalStoryBook1.storyName = 'Dialogue Small'

export const ModalStoryBook2 = () => {
  return (
    <>
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            subtitle: '对话框副标题',
            content:
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

ModalStoryBook2.storyName = 'Dialogue Medium'

export const ModalStoryBook3 = () => {
  return (
    <>
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            titleIconType: 'warning',
            content: '确定执行这个操作吗？',
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

ModalStoryBook3.storyName = 'Dialogue Large'

export const ModalStoryBook4 = () => {
  return (
    <>
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            subtitle: '对话框副标题',
            titleIconType: 'warning',
            content: (
              <div>
                <Select options="测试1,测试2,测试3,测试4,测试5,测试6,测试7,测试8" />
              </div>
            ),
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
