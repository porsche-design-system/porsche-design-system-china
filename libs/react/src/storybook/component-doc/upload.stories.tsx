import React from 'react'
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
          action='https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload'
          headers={{ 'Authorization': 'Bearer c22220d6-12b3-4f27-86e5-967ca0efd619' }}
          multiple
          tip='要求文件格式jpg,png, 大小不超过20M'
        >
        </Upload>
      </Col>
      <Col span={12}>
        <Upload
          action='https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload'
          headers={{ 'Authorization': 'Bearer c22220d6-12b3-4f27-86e5-967ca0efd619' }}
          drag
          multiple

        />
      </Col>
    </Row>
  )
}
