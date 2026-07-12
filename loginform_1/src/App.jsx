import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[name , setName] = useState('') ;
  const[password , setPassword] = useState('') ;
  const[email,setEmail]=useState('');
  const[isdone, setIsdone]=useState('');
  const[isdark, setisdark]=useState(true);
  function handleSubmit(){
    if(!email)
    {
      setIsdone("email is required");
    }
    else if(!password)
    {
      setIsdone("password is required");
    }
    else if(!name)
    {
      setIsdone("name is required");
    }
    else{
      setIsdone("successfully submitted");
      setIsdone(`welcome ${name}`);
    }
  }
  return (
    <>
      <section id="center" class={isdark?"dark":"light"}>
      <h1>Login Form  </h1>
      <label htmlFor="name">Name :  
      <input type="text" placeholder='username' name='username' value={name} onChange={(e) => setName(e.target.value)} />    
        </label>
      <label htmlFor="email">Email : 
     
      <input type='text' placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
      <label htmlFor="password">Password :  
      <input type='password' placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={()=>{setisdark(!isdark)}}>{isdark?"light":"dark"}</button>
     < button onClick={()=>{setName('');setEmail('');setPassword('');setIsdone('');}}>clear</button>
        <button onClick={handleSubmit}>Submit</button>
        <h3>{isdone}</h3>
      </section>

       </>
  )
}

export default App
