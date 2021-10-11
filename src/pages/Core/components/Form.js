import React, { Component } from 'react'

export default class form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    alert(`a name was submit: ${ this.state.value }`)
    e.preventDefault()
  }
  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          名字：
          <input type="text" value={ this.state.value } onChange={ this.handleChange } />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}
