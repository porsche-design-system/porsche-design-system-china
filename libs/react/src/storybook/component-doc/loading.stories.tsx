import React from 'react'
import { Loading } from '../..'
import './loading.stories.scss'

export default {
  title: 'Feedback/Loading',
  component: Loading
}

export const LoadingStoryBook = () => {
  return (
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <Loading visible />
    </div>
  )
}
