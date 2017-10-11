import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const enhancer = injectSheet(styles)

const SignUp = ({classes}) =>
  <div>
    <p>Signup here!</p>
    <form className={classes.form}>
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
      <TextField
        id='rpassword'
        label='Repeat Password'
        margin='normal'
      />
      <TextField
        id='email'
        label='Email Address'
        margin='normal'
      />
      <Button
        raised
      >Sign Up</Button>
    </form>
  </div>

SignUp.propTypes = propTypes

export default enhancer(SignUp)
