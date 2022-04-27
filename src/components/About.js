import React from 'react'
import AboutImg from "../images/AboutImg.jpg"
import '../styles/about.scss'
import DropDown from './DropDown'

export default function About() {
  return (
    <div className="about-page">
      <div className="section1">
        <div></div>
        <img src={AboutImg} alt="" />
      </div>
      <div className="section2">
        <DropDown title="Fiabilité">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </DropDown>
        <DropDown title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </DropDown>
        <DropDown title="Service">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </DropDown>
        <DropDown title="Responsabilité">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </DropDown>
      </div>
    </div>
  )
}
