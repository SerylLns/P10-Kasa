import React, { useState } from 'react'
import "../styles/dropdown.scss"
import ArrowBottom from "../images/ArrowBottom.svg"
import ArrowTop from "../images/ArrowTop.svg"

export default function DropDown({children, title}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown">
      <div onClick={() => handleClick()} className="dropdown-header">
        <p>{title}</p>
        <img src={isOpen ? ArrowTop : ArrowBottom} alt="" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )}
    </div>
  )
}
