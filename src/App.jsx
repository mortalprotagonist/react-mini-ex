import React, { useState } from "react";
import "./App.css"
function App() {

  const [count,Setcount]=useState(0)

  function handleClick(){
    alert("Good Choice!!")
    Setcount(count +1)
  }
  return (
    <div>
      <h1>Hello this is my React website</h1>
      <button onClick={handleClick}>Tap to Learn</button>
      <p>clicked Button {count} times</p>
    </div>
  )
}

export default App;