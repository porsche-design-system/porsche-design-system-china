import React from 'react'
import * as Icons from '@pui/icons'

import './icons.stories.scss'

export default {
  title: 'Foundation/Icons'
}

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export const IconsStoryBook = () => {
  return (
    <div>
      <div>
        <b>Total: {Object.keys(Icons).length}</b>
      </div>
      {Object.keys(Icons).map(icon => {
        const IconComponent = Icons[icon]
        if (icon === 'default' || icon === 'createFromIconfontCN') {
          return null
        }
        return (
          <div
            key={icon}
            className="icon-block"
            onClick={() => {
              const text = '<' + icon + ' />'
              copyToClipboard(text)
              // eslint-disable-next-line no-alert
              alert(text + ' copied')
            }}
          >
            <IconComponent style={{ fontSize: 30 }} size={50} />
            <span className="icon-text">{icon}</span>
          </div>
        )
      })}
    </div>
  )
}

IconsStoryBook.storyName = 'Icons'
