import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Link ,Outlet } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import "./Server/server"
import Vans from './Pages/Vans/Vans';
import DetailVan from './Pages/DetailVan/DetailVan';
import Dashboard from './Pages/Host/Dashboard/Dashboard';
import Income from './Pages/Host/Income/Income';
import HostVans from './Pages/Host/HostVans/HostVans';
import HostVanDetail from './Pages/Host/HostVans/HostVansDetail/HostVanDetail';
import HostVanInfo from './Pages/Host/HostVanInfo/HostVanInfo';
import HostVanPhotos from './Pages/Host/HostVanInfo/HostVanPhotos';
import HostVanPricing from './Pages/Host/HostVanInfo/HostVanPricing';
import Reviews from './Pages/Host/Reviews/Reviews';
import Container from "./components/Container/Container"
import HostLayout from "./components/HostLayout/HostLayout"







export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<DetailVan />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<Outlet />}>
            <Route index element={<HostVans />} />
            <Route path=":id" element={<HostVanDetail />} >
                <Route index element={<HostVanInfo/>} />
              <Route path="pricing" element={<HostVanPhotos/>} />
              <Route path="photos" element={<HostVanPricing/>} />
                  
            </Route>

            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
