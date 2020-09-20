import React from 'react'
import './Button.css'

const Button = ({ className, text, type, onClick }) => {
    return (
        <button className={className} type={type} onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}

export default Button
