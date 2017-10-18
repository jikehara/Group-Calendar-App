import React from 'react'
import TextField from 'material-ui/TextField'
import VerticalForm from '../toolbox/VerticalForm'
import Well from '../toolbox/Well'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'

const propTypes = {
  onInputChanged: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const LogIn = (props) =>
  <Well>
    <form onSubmit={props.onSubmit}>
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
        <Button
          color='primary'
          raised
          disabled={!props.isFormValid}
          type='submit'
        >Log In</Button>
      </VerticalForm>
    </form>
  </Well>

LogIn.propTypes = propTypes

export default LogIn
