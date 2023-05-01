import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'
import '../Mouse/style.css'

function App() {
  const[x , setX] = useState(0)
  const[y , setY] = useState(0)

  useEffect(()=>{
    window.addEventListener('mousemove', handleMouseMove)

  },[])
  function handleMouseMove (event) {
    setX(event.pageX)
    setY(event.pageY)
    document.getElementById('nice').style.backgroundColor = 'black'
    document.getElementById('root').style.color = 'white'
  }
  return (
    <div className='App'>
      <h1>Mouse Handle</h1>
        <label>X : </label> <span>{x}</span> 
        <label>Y : </label> <span> {y} </span>
    </div>
  );
}

export default App;
