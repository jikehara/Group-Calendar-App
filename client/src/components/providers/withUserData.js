import PropTypes from 'prop-types'
import React from 'react'

const withUserData = BaseComponent => {
  const WithUserData = (props, context) =>
    <BaseComponent {...props} {...context} />

  WithUserData.contextTypes = {
    userData: PropTypes.object.isRequired
  }

  return WithUserData
}

export default withUserData
