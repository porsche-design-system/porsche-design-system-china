/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../..'
import './doc.scss'

// @ts-ignore
import Develop from './testing-pui.md'

const TestingPUI = () => (
  <div className="custom-doc">
    <Develop />
  </div>
)

export default {
  title: 'Coding/Testing PUI',
  parameters: {
    docs: {
      page: TestingPUI
    }
  }
}

export const TestingPUIStoryBook = () => {
  return <div>-</div>
}

TestingPUIStoryBook.storyName = 'Testing PUI'
