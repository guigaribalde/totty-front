import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button as Btn } from '../components/Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button',
  component: Btn,
} as ComponentMeta<typeof Btn>

const Template: ComponentStory<typeof Btn> = (props) => <Btn {...props} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  variant: 'solid',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  variant: 'outline',
}
