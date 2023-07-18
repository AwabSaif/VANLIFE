import './App.css'
import React from 'react';
import { BrowserRouter , Routes , Route ,Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import "./components/Server/server"
import Vans from './Pages/Vans/Vans';
import DetailVan from './Pages/DetailVan/DetailVan';
import Dashboard from './Pages/Host/Dashboard/Dashboard';
import Income from './Pages/Host/Income/Income';
import HostVans from './Pages/Host/HostVans/HostVans';
import HostVansDetail from './Pages/Host/HostVans/HostVansDetail/HostVansDetail';
import Reviews from './Pages/Host/Reviews/Reviews';
import Container from"./components/Container/Container"
import HostLayout from"./components/HostLayout/HostLayout"







export default function App() {

  
  return (
<BrowserRouter>

<Routes>
<Route path='/' element={<Container/>}>

<Route index element={<Home/>}/>
<Route path='about' element={<About/>}/>

<Route path='vans' element={<Vans/>}/>
<Route path='vans/:id' element={<DetailVan/>}/>

<Route path='host' element={<HostLayout/>}>
<Route index element={<Dashboard/>}/>
<Route path='income' element={<Income/>}/> 
<Route path='vans' element={<HostVans/>}/> 
<Route path='vans/:id' element={<HostVansDetail/>}/> 
<Route path='reviews' element={<Reviews/>}/> 
</Route>
 
</Route>
</Routes>
</BrowserRouter>

  )
}
