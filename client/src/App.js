import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/authorization/LogIn'
import SignUp from './components/authorization/SignUp'
import SharedCalendar from './components/calendar/SharedCalendar'
import About from './components/About'

const App = () =>
  <div>
    <Home />
    <LogIn />
    <SignUp />
    <SharedCalendar />
    <About />
  </div>

export default App
