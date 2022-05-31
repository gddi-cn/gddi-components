import React from 'react'
import { Story, Meta } from '@storybook/react'

import {
  ModelSizeViz2D,
  ModelSizeViz2DProps,
  CalNNSizeFunc,
} from './../components'

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
  const MIN_NETWORK_N = 30
  const MAX_NETWORK_N = 600
  const FPS_MAX = 30 * 32
  const k = (MIN_NETWORK_N - MAX_NETWORK_N) / (FPS_MAX - 1)
  const b = MAX_NETWORK_N - k
  const fps = c * f
  return Math.floor(k * fps + b)
}

export const calNNSizeFunc: CalNNSizeFunc = (
  numChannels: number,
  fpsPerChannel: number
) => {
  const FPS_MAX = 30 * 32
  const MIN_LAYER_WIDTH = 80
  const MAX_LAYER_WIDTH = 300
  const MIN_NUM_LAYER = 4
  const MAX_NUM_LAYER = 7

  const fps = numChannels * fpsPerChannel
  const kL = (MIN_NUM_LAYER - MAX_NUM_LAYER) / (FPS_MAX - 1)
  const bL = MAX_NUM_LAYER - kL
  const kW = (MIN_LAYER_WIDTH - MAX_LAYER_WIDTH) / (FPS_MAX - 1)
  const bW = MAX_LAYER_WIDTH - kW
  const numLayers = Math.round(kL * fps + bL)
  const layerWidth = Math.round(kW * fps + bW)
  return { layerWidth, numLayers }
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
