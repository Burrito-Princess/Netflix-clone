import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Call_api from './api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Call_api /> 
    </div>
  )
}

export default App
