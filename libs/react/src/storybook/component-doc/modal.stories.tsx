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
  <Modal title='模式框标题' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    内容
    <p>
    <Input label="用户名" />
    </p>
    <p>
      <Input label="密码" />
    </p>
  </Modal>
  <Button onClick={()=>setIsModalVisible(true)} type="primary">显示模式框</Button>
  </>;
};

ModalStoryBook.storyName = 'Modal';
