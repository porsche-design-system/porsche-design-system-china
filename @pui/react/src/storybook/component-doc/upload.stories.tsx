import { IconUpload } from '@pui/icons'
import React, { useEffect, useState } from 'react'
import { UploadFile } from 'src/components/upload/interface'
import { Upload, Row, Col, Message, Button, Tabs, TabPane } from '../..'

import './upload.stories.scss'

const action =
  'https://develop.porsche-preview.cn/pdc-api-gateway/smamo-rental-service/web/v1/vehicles/image/upload'
const Authorization = 'Bearer e173a3e3-38cb-4d36-a442-aee2df63ee0c'
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
  const uploadProps = {
    // showUploadList: { showRemoveIcon: false },
    // showUploadList: false,
    onChange: (file: UploadFile, list: UploadFile[]) => {
      console.log(file)
      console.log(list)
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
    beforeUpload: (file: File) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        Message.pop('error', '请上传jpg或png格式的文件')
        return false
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        Message.pop('error', '文件大小不能超过2M')
        return false
      }
      return true
    }
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Upload
            // btnProps={{ type: 'primary', size: 'small' }}
            action={action}
            headers={{
              Authorization
            }}
            multiple
            // tip="要求文件格式jpg,png, 大小不超过2M"
            {...uploadProps}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <small>
          {' '}
          <big>*</big> btnProps 可修饰默认按钮， 如有children，则覆盖默认按钮。
        </small>
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
UploadStoryBook2.storyName = 'Upload Drag'

export const UploadStoryBook7 = () => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [fileList, setFileList] = useState<UploadFile[]>([])
  useEffect(() => {
    if (fileList.length) {
      setBtnDisabled(false)
    }
  }, [fileList])
  const uploadProps = {
    listIgnore: false,
    action,
    headers: {
      Authorization
    },
    fileList,
    // 测试defaultFileList与fileList同时存在时，以fileList为准
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
      const baseFile: UploadFile = {
        uid: Math.random().toString().replace(/0./, ''),
        name: file.name,
        size: file.size,
        percent: 0,
        originFileObj: file
      }
      setFileList([...fileList, baseFile])
      return false
    },
    onChange: (file: UploadFile, list: UploadFile[]) => {
      console.log(file)
      console.log(list)
    }
  }

  const uploadHandle = () => {
    console.log(fileList)
    Message.pop('success', '上传成功')
    setFileList([])
  }

  return (
    <>
      <Row style={{ marginBottom: '20px' }}>
        <Col span={12}>
          <Upload multiple {...uploadProps} />
        </Col>
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        <Button disabled={btnDisabled} onClick={uploadHandle}>
          开始上传
        </Button>
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        <small>
          {' '}
          <big>*</big> beforeUpload 返回 false
          后，手动上传文件。可手动控制setFileList是否清空所选文件列表。
        </small>
      </Row>
    </>
  )
}
UploadStoryBook7.storyName = 'Upload Manually'

export const UploadStoryBook3 = () => {
  const successFileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'success',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]
  const errorFileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'error',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]
  const uploadingFileList = [
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]

  const [buttonType, setButtonType] = useState('1')

  return (
    <>
      <Tabs
        size="small"
        hasLine
        onActiveKeyChange={key => {
          setButtonType(key)
        }}
      >
        <TabPane tabKey="1" title="Default" />
        <TabPane tabKey="2" title="Success" />
        <TabPane tabKey="3" title="Error" />
        <TabPane tabKey="4" title="Uploading" />
      </Tabs>

      {buttonType === '1' && (
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
      )}
      {buttonType === '2' && (
        <div className="upload-component-list">
          <Upload
            action={action}
            headers={{ Authorization }}
            listType="picture-card"
            defaultFileList={successFileList}
            className="list-uploaded"
          />
        </div>
      )}
      {buttonType === '3' && (
        <div className="upload-component-list">
          <Upload
            action={action}
            headers={{ Authorization }}
            listType="picture-card"
            defaultFileList={errorFileList}
            className="list-uploaded"
          />
        </div>
      )}
      {buttonType === '4' && (
        <div className="upload-component-list">
          <Upload
            action={action}
            headers={{ Authorization }}
            listType="picture-card"
            defaultFileList={uploadingFileList}
            className="list-uploaded"
          />
        </div>
      )}
    </>
  )
}
UploadStoryBook3.storyName = 'Upload Pictures'

export const UploadStoryBook4 = () => {
  const uploadProps = {
    onChange: (file: UploadFile, list: UploadFile[]) => {
      console.log(file)
      console.log(list)
    },
    beforeUpload: (file: File) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        Message.pop('error', '请上传jpg或png格式的文件')
        return false
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        Message.pop('error', '文件大小不能超过2M')
        return false
      }
      return true
    },
    tip: '最多上传1个文件',
    maxCount: 1
  }

  return (
    <>
      <Row>
        <Col span={10}>
          <Upload
            action={action}
            headers={{
              Authorization
            }}
            multiple
            {...uploadProps}
          >
            <Button icon={IconUpload}>添加文件（maxCount: 1）</Button>
          </Upload>
        </Col>
        <Col span={10}>
          <Upload
            // btnProps={{ type: 'primary', size: 'small' }}
            action={action}
            headers={{
              Authorization
            }}
            multiple
            {...uploadProps}
            maxCount={2}
            tip="最多上传2个文件"
            onExceededMaxCount={(limit, now) => {
              Message.warning(`上传文件个数${limit}，超出最大值${now}`)
            }}
          >
            <Button icon={IconUpload}>添加文件（maxCount: 2）</Button>
          </Upload>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={10}>
          <Upload
            action={action}
            headers={{
              Authorization
            }}
            multiple
            {...uploadProps}
            listType="picture-card"
            maxCount={1}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={10}>
          <Upload
            action={action}
            headers={{
              Authorization
            }}
            multiple
            {...uploadProps}
            listType="picture"
            maxCount={1}
            tip="最多上传1个文件"
          />
        </Col>
      </Row>
    </>
  )
}
UploadStoryBook4.storyName = 'Upload Count Limit'
