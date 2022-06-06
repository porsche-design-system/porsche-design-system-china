import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const B = () => {
  return <button>button</button>
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: B,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof B>

export const Primary = () => {
  return <B />
}
