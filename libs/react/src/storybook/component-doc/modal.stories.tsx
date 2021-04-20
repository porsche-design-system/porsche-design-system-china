import React, { useState } from 'react';
import { Button, Modal } from '../../';
export default {
  title: 'Feedback/Modal',
  component: Modal
};

export const ModalStoryBook = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
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
          Modal.alert('你看到了一个弹出框', () => {
            console.log('关闭');
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
          Modal.confirm('你看到了一个弹出框', () => {
            console.log('关闭');
          })
        }
        type="secondary"
      >
        显示确认信息
      </Button>
    </>
  );
};

ModalStoryBook.storyName = 'Modal';
