import React from 'react'
import { PorscheLogo } from '../..'

export default {
  title: 'Foundation/PorscheLogo',
  component: PorscheLogo
}

export const PorscheLogoStoryBook = () => {
  return (
    <div>
      <PorscheLogo size={200} />
    </div>
  )
}

PorscheLogoStoryBook.storyName = 'PorscheLogo'
