import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
  const[expense, addexpense]=useState('') ;
  const[amount,addamount]=useState('') ;
  const[expenses, setexpenses]=useState([]);
  const handleExpense=()=>{
    setexpenses([...expenses, {
      name: expense,
      rate: amount
    }]),
    addexpense("");
    addamount("");
  }
  return (
    <>
      <section id="center">
        <h1>Expense Tracker</h1>
       <input type="text" placeholder='expense' name='expense' value={expense} onChange={(e) => addexpense(e.target.value)} />
        <input type="text" placeholder='amount' name='amount' value={amount} onChange={(e) => addamount(e.target.value)} />
        <button onClick={handleExpense}>add expense</button>

        <div class="expenselist">
          <ul>{expenses.map((k,i)=>(<li key={i}>{`${k.name} ${k.rate}`}
            <button onClick={ ()=>setexpenses(expenses.filter((k,ind)=>ind!==i)) }>delete</button>
          </li>))
}</ul>
          </div>

          <div>
              <h3>{expenses.reduce((total , expense)=>total+parseFloat(expense.rate),0)}</h3>
          </div>
      </section>
    </>
  )
}

export default App
