import React, { Component } from 'react'

let timer

export default class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }

  componentDidMount () {
    timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(timer)
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
