import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const search=async (city)=>{
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f2b8556fc9fce94c43a0883451ce9da&units=metric`);
      console.log(response);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <section id="center">
        <h1>weather-app</h1>
        <input type="text" placeholder='Enter city name' onChange={(e) => setCity(e.target.value)} />
        <button onClick={() => {search(city)}}>Get Weather</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {weatherData && (
          <div>
            <img
  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
  alt="weather"
/>
            <h2>Weather in {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Feels Like: {weatherData.main.feels_like}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind: {weatherData.wind.speed} m/s</p>
            <p>Visibility: {weatherData.visibility / 1000} km</p>
            <p>
  Sunrise:
  {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
</p>
<p>
  Sunset:
  {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
</p>
          </div>
        )}
     </section>
    </>
  )
}

export default App
