import React, { FC, } from "react";
import { Progress } from '../index'
// import { UploadedFile } from "./file-upload.tsx";
import {
  IconDelete,
  IconRefresh,
  IconCheck,
  IconClose
} from '@pui/icons'

interface UploadListProps {
  fileList: File[];
  onRemove: (file: File) => void
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
          return (
            <li className='pui-upload-list-item' key={file.uid}>
              <div className='pui-upload-list-fileInfo'>
                <span className={`pui-upload-list-fileName fileName_${file.status}`}>
                  {file.name}
                </span>
                <span className='pui-upload-list-fileStatus'>
                  {
                    file.status === 'uploading' && <IconRefresh />
                  }
                  {
                    file.status === 'success' && <IconCheck />
                  }
                  {
                    file.status === 'error' && <IconClose />
                  }
                  <IconDelete onClick={() => onRemove(file)} />
                </span>

              </div>
              {
                file.status === 'uploading' &&
                <Progress percent={file.percent} />
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default UploadList