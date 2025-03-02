import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Context } from "./context/context";

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <Context.Provider
      value={{
        flag,
        setFlag
      }}
    >
      <Navbar/>
    </Context.Provider>
  )
}

export default App
