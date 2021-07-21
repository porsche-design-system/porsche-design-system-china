import React, { FC, } from "react";
import { Progress } from '../index'
import { UploadedFile } from "./upload";
import {
  IconDelete,
  IconAttachment
} from '@pui/icons'

interface UploadListProps {
  fileList: UploadedFile[];
  onRemove: (file: UploadedFile) => void
}

const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove
  } = props;

  return (
    <ul className='pui-upload-list'>
      {
        fileList.map(file => {
          console.log(file)
          return (
            <li className={`pui-upload-list-item pui-upload-list-item-${file.status}`} key={file.uid}>
              <div className='pui-upload-list-fileInfo'>
                <IconAttachment />
                <span className='pui-upload-list-fileName'>
                  {file.name}
                </span>
                <span className='pui-upload-list-icon'>
                  {
                    file.status === 'error' && <IconDelete />
                  }
                  <IconDelete onClick={() => onRemove(file)} className='delete-actions' />
                </span>
              </div>
              {
                file.status === 'uploading' &&
                <Progress percent={file.percent || 0} />
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default UploadList