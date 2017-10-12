import React from 'react'
import injectSheet from 'react-jss'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  well: {
    margin: 20,
    padding: 20
  }
}

const enhancer = injectSheet(styles)

const Well = ({classes, children}) =>
  <div>
    <Paper className={classes.well}>
      {children}
    </Paper>
  </div>

Well.propTypes = propTypes

export default enhancer(Well)
