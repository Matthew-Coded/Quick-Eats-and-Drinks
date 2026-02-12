import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h1>
            Gensei Anime
        </h1>
        <div className='navLinks'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink to='/watch-list'>Watch List</NavLink>
        </div>
    </header>
  )
}

export default Navbar