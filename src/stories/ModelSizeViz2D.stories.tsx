import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ModelSizeViz2D, ModelSizeViz2DProps } from './../components'

export default {
  title: 'Example/ModelSizeViz2D',
  component: ModelSizeViz2D,
  argTypes: {
    channels: { control: { type: 'range', min: 1, max: 32, step: 1 } },
    fpsPerChannel: { control: { type: 'range', min: 1, max: 30, step: 1 } },
  },
} as Meta<typeof ModelSizeViz2D>

const Template: Story<ModelSizeViz2DProps> = (args) => (
  <ModelSizeViz2D {...args} />
)

const calNetworkSizeFunc = (c: number, f: number): number => {
  return 200
}

const calNNSizeFunc = (c: number, f: number) => {
  return {
    layerWidth: 300,
    numLayers: 6,
  }
}

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  width: 600,
  height: 600,
  channels: 8,
  fpsPerChannel: 15,
  backgroundColor: '#ffffff',
  linkColor: undefined,
  calNetworksize: calNetworkSizeFunc,
  calNNSize: calNNSizeFunc,
} as ModelSizeViz2DProps

BasicUsage.storyName = 'ModelSizeViz2D'
