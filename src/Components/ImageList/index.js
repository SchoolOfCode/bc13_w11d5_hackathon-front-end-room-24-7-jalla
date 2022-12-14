import React from 'react'
import Image from '../Image'
import "./imagelist.css"
import { ImageContext } from '../App/App'
import { useContext } from 'react'

export default function ImageList(props) {
  
  const image = useContext(ImageContext)

  return (
    <div className='image-list'>
      {image.map((item) => {
        return (<Image key={item.id} image={item.image_link} deleteImageFromDatabase={() => props.deleteImageFromDatabase(item.id)}/>)
      })}
    </div>
  )
}

