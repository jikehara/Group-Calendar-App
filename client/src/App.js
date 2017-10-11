import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/authorization/LogIn'
import SignUp from './components/authorization/SignUp'
import SharedCalendar from './components/calendar/SharedCalendar'
import About from './components/About'
import NavBar from './components/navigation/NavBar'

const App = () =>
  <BrowserRouter>
    <div>
      <NavBar />
      <Home />
      <LogIn />
      <SignUp />
      <SharedCalendar />
      <About />
    </div>
  </BrowserRouter>

export default App
