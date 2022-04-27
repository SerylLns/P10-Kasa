import React from 'react'
import StarFull from "../images/star-full.svg"
import StarEmpty from "../images/star.svg"
import "../styles/rating.scss"
export default function Rating({rate}) {
  const emptyStar = 5 - rate

  return (
    <div className='rating'>
      {[...Array(parseInt(rate))].map((star, index) => (
        <img src={StarFull} key={index} alt="rate" />
      ))}

      {[...Array(parseInt(emptyStar))].map((star, index) => (
        <img src={StarEmpty} key={index} alt="rate" />
      ))}
    </div>
  )
}
