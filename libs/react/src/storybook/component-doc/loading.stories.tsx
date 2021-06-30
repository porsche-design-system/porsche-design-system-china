import React, { useState } from 'react'
import { Loading, Button } from '../..'
import './loading.stories.scss'

export default {
  title: 'Feedback/Loading',
  component: Loading
}

export const LoadingStoryBook = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setShow(!show)
        }}
      >
        显示
      </Button>
      <Loading visible={show} text="加载中" />
    </div>
  )
}
