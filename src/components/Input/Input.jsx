import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export default function Input(props) {
    const { size = 'medium', ...rest } = props;
    return (
        <input
            className={`input ${size}`}
            {... rest}
        />
    )
}

Input.propTypes = {
    size: PropTypes.string,
};
