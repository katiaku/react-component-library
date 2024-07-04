import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export default function Button(props) {
    const { variant = 'primary', children, ...rest } = props;
    return (
        <button
            type="button"
            className={`button ${variant}`}
            {...rest}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
};
