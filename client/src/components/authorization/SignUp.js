import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import VerticalForm from '../toolbox/VerticalForm'
import Well from '../toolbox/Well'
import PropTypes from 'prop-types'

const propTypes = {
  onInputChanged: PropTypes.func.isRequired
}

const SignUp = (props) =>
  <div>
    <Well>
      <p>Signup here!</p>
      <form>
        <VerticalForm>
          <TextField
            id='username'
            label='Username'
            margin='normal'
            onChange={props.onInputChanged}
          />
          <TextField
            id='password'
            label='Password'
            margin='normal'
            onChange={props.onInputChanged}
          />
          <TextField
            id='passwordAgain'
            label='Repeat Password'
            margin='normal'
            onChange={props.onInputChanged}
          />
          <TextField
            id='email'
            label='Email Address'
            margin='normal'
            onChange={props.onInputChanged}
          />
          <Button
            color='primary'
            raised
          >Sign Up</Button>
        </VerticalForm>
      </form>
    </Well>
  </div>

SignUp.propTypes = propTypes

export default SignUp
