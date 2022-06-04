import React from 'react'
import { LoadingIcon } from '../..'
import './loading-icon.stories.scss'

export default {
  title: 'Feedback/LoadingIcon',
  component: LoadingIcon
}

export const LoadingIconStoryBook = () => {
  return (
    <div>
      <LoadingIcon />
      <br />
      <br />
      <LoadingIcon size={30} />
      <br />
      <br />
      <LoadingIcon size={50} text="加载中" />
    </div>
  )
}
