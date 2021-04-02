import React, { useState } from 'react';
import { Button, Input, Modal } from '../../';
export default {
  title: 'Feedback/Modal',
  component: Modal
};

export const ModalStoryBook = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk=()=>{
    setIsModalVisible(false);
  }

  const handleCancel=()=>{
    setIsModalVisible(false);
  }
  return <>
  <Modal title='用户协议' okText='同意' cancelText='我考虑一下' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
   
      根据中华人民共和国...
   
  </Modal>
  <Button onClick={()=>setIsModalVisible(true)} type="primary">显示模式框</Button>
  </>;
};

ModalStoryBook.storyName = 'Modal';
