import React from 'react'
import "../styles/tag.scss"

export default function Tag({children}) {
  return (
    <div className='tag'>
      <span>{children}</span>
    </div>
  )
}
