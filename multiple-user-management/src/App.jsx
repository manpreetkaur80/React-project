import { use, useState } from 'react'
import './App.css'

function App() {
  const [user, setuser] = useState([])
  const [name, setname] = useState("")
  const [age, setage] = useState(" ")
  const [city, setcity] = useState("")

const [search, setSearch] = useState("");
const [editIndex, setEditIndex] = useState(null);


  const addUser = () => {
    if (
  user.some(
    item => item.name.toLowerCase() === name.toLowerCase()
  ) && editIndex === null
) {
  alert("User already exists");
  return;
}

if (!name || !age || !city) {
  alert("Fill all fields");
  return;
}
  if (editIndex !== null) {

    setuser(
      user.map((item, index) =>
        index === editIndex
          ? {
              name: name,
              age: age,
              city: city
            }
          : item
      )
    );

    setEditIndex(null);

  } else {

    setuser([
      ...user,
      {
        name: name,
        age: age,
        city: city
      }
    ]);

  }

  setname("");
  setage("");
  setcity("");
};
 const edituser = (index) => {
  setEditIndex(index);
  setname(user[index].name);
  setage(user[index].age);
  setcity(user[index].city);
};

  const deleteuser=(t,e)=>  {
      setuser( user.filter(item,index=>index!==e))
  }
  return (
    <>
      <section id="center">


        <label>name : </label>
        <input type="text" value={name} onChange={e => setname(e.target.value)} />
        <label >age : </label>
        <input type="text" value={age} onChange={e => setage(e.target.value)} />
        <label >city :</label>
        <input type="text" value={city} onChange={e => setcity(e.target.value)} />
       <button onClick={addUser}>
  {editIndex !== null ? "Update User" : "Add User"}
</button>
<input
  type="text"
  placeholder="Search by name"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<h2>Total Users: {user.length}</h2>
        {user
  .filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((t, e) => (
    <div key={e}>
      <h3>{t.name}</h3>
      <p>Age: {t.age}</p>
      <p>City: {t.city}</p>

      <button onClick={() => edituser(e)}>Edit</button>
      <button onClick={() => deleteuser(e)}>Delete</button>
    </div>
  ))}

      </section>

    </>
  )
}

export default App
