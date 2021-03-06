// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Meta, Story } from '@storybook/react/types-6-0'

import type { ButtonProps } from './Button'
import { Button } from './Button'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button hoge',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
