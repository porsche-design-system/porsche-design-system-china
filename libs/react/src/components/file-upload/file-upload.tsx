import React, { ChangeEvent, FC, useRef, useState } from "react";
import axios from 'axios'
import { IconUpload } from '@pui/icons'
import { Button } from '../index'
import UploadList from "./uploadList";
import './file-upload.scss';

export interface UploadProps {
  action: string;
  initFileList?: UploadedFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadedFile) => void;
}
type UploadFileStatus = "ready" | "uploading" | "success" | "error"

export interface UploadedFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export const FileUpload: FC<UploadProps> = (props) => {
  const {
    action,
    initFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove
  } = props;

  const fileInput = useRef<HTMLInputElement>(null);
  // 存储上传过的file
  const [fileList, setFileList] = useState<UploadedFile[]>(initFileList || []);
  const [count, setCount] = useState(1);

  const updateFileList = (updateFile: UploadedFile, updateObj: Partial<UploadedFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        console.log(file.uid, updateFile.uid)
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
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList([_file, ...fileList]);
    const formData = new FormData();
    formData.append(file.name, file);
    axios.post(action, formData, {
      headers: {
        "Content-Type": 'multipart/form-data'
      },
      onUploadProgress: (e) => {
        let percentage = Math.round(e.loaded * 100 / e.total) || 0;
        console.log(percentage);
        if (percentage < 100) {
          console.log(fileList)
          setFileList([{ ..._file, status: 'uploading', percent: percentage }, ...fileList]);
          // updateFileList(_file, { status: 'uploading', percent: percentage });

          onProgress && onProgress(percentage, file);
        }
      }
    }).then(res => {
      // updateFileList(_file, { status: 'success', response: res.data });
      console.log(fileList)
      setFileList([{ ..._file, status: 'success', response: res.data }, ...fileList]);

      onSuccess && onSuccess(res.data, file);
      onChange && onChange(file);
    }).catch(err => {
      console.error(err);
      // updateFileList(_file, { status: 'error', response: err });
      setFileList([{ ..._file, status: 'error', response: err }, ...fileList]);
      onError && onError(err, file)
      onChange && onChange(file);
    })
  }
  console.log(fileList);
  return (
    <div className='pui-upload'>
      <Button type="primary" onClick={handleClick} icon={IconUpload} >上传</Button>
      <input type="file"
        className='pui-file-input'
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleFileChange} />
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}
