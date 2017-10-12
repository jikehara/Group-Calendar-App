import React from 'react'
import TextField from 'material-ui/TextField'
import VerticalForm from '../toolbox/VerticalForm'
import Well from '../toolbox/Well'
import Button from 'material-ui/Button'

const LogIn = () =>
  <Well>
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
        <Button
          color='primary'
          raised
        >Log In</Button>
      </VerticalForm>
    </form>
  </Well>

export default LogIn
