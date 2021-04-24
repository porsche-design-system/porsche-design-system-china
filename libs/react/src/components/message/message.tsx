import React, { ReactNode, useMemo, useState, useEffect, useCallback } from 'react';
import ReactDom, { unmountComponentAtNode } from 'react-dom';
import { IconInformation2, IconClose, IconCorrect, IconWarning2, IconError } from '@pui/icons';
import './message.scss';
export type MessageType = 'info' | 'success' | 'error' | 'warning';

export interface MessageConfig {
  /** 挂载点*/
  mount: HTMLElement;

  /** 动画延迟时间 */
  delay: number;

  /** 结束后回调 */
  callback: any;

  /** 底色*/
  background: string;

  /** 文字颜色*/
  color: string;

  /** 是否手动关闭 */
  closable: boolean;
}

const defaultConfig: MessageConfig = {
  mount: document.body,
  delay: 2000,
  callback: null,
  closable: false,
  background: '',
  color: ''
};

let wrap: HTMLElement;
export const createMessage = (type: MessageType) => {
  return (content: ReactNode, config: Partial<MessageConfig> = {}) => {
    const fconfig = { ...defaultConfig, ...config };
    if (!wrap) {
      //如果有的话，说明已经调用过这个函数了，这个空div就可以一直复用
      wrap = document.createElement('div');
      wrap.style.cssText = `line-height: 1.5;
      text-align: center;
      color: #333;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
      position: fixed;
      z-index: 100000;
      width: 100%;
      top: 16px;
      left: 0;`;
      if (wrap) {
        fconfig.mount.appendChild(wrap); //挂body上
      }
    }

    const div = document.createElement('div');
    wrap.appendChild(div);
    ReactDom.render(
      <MessageBox
        rootDom={wrap}
        parentDom={div}
        content={content}
        fconfig={fconfig}
        iconType={type}
      />,
      div
    );
  };
};

export type MessageProps = {
  rootDom: HTMLElement; //这个用来干掉parentDom 这个可以常驻
  parentDom: Element | DocumentFragment; //这个是挂载点 要unmount卸载 完毕后卸载挂载点 注意！一共2步卸载，别漏了
  content: ReactNode;
  fconfig: MessageConfig;
  iconType: MessageType;
};

export function MessageBox(props: MessageProps) {
  const { rootDom, parentDom, content, fconfig, iconType } = props;
  const [close, setClose] = useState(false);

  const unmount = useMemo(() => {
    return () => {
      if (parentDom && rootDom) {
        unmountComponentAtNode(parentDom);
        rootDom.removeChild(parentDom);
      }
    };
  }, [parentDom, rootDom]);

  useEffect(() => {
    let timer1: number;
    let timer2: number;
    if (!fconfig.closable) {
      // 自动关闭
      let closeStart = fconfig.delay - 0.2 * 1000;
      // 关闭动画
      timer1 = window.setTimeout(
        () => {
          setClose(true);
        },
        closeStart > 0 ? closeStart : 0
      );
      // 卸载
      timer2 = window.setTimeout(() => {
        setClose(false);
        unmount();
        if (fconfig.callback) {
          fconfig.callback();
        }
      }, fconfig.delay);
    }
    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
    };
  }, [unmount, fconfig]);

  // 手动卸载
  const handleClose = useCallback(() => {
    if (fconfig.closable) {
      setClose(true);
      setTimeout(() => {
        unmount();
        if (fconfig.callback) {
          fconfig.callback();
        }
      }, 200);
    }
  }, [fconfig, unmount]);

  return (
    <div className={`pui-message  ${close ? 'close' : 'open'}-animate`}>
      <span className={`message-text ${iconType}`}>
        {props.iconType === 'info' && <IconInformation2 />}
        {props.iconType === 'success' && <IconCorrect />}
        {props.iconType === 'warning' && <IconWarning2 />}
        {props.iconType === 'error' && <IconError />}
        <span className="text-content">{content}</span>
        {fconfig.closable && <IconClose onClick={handleClose} />}
      </span>
    </div>
  );
}

export const Message = {
  pop(type: MessageType, content: ReactNode, config: Partial<MessageConfig> = {}) {
    createMessage(type)(content, config);
  }
};
