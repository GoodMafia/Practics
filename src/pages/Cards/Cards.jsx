import data from '../../cards.json'
import { useState } from "react";
export default function Cards() {

const [count, setCount] = useState(0)


function handleNext(){
    if(count > 11){
        setCount(0)
    }
    setCount(prevCount => prevCount + 1)
    console.log(count)
}


function handlePrev(){
    if(count < 1){
        setCount(12)
    }
    setCount(prevCount => prevCount - 1)
    console.log(count)
}

  return (
  <div className="card">
    <button onClick={handlePrev}>Prev</button>
    <div className="cardBlock">
        <p className="title">{data[count].title}</p>
        <p className="body">{data[count].body}</p>
    </div>
    <button onClick={handleNext}>Next</button>
    </div>
  )
}
