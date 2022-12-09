import React from 'react'
import Image from '../Image'
import "./imagelist.css"
import { ImageContext } from '../App/App'
import { useContext } from 'react'

// take in state and map out Image components 

export default function ImageList() {
  
  const image = useContext(ImageContext)
  // console.log(image)
  return (
    <div className='image-list'>
      {image.map((item) => {
        
        return (<Image key={item.id} image={item.image_link} />)
      })}
    </div>
  )
}

