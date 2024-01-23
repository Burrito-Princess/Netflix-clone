import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api_App from './api'
import app from "./Movies"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Api_App />
    </div>
  )
}

export default App
