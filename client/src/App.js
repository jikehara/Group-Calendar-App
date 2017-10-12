import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/authorization/LogIn'
import SignUp from './components/authorization/SignUpContainer'
import SharedCalendar from './components/calendar/SharedCalendar'
import About from './components/About'
import NavBar from './components/navigation/NavBar'

const App = () =>
  <BrowserRouter>
    <div style={{paddingTop: 64}}>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/shared-calendar' component={SharedCalendar} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  </BrowserRouter>

export default App
