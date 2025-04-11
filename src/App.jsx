import React from "react";
import "./App.css"
function App() {


  function handleClick(){
    alert("Good Choice!!!")
  }
  return (
    <div>
      <h1>Hello this is my React website</h1>
      <button onClick={handleClick}>Tap to Learn</button>
    </div>
  )
}

export default App;