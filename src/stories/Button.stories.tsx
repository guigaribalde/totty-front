import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const Primary = Template.bind({})
