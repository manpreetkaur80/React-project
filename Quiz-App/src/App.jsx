import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[selectedOption,setselected]=useState("");
  const[score,setscore]=useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions=[
    {
  question: "React is a?",
  options: ["Library", "Language", "Database", "Framework"],
  answer: "Library"
},
    {
    question: "Which hook is used for side effects?",
    options: ["useState", "useReducer", "useEffect", "useContext"],
    answer: "useEffect"
  },
  {
    question: "Which prop helps React identify list items?",
    options: ["id", "name", "key", "index"],
    answer: "key"
  },
  {
    question: "Which method creates a new array by removing items?",
    options: ["map()", "filter()", "find()", "push()"],
    answer: "filter()"
  },
  {
    question: "Which method returns the first matching element?",
    options: ["map()", "reduce()", "find()", "filter()"],
    answer: "find()"
  },
]
const result=()=>{
  if(selectedOption === questions[currentQuestion].answer)
{
  setscore(score+1)
}
if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }


}
  return (
    <>
      <section id="center">
      <h2>
        {questions[currentQuestion].question}  
      </h2>
     {questions[currentQuestion].options.map((e,i)=>
      <button onClick={()=>setselected(e)} key={i}>{e}</button>
)}
<button   onClick={result}>Next</button>
<h2>{score}</h2>
       </section>

    </>
  )
}

export default App
