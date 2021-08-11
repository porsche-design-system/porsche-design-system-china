import React from 'react'
import { Upload, Row, Col } from '../..'

import './upload.stories.scss'

export default {
  title: 'Data Entry/Upload',
  component: Upload
}

export const InputsStoryBook = () => {
  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'success',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    }
  ]
  return (
    <>
      <Row>
        <Col span={12}>
          <Upload
            action="https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload"
            headers={{
              Authorization: 'Bearer d0d768a9-ca64-4c37-9063-d49e5cfbb9d7'
            }}
            multiple
            tip="要求文件格式jpg,png, 大小不超过20M"
          />
        </Col>
        <Col span={12}>
          <Upload
            action="https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload"
            headers={{
              Authorization: 'Bearer c1e504ca-f3a9-4301-8a64-d6128b40db5f'
            }}
            drag
            multiple
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '50px' }}>
        <Col span={12}>
          <div className="upload-states">上传图片</div>
          <Upload
            action="https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload"
            headers={{
              Authorization: 'Bearer c1e504ca-f3a9-4301-8a64-d6128b40db5f'
            }}
            multiple
            listType="picture-card"
          />
        </Col>
        <Col span={12}>
          <div className="upload-states">
            限定数量:{' '}
            <small>
              用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。
            </small>
          </div>

          <Upload
            action="https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload"
            headers={{
              Authorization: 'Bearer c1e504ca-f3a9-4301-8a64-d6128b40db5f'
            }}
            multiple
            defaultFileList={fileList}
            listType="picture-card"
            count={5}
          />
        </Col>
      </Row>
    </>
  )
}
