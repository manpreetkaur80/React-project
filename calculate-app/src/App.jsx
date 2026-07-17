import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useActionData } from 'react-router-dom'

function App() {
  
  const[no1,setno1]=useState()
  const[no2,setno2]=useState()
    const[result,setresult]=useState()
    
    const operate=(e)=>{
      const num1=Number(no1);
      const num2=Number(no2);

        switch(e)
        {   case '+':
            {
              setresult(num1+num2)
                break;
            }
            case '-':
              {
                setresult(num1-num2)
                break;
              }
            case '*':
              {
                setresult(num1*num2)
                break;
              }
            case '/':
              {
                setresult(num1/num2)
                break
              }
            default:
              {
                setresult("enter valid inputs")
              }
          
        }
    }
  return (
    <>
      <section id="center">
      <input type="text" name="no1" value={no1} onChange={(e)=>setno1(e.target.value)} />
      <input type="text" name="no2" value={no2} onChange={(e)=>setno2(e.target.value)} />
      <button onClick={()=>operate("+")}>+</button>
      <button onClick={()=>operate("-")}>-</button>
      <button onClick={()=>operate("*")}>*</button>
      <button onClick={()=>operate("/")}>/</button>
      <h3>result :{result} </h3>
      </section>

     </>
  )
}

export default App
