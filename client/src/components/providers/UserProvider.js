import {Component} from 'react'
import * as ServerApi from '../../lib/serverApi'
import PropTypes from 'prop-types'

class UserProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  static childContextTypes = {
    userData: PropTypes.object
  }

  state = {
    user: null
  }

  methods = {
    getUser: () => {
      ServerApi.getUser()
    },

    logInUser: (username, password) =>
      ServerApi.logInUser(username, password)
        .then(user => {
          this.setState({user})
          return user
        })
  }

  getChildContext () {
    return {
      userData: {
        ...this.state,
        ...this.methods
      }
    }
  }

  render () {
    return this.props.children
  }
}

export default UserProvider
