import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/authorization/LogInContainer'
import SignUp from './components/authorization/SignUpContainer'
import SharedCalendar from './components/calendar/SharedCalendar'
import About from './components/About'
import NavBar from './components/navigation/NavBar'
import UserProvider from './components/providers/UserProvider'

const App = () =>
  <BrowserRouter>
    <UserProvider>
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
    </UserProvider>
  </BrowserRouter>

export default App
