import React from 'react'
import TextField from 'material-ui/TextField'
import VerticalForm from '../styles/VerticalForm'

const LogIn = () =>
  <form>
    <VerticalForm>
      <TextField
        id='username'
        label='Username'
        margin='normal'
      />
      <TextField
        id='password'
        label='Password'
        margin='normal'
      />
    </VerticalForm>
  </form>

export default LogIn
