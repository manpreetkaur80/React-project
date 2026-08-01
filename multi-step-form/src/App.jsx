import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const [personal, setPersonal] = useState({
  name: "",
  email: ""
});

const [address, setAddress] = useState({
  city: "",
  country: ""
});

const [education, setEducation] = useState({
  college: "",
  course: ""
});

const [step, setStep] = useState(1);

const nextStep=()=>{
   setStep(step+1)
}

const prevStep=()=>{
   setStep(step-1)
}
const resetForm=()=>{
  setPersonal({
    name: "",
    email: ""
  });
  setAddress({
    city: "",
    country: ""
  });
  setEducation({
    college: "",
    course: ""
  });
  setStep(1);
}

  return (
    <>
      <section id="center">
    {  step === 1 &&
         <>
    <h1>Personal Details</h1>
    <label>Name</label>
    <input type="text" value={personal.name} onChange={(e) => setPersonal({...personal, name: e.target.value})} />
   
    <label>Email</label>
    <input type="text" value={personal.email} onChange={(e) => setPersonal({...personal, email: e.target.value})} />
      <button disabled={!personal.name || !personal.email} onClick={() => nextStep()}>
Next
</button>
</>  }



    {step === 2 && <><h1>Address</h1>
      <label>City</label>
      <input type="text" value={address.city} onChange={(e) => setAddress({...address, city: e.target.value})} />
      <label>Country</label>
      <input type="text" value={address.country} onChange={(e) => setAddress({...address, country: e.target.value})} />
       < button disabled={!address.city || !address.country} onClick={() => nextStep()}>Next</button>
        <button onClick={() => prevStep()}>Back</button>
    </>}

    {step === 3 && <><h1>Education</h1>
      <label>College</label>
      <input type="text" value={education.college} onChange={(e) => setEducation({...education, college: e.target.value})} />
      <label>Course</label>
      <input type="text" value={education.course} onChange={(e) => setEducation({...education, course: e.target.value})} />
      <button disabled={!education.college || !education.course} onClick={() => nextStep()}>Submit</button>
    </>}
    {
      step===4 && <><h1>Summary</h1>
      <p>Name: {personal.name}</p>
      <p>Email: {personal.email}</p>
      <p>City: {address.city}</p>
      <p>Country: {address.country}</p>
      <p>College: {education.college}</p>
      <p>Course: {education.course}</p>
      <button onClick={() => prevStep()}>Back</button>
      <button onClick={() => resetForm()}>reset</button>
      <button onClick={()=>nextStep()}>Submit</button>
    </>}

    {
      step===5 && <><h1>Form Submitted Successfully!</h1>
      <p>Thank you for submitting the form.</p>
    </>}
    
      </section>
    </>
  )
}

export default App
