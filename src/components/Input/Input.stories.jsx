import React from "react"
import Input from './Input'

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: 'Small size',
    },
}

const Template = args => <Input {...args} />

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    placeholder: 'Small size'
}

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    placeholder: 'Medium size'
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    placeholder: 'Large size'
}
