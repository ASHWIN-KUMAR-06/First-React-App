import React, { useEffect, useState } from 'react';
import './custom.css';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';



function App() {
  const [result, setResult] = useState({});
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("")


  function onchange(e) {
    setInputValue(e.target.value);
  }
  
  function clicked() {
    setCity(inputValue);
    document.querySelector('input').value = null;
  }


  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d02d86a054ba4b4e737703186aec2670`)
    .then(response=> response.json())
    .then(data=>{
      setResult(data);
    })
  }, [city])





  return (
    <>
      <div className='box'>

        <div className="inputData">
          <input type="text" placeholder='Enter your city name....' className='inputfield' onChange={onchange}  />
          <button className='searchButton' onClick={clicked}  >
            <SearchIcon sx={{fontSize:20}} />
          </button>
        </div>


        <div className='resultData'>

          <div className='city'>
            <h2 className='location'>
              <PersonPinCircleIcon sx={{fontSize:50}} />
              {
                result.message ? result.message : result.name
              }
            </h2>
            <h1 className='temperature'> {
              result.main ? Math.floor(result.main.temp) : ""
            }°celcius </h1>
          </div>

          <div className='otherThings'>
            <div className='max_temp'>
              <p> { result.main ? Math.floor(result.main.temp_max) : "" }°celcius </p>
              <p>Max Temperature</p>
            </div>
            <div className='min_temp'>
              <p> { result.main ? Math.floor(result.main.temp_min) : ""  }°celcius </p>
              <p>Min Temperature</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App;


// api link
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=d02d86a054ba4b4e737703186aec2670

/// api key
// d02d86a054ba4b4e737703186aec2670