import React from 'react'
import "../../styles/home.scss"
import HomeImg from "../../images/homeImg.jpg"
import Cards from '../cards/Cards'

export default function Home() {
  return (
    <section className="home">
      <div className="section1">
        <div></div>
        <img src={HomeImg} alt="" />
        <h3>Chez vous, partout et ailleurs</h3>
      </div>
      <div className="section2">
        <Cards/>
      </div>
    </section>
  )
}
