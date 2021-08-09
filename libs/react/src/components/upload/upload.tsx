import React, { ChangeEvent, FC, useRef, useState } from "react";
import axios from 'axios'
import classnames from 'classnames'
import { IconUpload, IconInbox, IconPlus } from '@pui/icons'
import { Modal } from '../modal/modal'
import { Button } from '../index'
import UploadList from "./uploadList/index";
import Dragger from "./dragger";
import './upload.scss';

import {
  UploadFile,
  UploadLocale,
  UploadListType,
  ShowUploadListInterface
} from './interface';
export interface UploadProps {
  action: string;
  count?: number;
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: UploadFile) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: UploadFile) => void;
  onRemove?: (file: UploadFile) => void;
  onPreview?: (file: UploadFile) => void;
  headers?: { [key: string]: any };
  name?: string;
  locale?: UploadLocale;
  data?: { [key: string]: any };
  accept?: string;
  multiple?: boolean;
  tip?: Node | string;
  drag?: boolean;
  disabled?: boolean;
  showRemoveIcon?: boolean;
  showDownloadIcon?: boolean;
  showPreviewIcon?: boolean;
  listType?: UploadListType;
  className?: string;
  isImageUrl?: (file: UploadFile) => boolean;
}

const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    count,
    tip,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    onPreview,
    disabled,
    name,
    locale,
    headers,
    data,
    accept,
    multiple,
    drag,
    children,
    listType,
    className,
    isImageUrl

  } = props;

  const fileInput = useRef<HTMLInputElement>(null);
  // 存储上传过的file
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
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
  const handleRemove = (file: UploadFile) => {
    setFileList(prevFile => prevFile.filter(item => item.uid !== file.uid))
    onRemove && onRemove(file);
  }
  const postFile = (file: File) => {
    let baseFile: UploadFile = {
      uid: Math.random().toString().replace(/0./, ''),
      status: 'uploading',
      name: file.name,
      size: file.size,
      percent: 0,
      originFileObj: file
    }
    setFileList(prevList => {
      return [...prevList, baseFile]
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
        baseFile = { ...baseFile, status: 'uploading', percent: percentage };
        updateFileList(baseFile, { status: 'uploading', percent: percentage });
        onProgress && onProgress(percentage, file);
      }
    }).then(res => {
      updateFileList(baseFile, { status: 'success', response: res.data });
      onSuccess && onSuccess(res.data, { ...baseFile, status: 'success', response: res.data, percent: 100 });
      onChange && onChange({ ...baseFile, status: 'success', response: res.data, percent: 100 });
    }).catch(err => {
      updateFileList(baseFile, { status: 'error', response: err });
      onError && onError(err, file)
      onChange && onChange({ ...baseFile, status: 'error', response: err });
    })
  }

  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handlePreview = async (file: UploadFile) => {
    setPreviewVisible(true);

    if (!file.url && !file.preview && file.originFileObj) {
      file.preview = await getBase64(file.originFileObj) as string;
      setPreviewImage(file.preview);
    } else {
      file.url && setPreviewImage(file.url);
      file.preview && setPreviewImage(file.preview);
    }
    let urlName = '';
    if (file.url) {
      urlName = file.url.substring(file.url.lastIndexOf('/') + 1)
    }
    setPreviewTitle(file.name || urlName);
    onPreview && onPreview(file);
  }
  const handleCancel = () => setPreviewVisible(false);
  const { showRemoveIcon, showPreviewIcon, showDownloadIcon, removeIcon } = {} as ShowUploadListInterface;

  const prefixCls = 'pui-upload';

  const uploadButton = (
    <div className={classnames(`${prefixCls}-container`, { [`${prefixCls}-drag-container`]: drag })}>
      <div onClick={handleClick} className={classnames(`${prefixCls}-field`, { [`${prefixCls}-drag-field`]: drag })}>
        {
          drag ?
            <Dragger onFile={files => uploadFiles(files)}>
              {children || <div className='pui-upload-btn pui-upload-drag-btn'>
                <IconInbox /> <br />
                点击或拖拽上传
              </div>}
            </Dragger> :
            (
              listType === 'picture-card' ? (count as number) > fileList.length && <div className='pui-upload-btn-picture-card'>
                {children || <span>
                  <IconPlus />
                  <div>Upload</div>
                </span>}
              </div> :
                <div className='pui-upload-btn'>
                  {
                    children ||
                    <Button type="default" icon={IconUpload}>添加文件</Button>
                  }
                </div>
            )
        }
      </div>

      {tip && <div className='pui-upload-tip'>{tip}</div>}
      <input type="file"
        className='pui-file-input'
        style={{ display: 'none' }}
        ref={fileInput}
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
      />
    </div>
  );

  const renderUploadList = (button?: React.ReactNode) => (
    <>
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
        onPreview={handlePreview}
        listType={listType}
        showRemoveIcon={!disabled && showRemoveIcon}
        showPreviewIcon={showPreviewIcon}
        showDownloadIcon={showDownloadIcon}
        removeIcon={removeIcon}
        isImageUrl={isImageUrl}
        // downloadIcon={downloadIcon}
        appendAction={button}
        locale={locale || {}}
      />
      <Modal
        visible={previewVisible}
        title={previewTitle}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  )


  if (listType === 'picture-card') {
    return (
      <div className={classnames(prefixCls, className, { [`${prefixCls}-${listType}`]: listType })}>
        {renderUploadList(uploadButton)}
      </div>
    );
  }

  return (
    <div className={classnames(prefixCls, className, { [`${prefixCls}-${listType}`]: listType })}>
      {uploadButton}
      {renderUploadList()}
    </div>
  );






  return (
    <div className={classnames(prefixCls, className, { [`${prefixCls}-${listType}`]: listType })}>

      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
        onPreview={handlePreview}
        listType={listType}
        showRemoveIcon={!disabled && showRemoveIcon}
        showPreviewIcon={showPreviewIcon}
        showDownloadIcon={showDownloadIcon}
        removeIcon={removeIcon}
        isImageUrl={isImageUrl}
        // downloadIcon={downloadIcon}
        locale={locale || {}}
      />
      <Modal
        visible={previewVisible}
        title={previewTitle}
        // footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div >
  )
}
const defaultLocale = {
  uploading: 'Uploading...',
  removeFile: 'Remove file',
  uploadError: 'Upload error',
  previewFile: 'Preview file',
  downloadFile: 'Download file',
}

Upload.defaultProps = {
  listType: 'text' as UploadListType,
  showRemoveIcon: true,
  showDownloadIcon: false,
  showPreviewIcon: true,
  locale: defaultLocale,
  count: 1,
}
export { Upload };