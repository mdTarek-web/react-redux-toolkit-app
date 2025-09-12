import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/show-books" className="nav-link">show Books</Link>
        <Link to="/add-book" className="nav-link">add Book</Link>
    </nav>
  )
}

export default Navbar