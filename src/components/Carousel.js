import React, { useState } from 'react'
import '../styles/carousel.scss'
import ArrowRight from '../images/arrow-right.svg'

export default function Carousel({images}) {
  let [current, setCurrent] = useState(0)
  const next = () => {
    if (current === images.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }
  const previous = () => {
    if (current === 0) {
      setCurrent(images.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  return (
    <>
      <div className='carousel'>
        {images && (
          <>
            <div className="carousel-container">
            { images.map((image, index) => (
              index === current ? (
                <img className='current-img' key={index} src={image} alt=""/>
                ):(
                  <img key={index} src={image} alt=""/>
                )
                ))}
            </div>
            <span>{current + 1}/{images.length}</span>
          </>
        )}
        {images.length > 1 && (
          <>
            <img src={ArrowRight} alt="suivant" className='arrow-left' onClick={() => next()} />
            <img src={ArrowRight} alt="précedent" className='arrow-right' onClick={() => previous()}/>
          </>
        )}
      </div>
    </>
  )
}
