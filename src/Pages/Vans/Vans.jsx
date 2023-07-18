import {React , useEffect ,useState} from 'react'
import './Vans.css'
import Header from '../../components/Header/Header'



export default function Vans() {
    const [vans ,setVans]=useState([])
    useEffect(()=>{
        fetch("api/vans" )
        .then(res =>res.json())
        .then(data =>setVans(data.vans))
    },[ ])
  const  vanElements = vans.map(van => (
    <div key={van.id} className='van-tile' >
        <img src={van.imageUrl} />
        <div className='van-info'>
            <h3>{van.naem}</h3>
            <p>{van.price} <span>/day</span> </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ))
  return (
    <>
    <Header/>
    <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
 
    </>
  )
}
