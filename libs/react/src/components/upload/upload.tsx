import React, { ChangeEvent, FC, useRef, useState } from "react";
import axios from 'axios'
import classnames from 'classnames'
import { IconUpload, IconInbox } from '@pui/icons'
import { Button } from '../index'
import UploadList from "./uploadList";
import Dragger from "./dragger";
import './upload.scss';

export interface UploadProps {
  action: string;
  defaultFileList?: UploadedFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: UploadedFile) => void;
  onRemove?: (file: UploadedFile) => void;
  headers?: { [key: string]: any };
  name?: string;
  data?: { [key: string]: any };
  accept?: string;
  multiple?: boolean;
  tip?: Node | string;
  drag?: boolean;
  listType?: string;
  className?: string;
}
type UploadFileStatus = "uploading" | "success" | "error"

export interface UploadedFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  originFileObj?: File;
  response?: any;
  error?: any;
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    tip,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    name,
    headers,
    data,
    accept,
    multiple,
    drag,
    children,
    className
  } = props;

  const fileInput = useRef<HTMLInputElement>(null);
  // 存储上传过的file
  const [fileList, setFileList] = useState<UploadedFile[]>(defaultFileList || []);

  const updateFileList = (updateFile: UploadedFile, updateObj: Partial<UploadedFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }    // 如果遇到同一个uid的file，说明是要更新的这个file。比如在上传的onUploadProgress中。
        } else {
          return file;                        // 否则是以前的的file，直接返回
        }
      })
    })
  }

  const handleClick = () => {
    if (fileInput.current) fileInput.current.click();
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    uploadFiles(files);
    if (fileInput.current) fileInput.current.value = '';
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach(file => {
      if (accept) {
        const acceptList = accept.replace(/\s/g, '').split(',');
        const name = file.name.split('.');
        const type = name[name.length - 1];
        if (!(acceptList.includes(type) || acceptList.includes(file.type))) return;
      }

      if (!beforeUpload) {
        postFile(file);
      } else {
        const result = beforeUpload(file);
        if (result) {
          if (result instanceof Promise) {
            result.then(processFile => {
              postFile(processFile);
            })
          } else {
            postFile(file);
          }
        }
      }
    })
  }
  const handleRemove = (file: UploadedFile) => {
    setFileList(prevFile => prevFile.filter(item => item.uid !== file.uid))
    onRemove && onRemove(file);
  }
  const postFile = (file: File) => {
    let _file: UploadedFile = {
      uid: Math.random().toString().replace(/0./, ''),
      status: 'uploading',
      name: file.name,
      size: file.size,
      percent: 0,
      originFileObj: file
    }
    setFileList(prevList => {
      return [...prevList, _file]
    });
    const formData = new FormData();
    formData.append(name || 'file', file);

    data && Object.keys(data).forEach(key => {
      formData.append(key, data[key])
    })

    axios.post(action, formData, {
      headers: {
        "Content-Type": 'multipart/form-data',
        ...headers
      },
      onUploadProgress: (e) => {
        let percentage = Math.round(e.loaded * 100 / e.total) || 0;
        _file = { ..._file, status: 'uploading', percent: percentage };
        updateFileList(_file, { status: 'uploading', percent: percentage });
        onProgress && onProgress(percentage, file);
      }
    }).then(res => {
      updateFileList(_file, { status: 'success', response: res.data });
      onSuccess && onSuccess(res.data, file);
      onChange && onChange({ ..._file, status: 'success', response: res.data, percent: 100 });
    }).catch(err => {
      updateFileList(_file, { status: 'error', response: err });
      onError && onError(err, file)
      onChange && onChange({ ..._file, status: 'error', response: err });
    })

  }
  const prefixCls = 'pui-upload'
  return (
    <div className={classnames(`${prefixCls}`, className)}>
      <div className='pui-upload-container'>
        <div onClick={handleClick} className={classnames(`${prefixCls}-field`, { [`${prefixCls}-drag-field`]: drag })}>
          {
            drag ?
              <Dragger onFile={files => uploadFiles(files)}>
                {children || <div className='pui-upload-text pui-upload-drag-text'>
                  <IconInbox /> <br />
                  点击或拖拽上传
                </div>}
              </Dragger> :
              children || <div className='pui-upload-text'>
                <Button type="default" icon={IconUpload} >添加文件</Button>
              </div>
          }
        </div>
        <div className='pui-upload-tip'>
          {tip}
        </div>
        <input type="file"
          className='pui-file-input'
          style={{ display: 'none' }}
          ref={fileInput}
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
        />
      </div>
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />

    </div>
  )
}
