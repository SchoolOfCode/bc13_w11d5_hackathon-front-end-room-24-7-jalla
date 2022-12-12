import './App.css';
import { useState } from 'react'
import ImageList from '../ImageList';
import UseFetch from '../UseFetch';
import { createContext } from "react";

export const ImageContext = createContext(null);

const url = process.env.REACT_APP_BACKEND_URL

function App() {

  const [image, setImage] = useState([])
  const [data, fetchRandomImage] = UseFetch(`https://source.unsplash.com/random`);

  async function addToDatabase() {

    const imageToAdd = {
      image_link: data
    }

    await fetch(`${url}/images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(imageToAdd)
    })
    alert("Image added to favourites!")
  }

  async function getImagesFromDatabase() {
    const response = await fetch(`${url}/images`);
    const allImageData = await response.json()
    const allImages = allImageData.payload
    setImage(allImages)
  }

  async function deleteImageFromDatabase(id) {
    console.log(id)
    for (let i = 0; i < image.length; i++) {
      if (image[i].id === id) {
        await fetch(`${url}/images/${id}`, {
          method: "DELETE"
        })
        const deleted = [...image.slice(0, i), ...image.slice(i + 1)]
        setImage(deleted)
      }
    }
    return
  }

  return (
    <ImageContext.Provider value={image}>
      <div className="App">

        <h1 id='h1-tag'>IMAGORIUM: find your new sreensaver</h1>

        <div className='fetch-image'>
          <button className='buttons' onClick={fetchRandomImage}>Click me for a new pic</button>
          <img id="img" src={data} alt=""></img>
        </div>

        <div className='db-buttons'>
          <button className='buttons' onClick={addToDatabase}>Add to my favourites</button>
          <button className='buttons' onClick={getImagesFromDatabase}>Display my favourites</button>
        </div>

        <ImageList deleteImageFromDatabase={deleteImageFromDatabase} />

      </div>
    </ImageContext.Provider>
  );
}

export default App;
