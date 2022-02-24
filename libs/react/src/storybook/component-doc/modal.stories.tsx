import React, { useEffect } from 'react'
import { Button, Modal, Select, Tabs, TabPane } from '../..'

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
  const Tab1 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              content:
                '删除后，该模版就将作为历史版本记录在【历史上传记录】中，可随时下载查看。确定是否需要删除该模版？ 确定是否需要删除该模版？ ',
              okText: '主要按钮',
              cancelText: '次要按钮',
              modalSize: 'small',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          基础对话框 - 默认
        </Button>
      </>
    )
  }

  const Tab2 = () => {
    return (
      <>
        <Button
          style={{ marginRight: '40px' }}
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              titleIconType: 'info',
              content:
                '删除后，该模版就将作为历史版本记录在【历史上传记录】中，可随时下载查看。确定是否需要删除该模版？ 确定是否需要删除该模版？ ',
              okText: '主要按钮',
              cancelText: '次要按钮',
              modalSize: 'small',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          确认对话框 - 默认
        </Button>

        <Button
          style={{ marginRight: '40px' }}
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              titleIconType: 'warning',
              content:
                '删除后，该模版就将作为历史版本记录在【历史上传记录】中，可随时下载查看。确定是否需要删除该模版？ 确定是否需要删除该模版？ ',
              okText: '主要按钮',
              cancelText: '次要按钮',
              modalSize: 'small',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          确认对话框 - 警告
        </Button>
        <Button
          style={{ marginRight: '40px' }}
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              titleIconType: 'error',
              content:
                '删除后，该模版就将作为历史版本记录在【历史上传记录】中，可随时下载查看。确定是否需要删除该模版？ 确定是否需要删除该模版？ ',
              okText: '主要按钮',
              cancelText: '次要按钮',
              modalSize: 'small',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          确认对话框 - 报错
        </Button>

        <Button
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              titleIconType: 'success',
              content:
                '删除后，该模版就将作为历史版本记录在【历史上传记录】中，可随时下载查看。确定是否需要删除该模版？ 确定是否需要删除该模版？ ',
              okText: '主要按钮',
              cancelText: '次要按钮',
              modalSize: 'small',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          确认对话框 - 成功
        </Button>
      </>
    )
  }

  const Tab3 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              content:
                '协议文本内容： 协议文本内容。协议文本内容。协议文本内容。协议文本内容协议文本内容协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容： 协议文本内容。协议文本内容。协议文本内容。协议文本内容协议文本内容协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。协议文本内容。',
              okText: '主要按钮',
              cancelText: '次要按钮',
              modalSize: 'small',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          内容较多的对话框
        </Button>
      </>
    )
  }
  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane title="Default">
          <Tab1 />
        </TabPane>
        <TabPane title="Confirm">
          <Tab2 />
        </TabPane>
        <TabPane title="Minimum">
          <Tab3 />
        </TabPane>
      </Tabs>
    </div>
  )
}

ModalStoryBook1.storyName = 'Dialogue Small'

export const ModalStoryBook2 = () => {
  const Tab1 = () => {
    return (
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            content: '',
            okText: '主要按钮',
            cancelText: '次要按钮',
            hasDivider: true,
            onOk() {
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve('ok')
                }, 2000)
              })
            }
          })
        }
        type="secondary"
      >
        基础对话框 - 默认
      </Button>
    )
  }

  const Tab2 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              subtitle: '警示性说明描述文字，言简意赅。',
              content: '',
              okText: '主要按钮',
              cancelText: '次要按钮',
              hasDivider: true,
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          含副标题的对话框
        </Button>
      </>
    )
  }

  const Tab3 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              content: '',
              okText: '主要按钮',
              cancelText: '次要按钮',
              hasDivider: true,
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          底部包含其他操作的对话框
        </Button>
      </>
    )
  }

  const Tab4 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: 'M号最小对话框标题',
              content: (
                <div>
                  删除后，该模版就将作为历史版本记录在【历史上传记录】中，可随时下载查看。
                  <Select
                    label="类型"
                    width="96%"
                    options="PDC:0,第三方:1,自定义:2"
                    name="channelType"
                    rules={{ required: true, message: '请选择类型' }}
                  />
                  <br />
                  <br />
                  <Select
                    label="类型"
                    width="96%"
                    options="PDC:0,第三方:1,自定义:2"
                    name="channelType"
                    rules={{ required: true, message: '请选择类型' }}
                  />
                </div>
              ),
              okText: '主要按钮',
              cancelText: '次要按钮',
              hasDivider: true,
              modalSize: 'small',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          M号最小对话框标题
        </Button>
      </>
    )
  }
  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane title="Default">
          <Tab1 />
        </TabPane>
        <TabPane title="With Subtitle">
          <Tab2 />
        </TabPane>
        <TabPane title="With Subaction">
          <Tab3 />
        </TabPane>
        <TabPane title="Minimum">
          <Tab4 />
        </TabPane>
      </Tabs>
    </div>
  )
}

ModalStoryBook2.storyName = 'Dialogue Medium'

export const ModalStoryBook3 = () => {
  const Tab1 = () => {
    return (
      <Button
        onClick={() =>
          Modal.show({
            title: '对话框标题',
            content: '',
            okText: '主要按钮',
            cancelText: '次要按钮',
            hasDivider: true,
            modalSize: 'large',
            onOk() {
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve('ok')
                }, 2000)
              })
            }
          })
        }
        type="secondary"
      >
        基础对话框 - 默认
      </Button>
    )
  }

  const Tab2 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              subtitle: '警示性说明描述文字，言简意赅。',
              content: '',
              okText: '主要按钮',
              cancelText: '次要按钮',
              hasDivider: true,
              modalSize: 'large',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          含副标题的对话框
        </Button>
      </>
    )
  }

  const Tab3 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              content: '',
              okText: '主要按钮',
              cancelText: '次要按钮',
              hasDivider: true,
              modalSize: 'large',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          底部包含其他操作的对话框
        </Button>
      </>
    )
  }

  const Tab4 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: 'L号最小对话框标题',
              content: (
                <div>
                  删除后，该模版就将作为历史版本记录在【历史上传记录】中，可随时下载查看。
                  <Select
                    label="类型"
                    width="96%"
                    options="PDC:0,第三方:1,自定义:2"
                    name="channelType"
                    rules={{ required: true, message: '请选择类型' }}
                  />
                  <br />
                  <br />
                  <Select
                    label="类型"
                    width="96%"
                    options="PDC:0,第三方:1,自定义:2"
                    name="channelType"
                    rules={{ required: true, message: '请选择类型' }}
                  />
                </div>
              ),
              okText: '主要按钮',
              cancelText: '次要按钮',
              hasDivider: true,
              modalSize: 'small',
              onOk() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve('ok')
                  }, 2000)
                })
              }
            })
          }
          type="secondary"
        >
          L号最小对话框标题
        </Button>
      </>
    )
  }
  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane title="Default">
          <Tab1 />
        </TabPane>
        <TabPane title="With Subtitle">
          <Tab2 />
        </TabPane>
        <TabPane title="With Subaction">
          <Tab3 />
        </TabPane>
        <TabPane title="Maximum">
          <Tab4 />
        </TabPane>
      </Tabs>
    </div>
  )
}

ModalStoryBook3.storyName = 'Dialogue Large'
