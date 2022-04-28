import React from 'react'
import AboutImg from "../images/AboutImg.jpg"
import '../styles/about.scss'
import DropDown from './DropDown'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="section1">
          <div></div>
          <img src={AboutImg} alt="" />
        </div>
        <div className="section2">
          <DropDown title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </DropDown>
          <DropDown title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </DropDown>
          <DropDown title="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </DropDown>
          <DropDown title="Responsabilité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </DropDown>
        </div>
      </div>
    <Footer/>
    </>
  )
}
