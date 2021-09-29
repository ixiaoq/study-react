import React, { Component } from 'react'

export default class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>It is { this.state.date }</p>
      </div>
    )
  }
}
