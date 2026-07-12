import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    alert ("hey")
  },[])
useEffect(()=>{
      alert("clicked");
    },[count]);
     const[isdark, setisdark]=useState(true);
  return (
    <>
      <section class={isdark?"dark":"light"} >
    
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
              </button>
      {/* {showbtn?<button onClick={()=>setisdark(!isdark)}>light </button>:<button onClick={()=>{setisdark(!isdark)}}>dark</button>} */}
      <button onClick={()=>{setisdark(!isdark)}}>{isdark?"light":"dark"}</button>
      </section>
    
    </>
  )
}

export default App
