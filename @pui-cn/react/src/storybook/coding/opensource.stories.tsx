/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../..'
import './doc.scss'

import { notice } from './notice'

const OpenSource = () => {
  return <div className="pre-text">{notice}</div>
}

export default {
  title: 'Coding/Open Source Software Notice',
  parameters: {
    docs: {
      page: OpenSource
    }
  }
}

export const OpenSourceStoryBook = () => {
  return <div>-</div>
}

OpenSourceStoryBook.storyName = 'Open Source Software Notice'
