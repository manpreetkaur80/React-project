import { useState } from 'react'
import './App.css'

function App() {
  const [search,setsearch]=useState("")
  const movies = [
  { name: "Spider-Man", year: 2021 },
  { name: "Batman", year: 2022 },
  { name: "Avengers", year: 2019 },
  { name: "Iron Man", year: 2008 },
  { name: "Doctor Strange", year: 2022 },
  { name: "Black Panther", year: 2018 }
];

  return (
    <>
      <section id="center">
      <input type="text" value={search} placeholder='enter movie name' onChange={(e)=>setsearch(e.target.value)}/>
      {movies
  .filter(movie => movie.name.toLowerCase().includes(search.toLowerCase()))
   .map((movie, index) => (
  <div key={index}>
    <h3>{movie.name}</h3>
    <p>{movie.year}</p>
  </div>
))}
      </section>

     </>
  )
}

export default App
