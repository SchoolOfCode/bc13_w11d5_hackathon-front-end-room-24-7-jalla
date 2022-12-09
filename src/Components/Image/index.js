import React from 'react'
import './image.css'
import { ImageContext } from '../App/App'
import { useContext } from 'react'

export default function Image(props) {
  //const image = useContext(ImageContext)
  //console.log(image)
  return (
    
    <div>
      <img className='images-for-list' src={props.image} alt="" />
    </div>
  )
}
