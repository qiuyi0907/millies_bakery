import React from 'react'
import './button.styles.scss'

const Button = ({ content, ...otherProps }) => {
  return (
    <button className='button' {...otherProps}>{content}</button>
  )
}

export default Button