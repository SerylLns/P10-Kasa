import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Carousel from './Carousel'
import '../styles/flat.scss'
import Tag from './Tag'
import DropDown from './DropDown'
import Footer from "./Footer"

export default function Flat() {
  const [flat, setFlat] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    let current = logements.filter(flat => flat.id === id)
    setFlat(current[0])
  }, [flat])

  return (
    <>
      <div className='flat-page'>
        {flat && (
          <>
          <Carousel images={flat.pictures}/>
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
          <div className="flat-attr">
            <div className="tags">
              {flat.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="flat-desc">
            <DropDown title="Description">{flat.description}</DropDown>
            <DropDown title="Equipements">
              <ul>
                {flat.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}
              </ul>
            </DropDown>
          </div>
        </>
        )}
      </div>
      <Footer />
    </>
  )
}
