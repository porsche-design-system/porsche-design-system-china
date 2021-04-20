import { IconArrowHeadRight, IconClose } from '@pui/icons';
import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '..';
import { componentClassNames } from '../../shared/class-util';
import './modal.scss';

export interface Props {
  // 组件属性 //
  /** 子组件 */
  children?: React.ReactNode;

  /** 样式 */
  style?: CSSProperties;

  /** 标题 */
  title?: string;

  /** 对话框是否可见 */
  visible?: boolean;

  /** 确认按钮文字 */
  okText?: string;

  /** 取消按钮文字 */
  cancelText?: string;

  // 组件事件 //

  /* 点击确定回调 */
  onOk?: () => void;

  /* 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void;

  /* 显示取消按钮 */
  showCancel?: boolean;

  /* 显示关闭按钮 */
  showClose?: boolean;

  rootRef?: any;
}

const Modal = ({
  style,
  visible = false,
  title,
  children,
  okText = '确认',
  cancelText = '取消',
  onOk,
  onCancel,
  showCancel = true,
  showClose = true,
  rootRef
}: Props) => {
  const [show, setShow] = useState(visible);
  useEffect(() => {
    setShow(visible);
  }, [visible]);
  return ReactDOM.createPortal(
    <div
      ref={rootRef}
      className={componentClassNames('pui-modal-root', { hide: !show + '' })}
      style={style}
    >
      <div className="pui-modal-mask"></div>
      <div className="pui-modal-wrap">
        <div className="pui-modal">
          <div className="pui-modal-content">
            {showClose && (
              <div
                className="pui-modal-close"
                onClick={() => {
                  onCancel && onCancel();
                }}
              >
                <IconClose />
              </div>
            )}

            <div className="pui-modal-header">
              <div className="pui-modal-title">{title}</div>
            </div>
            <div className="pui-modal-body">{children}</div>
            <div className="pui-modal-footer">
              {showCancel && (
                <Button
                  onClick={() => onCancel && onCancel()}
                  icon={<IconClose />}
                  marginRight="10px"
                >
                  {cancelText}
                </Button>
              )}
              <Button type="primary" icon={<IconArrowHeadRight />} onClick={() => onOk && onOk()}>
                {okText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.alert = (
  content: ReactNode,
  onOk: (() => void) | undefined = undefined,
  okText: string = '确认'
) => {
  const modalId = '$ModalContainer';
  let modalContainer = document.getElementById(modalId);
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = modalId;
    document.body.appendChild(modalContainer);
  }

  let currentPop: any = null;
  ReactDOM.render(
    <Modal
      okText={okText}
      showClose={false}
      rootRef={(r: any) => {
        currentPop = r;
      }}
      onOk={() => {
        document.body.removeChild(modalContainer!);
        document.body.removeChild(currentPop);
        onOk && onOk();
      }}
      visible
      showCancel={false}
    >
      {content}
    </Modal>,
    modalContainer
  );
};

Modal.confirm = (
  content: ReactNode,
  onOk: (() => void) | undefined = undefined,
  onCancel: (() => void) | undefined = undefined,
  okText: string = '确认',
  cancelText: string = '取消'
) => {
  const modalId = '$ModalContainer';
  let modalContainer = document.getElementById(modalId);
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = modalId;
    document.body.appendChild(modalContainer);
  }

  let currentPop: any = null;
  ReactDOM.render(
    <Modal
      okText={okText}
      showClose={false}
      onCancel={() => {
        document.body.removeChild(modalContainer!);
        document.body.removeChild(currentPop);
        onCancel && onCancel();
      }}
      cancelText={cancelText}
      rootRef={(r: any) => {
        currentPop = r;
      }}
      onOk={() => {
        document.body.removeChild(modalContainer!);
        document.body.removeChild(currentPop);
        onOk && onOk();
      }}
      visible
    >
      {content}
    </Modal>,
    modalContainer
  );
};

export { Modal };
