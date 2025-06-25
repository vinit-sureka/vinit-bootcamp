import React from 'react'
import './styles/Button.css'

const Button = ({
    type='feild',
    text='Button',
    onClick=()=>{console.log('clicked!')}
}) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}> {text}</button>
  )
}

export default Button