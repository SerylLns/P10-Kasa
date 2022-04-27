import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/404.scss"

export default function NotFound() {
  return (
    <div className='error-page'>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <NavLink to="/">Retourner sur la page d'acceuil</NavLink>
    </div>
  )
}
