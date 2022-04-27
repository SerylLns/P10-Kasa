import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logements from '../../data/logements.json'
import Card from './Card';
export default function Cards() {
  const [flats, setFlats] = useState([])

  useEffect(() => {
    setFlats(logements)
  },[]);

  return (
    <div className="flats-container">
      {flats.map(flat => (
        <NavLink to={`/${flat.id}`} key={flat.id}>
          <Card flat={flat}/>
        </NavLink>
      ))}
    </div>
  )
}
