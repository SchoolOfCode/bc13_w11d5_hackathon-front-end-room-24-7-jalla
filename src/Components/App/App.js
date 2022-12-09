import './App.css';
import { useState } from 'react'
import ImageList from '../ImageList';
import Dropdown from '../Dropdown';
import UseFetch from '../UseFetch';

function App() {
  // state that holds the array of fave images 
  const [image, setImage] = useState()
  const [category, setCategory] = useState('movie')
  const url = category !== "" ? `https://api.lorem.space/image/${category}?w=150&h=220` : undefined;
  const { data, error } = UseFetch(url);
  
  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div className="App">
      <h1>Imagorium</h1>
      <img src={data} alt=""></img>
      <Dropdown/>
      <ImageList image={image}/>
    </div>
  );
}

export default App;
