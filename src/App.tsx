import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Documents from './features/documents/Documents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/docs" element={<Documents/>} />
    </Routes>
  )
}

export default App
