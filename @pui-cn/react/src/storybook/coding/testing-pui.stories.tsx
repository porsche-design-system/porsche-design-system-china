/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Markdown } from '@storybook/blocks'
import '../..'
import './doc.scss'

// @ts-ignore
import Develop from './testing-pui.md?raw'

const TestingPUI = () => (
  <div className="custom-doc">
    <Markdown>{Develop}</Markdown>
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
