import { useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [task, addTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
  function handleclick() {
    setTasks([...tasks, {
      text:task,
      iscompleted:false
    }]),
      addTask("")
    // console.log(tasks),
    // console.log(task);
  }
  return (   //valuw is used to indicate , that all thee task saved inside react also not onlu task , so value checks is the task value same that saved bedore inside react ,...
    <>
      <section id="center">

        <h1>To-DO List</h1>
        <div className='add'>
          <input type="text" name="task" id="task" value={task} onChange={(e) => addTask(e.target.value)} />
          <button onClick={handleclick}>add task</button>
        </div>
        <div className='list'>
          {

            <ul>
              {tasks.map((task, index) =>( <li key={index}>{task.iscompleted ? "✅" : "⬜"}{task.text} {' '}
               <button  onClick={() =>
    setTasks(
      tasks.map((item, i) =>
        i === index
          ? { ...item, iscompleted:!item.iscompleted }
          : item
      )
    )
  }>completed</button>
                <button onClick={()=>setTasks(tasks.filter((e,i)=>i!==index))}>delete</button>
              </li>)
              )}
            </ul>
          }
        </div>
      </section>
    </>
  )
}

export default App
