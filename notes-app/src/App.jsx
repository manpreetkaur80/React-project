import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [title, settitle] = useState("")
  const [description, setdes] = useState("")
  const [notes, setnotes] = useState([])
  const [message, setmessage] = useState("")
 const [editIndex, setEditIndex] = useState(null);
  const edit = (index) => {
  setEditIndex(index);
  settitle(notes[index].title);
  setdes(notes[index].desc);
}
 const add = () => {
  if (!title) {
    setmessage("Enter title");
    return;
  }

  if (!description) {
    setmessage("Enter description");
    return;
  }

  if (editIndex !== null) {
    // Update existing note
    setnotes(
      notes.map((note, index) =>
        index === editIndex
          ? {
              title: title,
              desc: description
            }
          : note
      )
    );

    setEditIndex(null);
  } else {
    // Add new note
    setnotes([
      ...notes,
      {
        title: title,
        desc: description
      }
    ]);
  }

  settitle("");
  setdes("");
  setmessage("");
}; return (
    <>
      <section id="center">
        <h1>Notes-App</h1>
        <input type="text" name="title" value={title} placeholder='title' onChange={e => settitle(e.target.value)} />
        <input type="text" name="description" value={description} placeholder='enter description' onChange={e => setdes(e.target.value)} />
        <button onClick={add}>
  {editIndex !== null ? "Update Note" : "Add Note"}
</button>
        
          <h2>{message}</h2>
        
      
        <div className="content">

          {

            notes.map((text, index) => (
              <div key={index}>

                
                  <h3>{text.title}</h3>
                  <p>{text.desc}</p>
                  <button onClick={()=>edit(index)}>edit</button>
                  <button onClick={()=>setnotes(notes.filter((e,i)=>i!==index))}>delete</button>
                </div>          
            ))
          }

        </div>
      </section>

    </>
  )
}

export default App
