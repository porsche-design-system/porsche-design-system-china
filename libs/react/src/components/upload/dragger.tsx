import React, { DragEvent, FC, useState } from 'react'
import classnames from 'classnames'

interface DraggerProps {
  onFile: (files: FileList) => void
}

const Dragger: FC<DraggerProps> = props => {
  const { onFile, children } = props

  const [dragOver, setDragOver] = useState(false)
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  return (
    <div
      className={classnames('pui-upload-drag', { 'is-dragOver': dragOver })}
      onDragOver={e => handleDrag(e, true)}
      onDragLeave={e => handleDrag(e, false)}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}

export default Dragger
