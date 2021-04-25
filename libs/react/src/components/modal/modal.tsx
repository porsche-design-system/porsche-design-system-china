import { IconArrowHeadRight, IconClose } from '@pui/icons';
import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '..';
import { componentClassNames } from '../../shared/class-util';
import './modal.scss';

export interface ModalProps {
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

  /* 点击确定回调 */
  onOk?: () => void;

  /* 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void;

  /* 显示取消按钮 */
  showCancel?: boolean;

  /* 显示关闭按钮 */
  showClose?: boolean;

  modalRef?: any;
}

let modalSetIsLoading: (val: boolean) => void;
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
  modalRef
}: ModalProps) => {
  const [show, setShow] = useState(visible);
  const [isLoading, setIsLoading] = useState(false);
  modalSetIsLoading = setIsLoading;

  useEffect(() => {
    setShow(visible);
  }, [visible]);
  return ReactDOM.createPortal(
    <div
      ref={modalRef}
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
              <Button
                type="primary"
                loading={isLoading}
                icon={<IconArrowHeadRight />}
                onClick={() => onOk && onOk()}
              >
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
  title: string,
  content: ReactNode,
  onOk: (() => void | Promise<unknown>) | undefined = undefined,
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
      title={title}
      okText={okText}
      showClose={false}
      modalRef={(r: any) => {
        currentPop = r;
      }}
      onOk={() => {
        if (onOk) {
          const loadingPromise = onOk();
          if (typeof loadingPromise === 'object') {
            modalSetIsLoading(true);
            (loadingPromise as Promise<unknown>).then(() => {
              modalSetIsLoading(false);
              document.body.removeChild(modalContainer!);
              document.body.removeChild(currentPop);
            });
          } else {
            document.body.removeChild(modalContainer!);
            document.body.removeChild(currentPop);
          }
        }
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
  title: string,
  content: ReactNode,
  onOk: (() => void | Promise<unknown>) | undefined = undefined,
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
      title={title}
      okText={okText}
      showClose={false}
      onCancel={() => {
        document.body.removeChild(modalContainer!);
        document.body.removeChild(currentPop);
        onCancel && onCancel();
      }}
      cancelText={cancelText}
      modalRef={(r: any) => {
        currentPop = r;
      }}
      onOk={() => {
        if (onOk) {
          const loadingPromise = onOk();
          if (typeof loadingPromise === 'object') {
            modalSetIsLoading(true);
            (loadingPromise as Promise<unknown>).then(() => {
              document.body.removeChild(modalContainer!);
              document.body.removeChild(currentPop);
              modalSetIsLoading(false);
            });
          } else {
            document.body.removeChild(modalContainer!);
            document.body.removeChild(currentPop);
          }
        }
      }}
      visible
    >
      {content}
    </Modal>,
    modalContainer
  );
};

export { Modal };
