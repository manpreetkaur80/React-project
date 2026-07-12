import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const[email, setemail]=useState("");
 const[password,setpassword]=useState("");
 const[isdone , setdone]=useState("");
  function handlelogic(){
  if(!email)
  {
    setdone("enter email")
  }
    else  if(!password)
     {
      setdone("enter password")
 
    } 
else if(password.length<8)
{
  setdone("enter atleast 8 character")
}
    else
    {
        setdone("log in successfull")
       setdone(`welcome ${email}`)
    }
  }

  return (
    <>
    <section className='content'>
     

    <section value='form' className='form'>
      <h1>Login form</h1>
      <input type="email" value={email} name="email" id="email" placeholder='email'onChange={(e)=>{
        setemail(e.target.value)
      }}/>
      <input type="password" value={password} name="password" id="password" placeholder='password' onChange={(e)=>{
        setpassword(e.target.value)
      }}/>
      
    <button type="submit" onClick={handlelogic}>login</button>
    <h3>{isdone}</h3>
    
      </section>
      </section>
      
    </>
  )
}

export default App
