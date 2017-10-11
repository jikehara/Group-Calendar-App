import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
// import Typography from 'material-ui/Typography'
// import Button from 'material-ui/Button'
import {NavLink} from 'react-router-dom'

const NavBar = (onClick) =>
  <AppBar position='fixed'>
    <Toolbar>
      <NavLink
        to='/'>Home
      </NavLink>
      <NavLink
        to='/about'>About
      </NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/logout'>Logout</NavLink>
      <NavLink to='/shared-calendar'>Your Calendar</NavLink>
    </Toolbar>
  </AppBar>

export default NavBar
