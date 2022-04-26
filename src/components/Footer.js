import React from 'react'
import Logo from "../images/Kasa_Logo_Black.png"
import "../styles/footer.scss"
export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <p>&copy;	2020 Kasa. All rights reserved</p>
    </footer>
  )
}
