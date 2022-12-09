import React from 'react'
import Image from '../Image'
import "./imagelist.css"

// take in state and map out Image components 

export default function ImageList(props) {
  // console.log(props)
  return (
    <div className='image-list'>
      {props.image.map((item) => {
        return (<Image key={item.id} image={item.image_link} />)
      })}
    </div>
  )
}

