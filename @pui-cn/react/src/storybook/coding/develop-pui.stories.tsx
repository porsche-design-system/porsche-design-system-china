/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Markdown } from '@storybook/blocks'
import '../..'
import './doc.scss'

// @ts-ignore
import Develop from '../../../README.md?raw'

const DevelopPUI = () => (
  <div className="custom-doc">
    <Markdown>{Develop}</Markdown>
  </div>
)

export default {
  title: 'Coding/Develop PUI',
  parameters: {
    docs: {
      page: DevelopPUI
    }
  }
}

export const GettingStartStoryBook = () => {
  return <div>-</div>
}

GettingStartStoryBook.storyName = 'Develop PUI'
