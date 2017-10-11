import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const enhancer = injectSheet(styles)

const VerticalForm = ({classes, children}) =>
  <div className={classes.div}>
    {children}
  </div>

VerticalForm.propTypes = propTypes

export default enhancer(VerticalForm)
