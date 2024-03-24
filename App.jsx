import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter :- {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Update counter</button>
    </>
  )
}

export default App
