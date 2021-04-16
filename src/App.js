import { Fragment, useState, useEffect } from 'react';
import axios from "axios"
import Header from "./components/header/Header.jsx"
import './App.css';

const App = () => {
  const [inputData, setInputData] = useState(null)

  const handleSearch = async () => {
    if (inputData) {
        const response = await fetch(`http://www.omdbapi.com/?apikey=922db138&t=${inputData}`)
        const data = await response.json()
        console.log(data)
      }
  } 

  return(
    <Fragment>
      <Header />
      <div id="inputBorder">
        <input onChange={e => setInputData(e.target.value)} />
        <button onClick={() => handleSearch()} >search</button>
      </div>
    </Fragment>  
  )
}

export default App;
