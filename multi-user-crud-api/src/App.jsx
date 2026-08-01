import { use, useState } from 'react';
import { useEffect } from "react";
import './App.css'

function App() {
const  [name,setName]=useState("")
const [email,setMail]=useState("")
  const [user,setUser]=useState([]);
const [editingId, setEditingId] = useState(null);
const fetchUsers = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data= await response.json();
setUser(data);
}

const addUser = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
        method:"POST",
        headers :{"Content-Type":"application/json"
    },
    body: JSON.stringify({
    name,
    email
})});
const data = await response.json();
  setUser([...user,data])
  setName("");
setMail("");

}
useEffect(() => {
  fetchUsers();
}, []);

const edituser = (user) => {
  setEditingId(user.id);
  setName(user.name);
  setMail(user.email);
};
const deleteuser =async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    method:"DELETE",
    
  })
    setUser(
    user.filter(item=>item.id !== id)
)

};


 const updateUser = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${editingId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }
  );

  const data = await response.json();

  setUser(
    user.map((item) =>
      item.id === editingId ? data : item
    )
  );

  setEditingId(null);
  setName("");
  setMail("");
};

  return (
    <>
      <section id="center">
        <h1>USERS</h1>
        <label htmlFor="name">name :</label>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="email">email :</label>
        <input type="text"  value={email} onChange={(e)=>setMail(e.target.value)}/>
        <button
  disabled={!name || !email}
  onClick={() =>
    editingId === null ? addUser() : updateUser()
  }
>
  {editingId === null ? "Add User" : "Update User"}
</button>
        <h2>CUREENT USERS</h2>
        {
          user.map((e,i)=>
<div key={e.id}>
  <h2>name : {e.name}</h2>
  <h2>email : {e.email}</h2>
  <button onClick={()=>edituser(e)}>edit</button>
  <button onClick={()=>deleteuser(e.id)}>delete</button>
</div>

          )
        }
        </section>
    </>
  )
}

export default App
