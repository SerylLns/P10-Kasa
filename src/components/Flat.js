import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Carousel from './Carousel'
import '../styles/flat.scss'
import Tag from './Tag'
import DropDown from './DropDown'
import Footer from "./Footer"
import Rating from './Rating'
import NotFound from './NotFound'

export default function Flat() {
  const [flat, setFlat] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    let current = logements.filter(flat => flat.id === id)
    setFlat(current[0])
  }, [flat, id])

  return (
    <>
      {flat ? (
        <>
          <div className='flat-page'>
            <Carousel images={flat.pictures}/>
            <div className="flat-infos">
              <div className="flat-info-left">
                <div className="flat-title">
                  <h3>{flat.title}</h3>
                  <p>{flat.location}</p>
                </div>
                <div className="tags">
                  {flat.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                    ))}
                </div>
              </div>
              <div className="flat-info-right">
                <div className="flat-host">
                  <p>{flat.host.name}</p>
                  <img src={flat.host.picture} alt={flat.host.name} />
                </div>
                <Rating rate={flat.rating}/>
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
          </div>
          <Footer />
        </>
      ) : (
        <NotFound/>
      )}
    </>
  )
}
