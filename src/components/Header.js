import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/Kasa_Logo.png'
import "../styles/header.scss"


export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={Logo} alt="logo"  />
      </NavLink>
      <nav>
        <ul>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-active" : ""}>
            <li>Acceuil</li>
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-active" : ""}>
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
