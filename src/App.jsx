import './App.css'
import React from 'react';
import { useState } from 'react';
import { BrowserRouter , Routes , Route ,Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import "./components/Server/server"
import Vans from './Pages/Vans/Vans';
import DetailVan from './Pages/DetailVan/DetailVan';







export default function App() {

  
  return (
<BrowserRouter>

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/vans' element={<Vans/>}/>
<Route path='/vans/:id' element={<DetailVan/>}/>

</Routes>
</BrowserRouter>

  )
}
