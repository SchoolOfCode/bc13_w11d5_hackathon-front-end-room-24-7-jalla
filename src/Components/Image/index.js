import React from 'react'
import './image.css'

export default function Image(props) {
  return (
    <div>
      <img className='images-for-list' src={props.image} alt="" />
    </div>
  )
}
