import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] =useState("olive")

  return (
    <div className="container" style={{backgroundColor:color}}>
      <h1>Click a Button to Change Background Color</h1>

      <div className="btn-container">
        <button className="green-btn" onClick={() => setColor("green")}>green</button>
        <button className="blue-btn" onClick={() => setColor("blue")}>Blue</button>
        <button className="red-btn" onClick={() => setColor("red")}>Red</button>
        <button className="yellow-btn" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="purple-btn" onClick={() => setColor("purple")}>Purple</button>
      </div>
    </div>
    
  )
}

export default App
