import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ModelSizeViz3D, ModelSizeViz3DProps } from './../components'

export default {
  title: 'Example/ModelSizeViz3D',
  component: ModelSizeViz3D,
  argTypes: {
    channels: { control: { type: 'range', min: 1, max: 32, step: 1 } },
    fpsPerChannel: { control: { type: 'range', min: 1, max: 30, step: 1 } },
  },
} as Meta<typeof ModelSizeViz3D>

const Template: Story<ModelSizeViz3DProps> = (args) => (
  <ModelSizeViz3D {...args} />
)

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  width: 600,
  height: 600,
  channels: 8,
  fpsPerChannel: 15,
  backgroundColor: '#ffffff',
  linkColor: undefined,
} as ModelSizeViz3DProps

BasicUsage.storyName = 'ModelSizeViz3D'
