import React from 'react'
import '../../styles/cards.scss'
export default function Card({flat}) {
  return (
    <div className="card">
      <div></div>
      <img src={flat.cover} alt="" />
      <p>{flat.title}</p>
    </div>
  )
}
