import React from "react"
import Button from "./Button"
import { fn } from '@storybook/test'

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: 'Button',
    },
    args: { onClick: fn() },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Primary'
}

// export const LongPrimary = Template.bind({})
// LongPrimary.args = {
//     ...Primary.args,
//     children: 'Long Primary'
// }

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary'
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    variant: 'danger',
    children: 'Danger'
}
