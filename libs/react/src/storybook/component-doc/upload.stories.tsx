import React, { useState } from 'react'
import { Upload, Row, Col, } from '../..'

import './upload.stories.scss'

export default {
  title: 'Data Entry/Upload',
  component: Upload
}

export const InputsStoryBook = () => {
  return (
    <Row>
      <Col span={12}>
        <Upload
          action='https://jsonplaceholder.typicode.com/todos/'
          headers={{ 'Authorization': 'Bearer 66591f9d-7a48-4cc8-8095-3213f9036682' }}
          multiple
          tip='要求文件格式jpg,png, 大小不超过20M'
        />
      </Col>
      <Col span={12}>

        <Upload
          action='https://jsonplaceholder.typicode.com/todos/'
          headers={{ 'Authorization': 'Bearer 66591f9d-7a48-4cc8-8095-3213f9036682' }}
          // accept='.png'
          drag
          multiple
        // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'

        />
      </Col>
    </Row>
  )
}
