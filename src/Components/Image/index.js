import React from 'react'
import './image.css'

export default function Image(props) {
  
  return (
    <div className='image-containers'>
      <img className='images-for-list' src={props.image} alt="" />
      <button className='delete-button' onClick={props.deleteImageFromDatabase}> Delete image </button>
    </div>
  )
}
