/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './doc.scss'
import './change-logs.scss'
// @ts-ignore
import changeLog from '../../../CHANGELOG.md'
// @ts-ignore
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt()

const ChangeLogs = () => (
  <div
    className="custom-doc"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: md.render(changeLog) }}
  />
)

export default {
  title: 'Coding/Change Logs',
  parameters: {
    docs: {
      page: ChangeLogs
    }
  }
}

export const GettingStartStoryBook = () => {
  return <div>-</div>
}

GettingStartStoryBook.storyName = 'GettingStart'
