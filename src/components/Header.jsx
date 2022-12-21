import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <div className='width'>
        <h1 className='logo'>
          <Link to="/" >
Token Haven
          </Link>

        </h1>

      </div>
    </header>
  )
}
