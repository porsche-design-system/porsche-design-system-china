import React, { useEffect, useState } from 'react'
import { UploadFile } from 'src/components/upload/interface'
import { Upload, Row, Col, Message, Button, RadioGroup } from '../..'

import './upload.stories.scss'

const action =
  'https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload'
const Authorization = 'Bearer 89f1e56b-fed6-443b-ad3a-0c051b85d719'
export default {
  title: 'Data Entry/Upload',
  component: Upload
}

export const UploadStoryBook = () => {
  useEffect(() => {
    const mainStory = document.getElementById(
      'anchor--data-entry-upload--upload-story-book'
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
UploadStoryBook.storyName = 'Upload'

export const UploadStoryBook1 = () => {
  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'success'
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'error'
    }
  ]

  const onChange = (file: UploadFile, list: UploadFile[]) => {
    console.log(file, list)
  }
  const handleBeforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      Message.pop('error', '请上传jpg或png格式的文件')
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      Message.pop('error', '文件大小不能超过2M')
      return false;
    }
    return true;
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Upload
            btnProps={{ type: 'primary', size: 'small' }}
            action={action}
            headers={{
              Authorization
            }}
            listIgnore={true}
            defaultFileList={fileList}
            multiple
            tip="要求文件格式jpg,png, 大小不超过20M"
            onChange={onChange}
            beforeUpload={handleBeforeUpload}
          // accept='.png,.jpg'
          />
        </Col>
      </Row>
    </>
  )
}
UploadStoryBook1.storyName = 'Upload Files'

export const UploadStoryBook2 = () => {
  const handleBeforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      Message.pop('error', '请上传jpg或png格式的文件')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      Message.pop('error', '文件大小不能超过2M')
    }
    return isJpgOrPng && isLt2M
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Upload
            action={action}
            headers={{
              Authorization
            }}
            drag
            multiple
            beforeUpload={handleBeforeUpload}
          />
        </Col>
      </Row>
    </>
  )
}
UploadStoryBook2.storyName = 'Upload Custom'

export const UploadStoryBook7 = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const uploadProps = {
    // listIgnore: true,
    action: action,
    headers: {
      Authorization
    },
    defaultFileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'success'
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'error'
      }
    ],
    onRemove: (file: UploadFile) => {
      setFileList(prevFile => prevFile.filter(item => item.uid !== file.uid))
    },
    beforeUpload: (file: File) => {
      let baseFile: UploadFile = {
        uid: Math.random().toString().replace(/0./, ''),
        name: file.name,
        size: file.size,
        percent: 0,
        originFileObj: file
      }

      setFileList([...fileList, baseFile])
      return false;
    },
    onChange: (file: UploadFile, list: UploadFile[]) => {
      console.log(file, list)
    }
  }

  const uploadHandle = () => {
    console.log(fileList)
    setFileList([])
  }

  return (
    <>
      <Row style={{ marginBottom: '20px' }}>
        <Col span={12}>
          <Upload
            fileList={fileList}
            multiple
            {...uploadProps}
          // accept='.png,.jpg'
          />
        </Col>
      </Row>
      <Button onClick={uploadHandle}>开始上传</Button>
    </>
  )
}
UploadStoryBook7.storyName = '手动上传'

export const UploadStoryBook3 = () => {
  return (
    <>
      <div className="upload-component-list">
        <Upload
          action={action}
          headers={{
            Authorization
          }}
          listType="picture-card"
        />
        <Upload
          action={action}
          headers={{
            Authorization
          }}
          listType="picture-card"
        />
      </div>
    </>
  )
}
UploadStoryBook3.storyName = 'Upload Pictures Default'

export const UploadStoryBook4 = () => {
  const fileList1 = [
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-xxx',
      percent: 100,
      name: 'image.png',
      status: 'uploading',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]
  const fileList2 = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'success',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]
  const fileList3 = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'error',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]

  return (
    <>
      <div className="uploading-list">
        <Upload
          action={action}
          headers={{
            Authorization
          }}
          listType="picture-card"
          defaultFileList={fileList1}
        />
      </div>
    </>
  )
}
UploadStoryBook4.storyName = 'Upload Pictures Uploading'

export const UploadStoryBook5 = () => {
  const fileList2 = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'success',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]
  const fileList3 = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'error',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]

  return (
    <>
      <div className="uploaded-list">
        <div className="uploaded-tip">
          限定数量:当上传照片数到达限制后，上传按钮消失。
        </div>
        <Upload
          action={action}
          headers={{ Authorization }}
          listType="picture-card"
          defaultFileList={fileList2}
          className="list-uploaded"
          count={3}
        />
      </div>
    </>
  )
}
UploadStoryBook5.storyName = 'Upload Pictures Uploaded'

export const UploadStoryBook6 = () => {
  const fileList3 = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'error',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]

  return (
    <>
      <div className="uploaded-list">
        <div className="uploaded-tip">Error</div>
        <Upload
          action={action}
          headers={{ Authorization }}
          listType="picture-card"
          defaultFileList={fileList3}
        />
      </div>
    </>
  )
}
UploadStoryBook6.storyName = 'Upload Pictures Error'
