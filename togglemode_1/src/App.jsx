import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
  const [isdark,setIsdark]=useState(true);
  return (
    <>
      <section id="center" class={isdark?"dark":"light"}>
        <h1>toggle mode</h1>
        <button onClick={()=>{setIsdark(!isdark)}}>{isdark?"light mode":"darkmode"}</button>
      </section>

    </>
  )
}

export default App
