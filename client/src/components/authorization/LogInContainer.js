import AbstractContainer from '../toolbox/AbstractContainer'
import LogIn from './LogIn'
import PropTypes from 'prop-types'
import withUserData from '../providers/withUserData'

class LogInContainer extends AbstractContainer {
  static propTypes = {
    userData: PropTypes.object
  }

  state = {
    username: '',
    password: '',
    ...this.state
  }

  constructor (props) {
    super(props, LogIn)
  }

  onSubmit = () => {
    console.log('submit in LogInContainer')
    this.props.userData.logInUser(this.state.username, this.state.password)
      .then(user => alert('You logged in'))
  }

  validateForm = () => this.state.username.trim() && this.state.password.trim()
}

export default withUserData(LogInContainer)
