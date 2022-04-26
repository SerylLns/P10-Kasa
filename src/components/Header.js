import React from 'react'
import Logo from '../images/Kasa_Logo.png'
import "../styles/header.scss"


export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo"  />
      <nav>
        <ul>
          <li>Acceuil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </header>
  )
}
