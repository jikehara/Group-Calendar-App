import React, {Component} from 'react'

class AbstractContainer extends Component {
  constructor (props, WrappedComponent) {
    super(props)
    this.WrappedComponent = WrappedComponent
    this.state = {
      isFormValid: false
    }
  }

  componentDidUpdate () {
    const isFormValid = Boolean(this.validateForm())
    if (this.state.isFormValid !== isFormValid) {
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        isFormValid
      })
    }
  }

  validateForm = () => true

  onSubmit = () => {
    console.log('submitted the form from AbstractContainer')
  } // subclass overrides this

  onFormSubmit = (event) => {
    console.log('submitted the form')
    event.preventDefault()
    this.onSubmit()
  }

  onInputChanged = (event) =>
    this.setState({
      [event.target.id]: event.target.value
    })

  render () {
    const WrappedComponent = this.WrappedComponent
    return <WrappedComponent
      {...this.state}
      onInputChanged={this.onInputChanged}
      onSubmit={this.onFormSubmit}
    />
  }
}

export default AbstractContainer
