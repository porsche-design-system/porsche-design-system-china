import React, { useState } from 'react'
import { Button, Modal } from '../..'

export default {
  title: 'Feedback/Modal',
  component: Modal
}

export const ModalStoryBook = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOk = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('')
        setIsModalVisible(false)
      }, 1000)
    })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Modal
        style={{width:'800px'}}
        title="用户协议"
        okText="同意"
        cancelText="我考虑一下"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        根据中华人民共和国...
      </Modal>
      <Button onClick={() => setIsModalVisible(true)} type="primary">
        显示模式框
      </Button>
      <br />
      <br />
      <Button
        onClick={() =>
          Modal.alert('提示信息', '你看到了一个弹出框', () => {
            console.log('关闭')
          })
        }
        type="secondary"
      >
        显示提示信息
      </Button>
      <br />
      <br />
      <Button
        onClick={() =>
          Modal.confirm('确认信息', '你看到了一个弹出框', () => {
            console.log('关闭')
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('')
              }, 1500)
            })
          })
        }
        type="secondary"
      >
        显示确认信息
      </Button>
    </>
  )
}

ModalStoryBook.storyName = 'Modal'
