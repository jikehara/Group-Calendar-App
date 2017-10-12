import AbstractContainer from '../toolbox/AbstractContainer'
import SignUp from './SignUp'

class SignUpContainer extends AbstractContainer {
  state = {
    username: '',
    password: '',
    passwordAgain: '',
    email: ''
  }

  constructor (props) {
    super(props, SignUp)
  }
}

export default SignUpContainer
