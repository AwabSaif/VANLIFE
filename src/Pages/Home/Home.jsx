import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import bgimag from '../../assets/images/image 53.png'

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
        </div>
    <Footer/>
    
    </>

  )
}
