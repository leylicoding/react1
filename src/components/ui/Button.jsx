import './Button.css'

import React from 'react'

function Button({ text }) {
  return (
        <button className='Button'>
           Button {text}
        </button>
  )
}

export default Button