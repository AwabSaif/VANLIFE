import React from 'react'
import { Outlet } from "react-router-dom"
import './Container.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


export default function Container() {

  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
