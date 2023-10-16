/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Markdown } from '@storybook/blocks'
import '../..'
import './doc.scss'
import './change-logs.scss'
// @ts-ignore
import ChangeLog from '../../../CHANGELOG.md?raw'

// const md = new MarkdownIt()

const ChangeLogs = () => (
  <div className="custom-doc">
    <Markdown>{ChangeLog}</Markdown>
  </div>
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
