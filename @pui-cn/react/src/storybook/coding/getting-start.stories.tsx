/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../..'
import './doc.scss'

const GettingStart = () => (
  <div className="custom-doc">
    <h1>Getting Start</h1>

    <div>Require node 16+ </div>
    <br />

    <div>Create Project via Vite</div>
    <div className="cmd">npm create vite@latest</div>
    <br />
    <div>Install Dependencies</div>
    <div className="cmd">npm install @pui-cn/react</div>
    <br />
    <div>
      Import component and happy coding. (Porsche font, themes setup
      automatically)
    </div>
    <div className="code">
      import {'{'}Form, Input, Button{'}'} from '@pui-cn/react';
    </div>
    <br />
  </div>
)

export default {
  title: 'Coding/Getting Start',
  parameters: {
    docs: {
      page: GettingStart
    }
  }
}

export const GettingStartStoryBook = () => {
  return <div>-</div>
}

GettingStartStoryBook.storyName = 'GettingStart'
