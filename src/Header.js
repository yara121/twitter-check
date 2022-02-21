import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <div>
        <header>Twitter Account Checker</header>
      </div>
    </Link>
  )
}
