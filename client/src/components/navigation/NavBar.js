import React from 'react'
// import AppBar from 'material-ui/AppBar'
// import Typography from 'material-ui/Typography'
// import Button from 'material-ui/Button'
import {NavLink} from 'react-router-dom'

const NavBar = (onClick) =>
  <div>
    <nav>
      <NavLink
        to='/'>Home
      </NavLink>
      <NavLink
        to='/about'>About
      </NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/logout'>Logout</NavLink>
      <NavLink to='/your-calendar'>Your Calendar</NavLink>
    </nav>
  </div>

export default NavBar
