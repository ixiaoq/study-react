import React, { Component } from 'react'

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

export default class HandleEvents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: false
    }
  }

  handleClick () {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }

    return (
      <div>
        <button onClick={() => this.handleClick()}>
          { this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

        <Greeting isLoggedIn={ this.state.isToggleOn } />
      </div>
    )
  }
}
