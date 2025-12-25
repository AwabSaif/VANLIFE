import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
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
import Login from "./Pages/Login/Login"
import Container from "./components/Container/Container"
import Error from "./components/Error/Error"
import NotFound from "./Pages/NotFound/NotFound"
import HostLayout from "./components/HostLayout/HostLayout"
import AuthRequired from "./components/AuthRequired/AuthRequired"



export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route
            path="vans"
            element={<Vans />}
            errorElement={<Error />}
          />
          <Route path="vans/:id" element={<DetailVan />} />

          <Route  element={<AuthRequired />}>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<Outlet />}>
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVanDetail />} >
                <Route index element={<HostVanInfo />} />
                <Route path="photos" element={<HostVanPhotos />} />
                <Route path="pricing" element={<HostVanPricing />} />

              </Route>
          </Route>

            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
