import React from 'react'
import './image.css'

export default function Image(props) {
  
  return (
    <div className='image-containers'>
      <a href={props.image}>Image link</a>
      <img className='images-for-list' src={props.image} alt="" />
      <button className='delete-button' onClick={props.deleteImageFromDatabase}> Delete image </button>
    </div>
  )
}
