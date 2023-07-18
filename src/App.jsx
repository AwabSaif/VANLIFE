import './App.css'
import React from 'react';
import { useState } from 'react';
import { BrowserRouter , Routes , Route ,Link } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';





export default function App() {

  
  return (
<BrowserRouter>

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>

</Routes>
</BrowserRouter>

  )
}
