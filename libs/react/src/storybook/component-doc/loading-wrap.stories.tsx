import React, { useState } from 'react'
import { LoadingWrap, Button } from '../..'
import './loading-wrap.stories.scss'

export default {
  title: 'Feedback/LoadingWrap',
  component: LoadingWrap
}

export const LoadingWrapStoryBook = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <LoadingWrap visible={show} text="加载中">
        <div className="para">
          There were little things that she simply could not stand. The sound of
          someone tapping their nails on the table. A person chewing with their
          mouth open. Another human imposing themselves into her space. She
          couldn stand any of these things, but none of them compared to the
          number one thing she couldn stand which topped all of them combined.
        </div>
      </LoadingWrap>
      <Button
        type="primary"
        onClick={() => {
          setShow(!show)
        }}
      >
        显示
      </Button>
      <br />
      <br />
    </div>
  )
}

LoadingWrapStoryBook.storyName = 'Loading Wrap'

export const LoadingWrapStoryBook1 = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <LoadingWrap visible={show} blurContent>
        <div className="para">
          Thee were little things that she simply could not stand. The sound of
          someone tapping their nails on the table. A person chewing with their
          mouth open. Another human imposing themselves into her space. She
          couldn stand any of these things, but none of them compared to the
          number one thing she couldn stand which topped all of them combined.
        </div>
      </LoadingWrap>
      <Button
        type="primary"
        onClick={() => {
          setShow(!show)
        }}
      >
        显示[内容模糊]
      </Button>
      <br />
      <br />
    </div>
  )
}

LoadingWrapStoryBook1.storyName = 'Loading Wrap Vague'

export const LoadingWrapStoryBook2 = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <LoadingWrap visible={show} size={30}>
        <div className="para">
          Thee were little things that she simply could not stand. The sound of
          someone tapping their nails on the table. A person chewing with their
          mouth open. Another human imposing themselves into her space. She
          couldn stand any of these things, but none of them compared to the
          number one thing she couldn stand which topped all of them combined.
        </div>
      </LoadingWrap>
      <Button
        type="primary"
        onClick={() => {
          setShow(!show)
        }}
      >
        显示[小旋转图标]
      </Button>
      <br />
      <br />
    </div>
  )
}

LoadingWrapStoryBook2.storyName = 'Loading Wrap Small'

export const LoadingWrapStoryBook3 = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <LoadingWrap visible={show} size={60}>
        <div className="para">
          Thee were little things that she simply could not stand. The sound of
          someone tapping their nails on the table. A person chewing with their
          mouth open. Another human imposing themselves into her space. She
          couldn stand any of these things, but none of them compared to the
          number one thing she couldn stand which topped all of them combined.
        </div>
      </LoadingWrap>
      <Button
        type="primary"
        onClick={() => {
          setShow(!show)
        }}
      >
        显示[大旋转图标]
      </Button>
      <br />
      <br />
    </div>
  )
}

LoadingWrapStoryBook3.storyName = 'Loading Wrap Big'
