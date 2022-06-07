import React, { DragEvent, FC, ReactNode, useState } from 'react'
import classnames from 'classnames'

interface DraggerProps {
  onFile: (files: FileList) => void
  disabled?: boolean
  children?: ReactNode
}

const Dragger: FC<DraggerProps> = props => {
  const { onFile, children, disabled } = props

  const [dragOver, setDragOver] = useState(false)
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    if (disabled) return
    e.preventDefault()
    setDragOver(over)
  }
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    if (disabled) return
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
