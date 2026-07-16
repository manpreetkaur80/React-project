import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [weather, setweather] = useState(null);
  const [city, setcity] = useState("");
  const [message, setmessage] = useState("");
  const weatherData = [
    {
      city: "Delhi",
      temp: 35,
      humidity: 55,
      condition: "Sunny"
    },
    {
      city: "Mumbai",
      temp: 30,
      humidity: 80,
      condition: "Cloudy"
    },
    {
      city: "Ahmedabad",
      temp: 38,
      humidity: 45,
      condition: "Sunny"
    },
    {
      city: "Chandigarh",
      temp: 32,
      humidity: 60,
      condition: "Clear"
    }

  ]

  // const handleclick=()=>{
  //   weatherData.find((item)=>{
  //     if(item.city==city)
  //       setweather(item)
  //   })
  //   }
  const handleclick = () => {
    const result = weatherData.find(
      item => item.city.toLowerCase() === city.toLowerCase()
    )
    if (result) {
      setweather(result);
      setmessage("")
    } else {
      setweather(undefined)
      setmessage("city not found")
    }

  };

  // Find the item whose city equals the entered city.

  return (
    <>
      <section id="center">
        <h1>weather app</h1>
        <input type="text" name="city" value={city} placeholder="enter city" onChange={(e) => { setcity(e.target.value) }} />
        <button onClick={handleclick}>search</button>
        <div className="result">{
          weather && <> <h3>city :{weather.city}</h3>
            <h3>temp :{weather.temp}</h3>
            <h3>humidity :{weather.humidity}</h3>
            <h3>condition :{weather.condition}</h3>

          </>}       <h3>{message}</h3>      </div>
      </section>




    </>

  )

}



export default App
