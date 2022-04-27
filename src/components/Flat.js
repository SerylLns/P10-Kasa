import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Carousel from './Carousel'
import '../styles/flat.scss'
export default function Flat() {
  const {id} = useParams()
  const [flat, setFlat] = useState({})
  useEffect(() => {
    let current = logements.filter(flat => flat.id === id)
    setFlat(current[0])
  }, [])
  console.log(flat)
  return (
    <div className='flat-page'>
      {flat && (
        <>
          <Carousel images={flat.pictures}/>
        </>
      )}
      <div className="flat-header">
        <div className="flat-title">
          <h3>{flat.title}</h3>
          <p>{flat.location}</p>
        </div>
        <div className="flat-host">
          <p>{flat.host.name}</p>
          <img src={flat.host.picture} alt={flat.host.name} />
        </div>
      </div>
    </div>
  )
}
