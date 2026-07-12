import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[task , addtask]=useState('') ;
  const[tasks, settasks]=useState([]);
  function handleclick(){
    settasks([...tasks,{
      text:task,
      iscompleted:false
    }]),
    addtask("");
    cosole.log(tasks),
    console.log(task);
  }
  return (
    <>
    <section id="center">
      <div class="taskinput">
    <input type="text" placeholder='task' name='task' value={task} onChange={(e) => addtask(e.target.value)} />
    <button onClick={()=>handleclick()}>add task</button>
      </div>
      <div class="tasklist">
      <ul>
        {tasks.map((task,index)=>(<li key={index}>{task.iscompleted?"✓":"✗"}{task.text}
          <button onClick={()=>{settasks(tasks.map((t,i)=>i===index?({...t,iscompleted:!t.iscompleted}):t))}}>completed</button>
          <button onClick={()=>{settasks(tasks.filter(( t,i)=>i!==index))}}>delete</button>

        </li>))}
      </ul>
      </div>
      </section>
   </>
  )
}

export default App
