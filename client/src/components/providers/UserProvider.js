import React, {Component} from 'react'
import * as ServerApi from '../../lib/serverApi'

class UserProvider extends Component {
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

  render () {
    return (
      <div> hello </div>
    )
  }
}

export default UserProvider
