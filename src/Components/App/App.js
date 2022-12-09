import './App.css';
import { useState } from 'react'
import ImageList from '../ImageList';
import UseFetch from '../UseFetch';
import { createContext } from "react";

export const ImageContext = createContext(null);
function App() {
  // state that holds the array of fave images 
  const [image, setImage] = useState([])
  const [data, fetchRandomImage] = UseFetch(`https://source.unsplash.com/random`);

  const url = "http://localhost:3001/images"

  async function addToDatabase() {
    
    const imageToAdd = {
      image_link: data
    }

    const addImage = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(imageToAdd)
    })
  }

  async function getImagesFromDatabase() {
    const response = await fetch(url);
    const allImageData = await response.json()
    const allImages = allImageData.payload
    console.log(allImages)
    setImage(allImages)
  }

  return (
    <ImageContext.Provider
      value={image}
      >
    <div className="App">

      <h1>Imagorium</h1>

      <div className='fetch-image'>
        <button className='buttons' onClick={fetchRandomImage}>Click me for a new pic</button>
        <img id="img" src={data} alt=""></img>
      </div>

      <div className='db-buttons'>
        <button className='buttons' onClick={addToDatabase}>Add to my favourites</button>
        <button className='buttons' onClick={getImagesFromDatabase}>Display my favourites</button>
      </div>

      <ImageList/>

    </div>
    </ImageContext.Provider>
  );
}

export default App;
