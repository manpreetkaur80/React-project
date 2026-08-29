import { useLayoutEffect, useState } from 'react'

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
  return (   //value is used to indicate , that all thee task saved inside react also not only task , so value checks is the task value same that saved bedore inside react ,...
    <>
      <section id="center">

        <h1 className='title'>To-DO List</h1>
        <div className='add'>
          <input className='input' type="text" name="task" id="task" value={task} onChange={(e) => addTask(e.target.value)} />
          <button className='btn' onClick={handleclick}>add task</button>
        </div>
        <div className='list'>
          {

            <ul className='list'>
              {tasks.map((task, index) =>( <li key={index} className='ans'>{task.iscompleted ? "✅" : "⬜"}{task.text} {' '}
               <button className='btn btn1'  onClick={() =>
    setTasks(
      tasks.map((item, i) =>
        i === index
          ? { ...item, iscompleted:!item.iscompleted }
          : item
      )
    )
  }>completed</button>
                <button className='btn' onClick={()=>setTasks(tasks.filter((e,i)=>i!==index))}>delete</button>
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
