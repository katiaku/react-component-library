import React from "react"
import Input from './Input'

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
}

export const Small = () => <Input size='small' placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' />
