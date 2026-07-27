import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const[total , setTotal]=useState(0);
const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "Keyboard", price: 500 },
  { id: 4, name: "Mouse", price: 200 },
  { id: 5, name: "Headphones", price: 1000 }
];
const [cart,setcart]=useState([]);
const handlecart=(t,e)=>{

  if(cart.find(item => item.name === t.name))
  {
   setcart( cart.map(item =>
        item.name === t.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
  }
  else{
  setcart([...cart,{
    name:t.name,
    price:t.price,
    quantity:1
  }])
  
}
}
const handleQuantity=(ch,t)=>{
    if(ch=='+')
    {
       setcart( cart.map(item =>
        item.name === t.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    }
    else if( ch=='-')
    {
        setcart( cart.map(item =>
       item.name === t.name
  ? {
      ...item,
      quantity: item.quantity > 1
        ? item.quantity - 1
        : 1
    }
  : item))
    }
};
const countTotal=()=>{
  setTotal(cart.reduce((total, item) => {
 return total + (item.price * item.quantity)
}, 0))
}


const remove=(t)=>{
  setcart( cart.filter(item =>
        item.name !== t.name))
}
  return (
    <>
      <section id="center">
        <h1>Shopping cart</h1>
        <ul> 
          {
            products.map((t,e)=><li key={e}>{t.name}   {t.price}
           <button onClick={()=>handlecart(t,e)}>add to cart</button>
            </li>)
            
          }
                  </ul>
                  <h1>YOUR CART</h1>
          <ul>
            {cart.map((t,e)=><li key={e}>{t.name}  {t.price}
                  {"\t"}
              <button onClick={()=>handleQuantity('+',t)}>Quantity + </button>
              <button onClick={()=>handleQuantity('-',t)}>Quanitity - </button>
              {"\n"} Quanitity : <p>{t.quantity}</p>

              <button onClick={()=>remove(t)}>remove</button>
            </li>)}
          </ul>
          <button onClick={()=>{countTotal()}}>bill</button>
         {total!=0? <h2>Total: {total}</h2>:" "}
      </section>
    </>
  )
}

export default App
