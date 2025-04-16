import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './nav'
import Home from './home'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './about'
import Recipe from './recipe';
import Content from './content';

function App() {
  const [reciperout, setReciperout] = useState(0)
  

  return (
    <>
      <BrowserRouter>
      <Navbar setReciperout = {setReciperout} reciperout={reciperout}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/recipe" element={<Recipe  reciperout={reciperout}/>} />
        <Route path='/content' element={<Content/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
