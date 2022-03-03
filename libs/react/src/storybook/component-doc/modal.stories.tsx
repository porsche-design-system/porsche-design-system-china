import { IconArrowHeadRight, IconClose, IconWarningFilled } from '@pui/icons'
import React, { useEffect, useState } from 'react'
import { useDefaultSize } from '../../shared/hooks'
import { Button, Modal, Tabs, TabPane } from '../..'
import './modal.stories.scss'

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

  const Tab4 = () => {
    return (
      <>
        <Button
          onClick={() =>
            Modal.show({
              title: '对话框标题',
              content:
                '删除后，该模版就将作为历史版本记录在【历史上传记录】中，可随时下载查看。确定是否需要删除该模版？ 确定是否需要删除该模版？ ',
              modalSize: 'small',
              footer: null
            })
          }
          type="secondary"
        >
          不含Footer
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
        <TabPane title="Maximum">
          <Tab3 />
        </TabPane>
        <TabPane title="Without Footer">
          <Tab4 />
        </TabPane>
      </Tabs>
    </div>
  )
}

ModalStoryBook1.storyName = 'Dialogue Small'

export const ModalStoryBook2 = () => {
  const [defaultSize] = useDefaultSize()
  const ButtonMargin = defaultSize === 'small' ? '12px' : '24px'
  const Tab1 = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <Modal
          visible={visible}
          title="对话框标题"
          okText="主要按钮"
          cancelText="次要按钮"
          hasDivider
          onCancel={() => setVisible(false)}
          onOk={() => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('ok')
                setVisible(false)
              }, 2000)
            })
          }}
        >
          {' '}
        </Modal>
        <Button onClick={() => setVisible(true)} type="secondary">
          基础对话框 - 默认
        </Button>
      </>
    )
  }

  const Tab2 = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <Modal
          visible={visible}
          title="对话框标题"
          subtitle={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconWarningFilled style={{ color: '#ff9b00' }} />
              警示性说明描述文字，言简意赅。
            </div>
          }
          okText="主要按钮"
          cancelText="次要按钮"
          hasDivider
          onCancel={() => setVisible(false)}
          onOk={() => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('ok')
                setVisible(false)
              }, 2000)
            })
          }}
        >
          {' '}
        </Modal>
        <Button onClick={() => setVisible(true)} type="secondary">
          含副标题的对话框
        </Button>
      </>
    )
  }

  const Tab3 = () => {
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
      <>
        <Modal
          visible={visible}
          title="对话框标题"
          onCancel={() => setVisible(false)}
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <Button type="link" icon={<IconArrowHeadRight />}>
                  链接按钮
                </Button>
              </div>
              <div>
                <Button
                  type="default"
                  marginRight={ButtonMargin}
                  onClick={() => setVisible(false)}
                  icon={<IconClose />}
                >
                  次要按钮
                </Button>
                <Button
                  type="primary"
                  disabled={loading}
                  icon={<IconArrowHeadRight />}
                  onClick={() => {
                    return new Promise(resolve => {
                      setLoading(true)
                      setTimeout(() => {
                        resolve('ok')
                        setLoading(false)
                        setTimeout(() => {
                          setVisible(false)
                        }, 200)
                      }, 2000)
                    })
                  }}
                >
                  {loading ? 'loading...' : '主要按钮'}
                </Button>
              </div>
            </div>
          }
          okText="主要按钮"
          cancelText="次要按钮"
          hasDivider
        >
          {' '}
        </Modal>
        <Button onClick={() => setVisible(true)} type="secondary">
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
              className: 'modal-demo-example-1',
              title: 'M号最小对话框标题',
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
          M号最小对话框标题
        </Button>
      </>
    )
  }

  const Tab5 = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <Modal
          visible={visible}
          title="对话框标题"
          hasDivider
          onCancel={() => setVisible(false)}
          footer={null}
        >
          {' '}
        </Modal>
        <Button onClick={() => setVisible(true)} type="secondary">
          基础对话框 - 不含Footer
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
        <TabPane title="Without Footer">
          <Tab5 />
        </TabPane>
      </Tabs>
    </div>
  )
}

ModalStoryBook2.storyName = 'Dialogue Medium'

export const ModalStoryBook3 = () => {
  const [defaultSize] = useDefaultSize()
  const ButtonMargin = defaultSize === 'small' ? '12px' : '24px'
  const Tab1 = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <Modal
          visible={visible}
          title="对话框标题"
          okText="主要按钮"
          cancelText="次要按钮"
          hasDivider
          modalSize="large"
          onCancel={() => setVisible(false)}
          onOk={() => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('ok')
                setVisible(false)
              }, 2000)
            })
          }}
        >
          {' '}
        </Modal>
        <Button onClick={() => setVisible(true)} type="secondary">
          基础对话框 - 默认
        </Button>
      </>
    )
  }

  const Tab2 = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <Modal
          visible={visible}
          title="对话框标题"
          subtitle={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconWarningFilled style={{ color: '#ff9b00' }} />
              警示性说明描述文字，言简意赅。
            </div>
          }
          okText="主要按钮"
          cancelText="次要按钮"
          hasDivider
          modalSize="large"
          onCancel={() => setVisible(false)}
          onOk={() => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('ok')
                setVisible(false)
              }, 2000)
            })
          }}
        >
          {' '}
        </Modal>
        <Button onClick={() => setVisible(true)} type="secondary">
          含副标题的对话框
        </Button>
      </>
    )
  }

  const Tab3 = () => {
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
      <>
        <Modal
          visible={visible}
          title="对话框标题"
          modalSize="large"
          onCancel={() => setVisible(false)}
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <Button type="link" icon={<IconArrowHeadRight />}>
                  链接按钮
                </Button>
              </div>
              <div>
                <Button
                  type="default"
                  marginRight={ButtonMargin}
                  onClick={() => setVisible(false)}
                  icon={<IconClose />}
                >
                  次要按钮
                </Button>
                <Button
                  type="primary"
                  disabled={loading}
                  icon={<IconArrowHeadRight />}
                  onClick={() => {
                    return new Promise(resolve => {
                      setLoading(true)
                      setTimeout(() => {
                        resolve('ok')
                        setLoading(false)
                        setTimeout(() => {
                          setVisible(false)
                        }, 200)
                      }, 2000)
                    })
                  }}
                >
                  {loading ? 'loading...' : '主要按钮'}
                </Button>
              </div>
            </div>
          }
          okText="主要按钮"
          cancelText="次要按钮"
          hasDivider
        >
          {' '}
        </Modal>
        <Button onClick={() => setVisible(true)} type="secondary">
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
              className: 'modal-demo-example-2',
              title: 'L号最小对话框标题',
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
          L号最小对话框标题
        </Button>
      </>
    )
  }

  const Tab5 = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <Modal
          visible={visible}
          title="对话框标题"
          hasDivider
          modalSize="large"
          onCancel={() => setVisible(false)}
          footer={null}
        >
          {' '}
        </Modal>
        <Button onClick={() => setVisible(true)} type="secondary">
          基础对话框 - 无Footer
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
        <TabPane title="Without Footer">
          <Tab5 />
        </TabPane>
      </Tabs>
    </div>
  )
}

ModalStoryBook3.storyName = 'Dialogue Large'
