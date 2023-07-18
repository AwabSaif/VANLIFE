import './App.css'
import React from 'react';
import { useState } from 'react';
import { BrowserRouter , Routes , Route ,Link } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import "./components/Server/server"
import Vans from './components/Pages/Vans/Vans';




export default function App() {

  
  return (
<BrowserRouter>

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/vans' element={<Vans/>}/>

</Routes>
</BrowserRouter>

  )
}
