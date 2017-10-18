import AbstractContainer from '../toolbox/AbstractContainer'
import LogIn from './LogIn'

class LogInContainer extends AbstractContainer {
  state = {
    username: '',
    password: '',
    ...this.state
  }

  constructor (props) {
    super(props, LogIn)
  }

  onSubmit() {
    userProvider.logInUser(this.state.username, this.state.password)
      .then(user => alert())
  }
  validateForm = () => this.state.username.trim() && this.state.password.trim()
}

export default LogInContainer
