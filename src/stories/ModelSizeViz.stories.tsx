import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ModelSizeViz, ModelSizeVizProps } from './../components'

export default {
  title: 'Example/ModelSizeViz',
  component: ModelSizeViz,
  argTypes: {},
} as Meta<typeof ModelSizeViz>

const Template: Story<ModelSizeVizProps> = (args) => <ModelSizeViz {...args} />

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  width: 600,
  height: 600,
  size: 1000,
  threeD: false,
  backgroundColor: '#edebeb',
} as ModelSizeVizProps

BasicUsage.storyName = 'ModelSizeViz'
