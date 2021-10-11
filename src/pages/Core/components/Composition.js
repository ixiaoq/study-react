import React, { Component } from 'react'

function Contacts () {
  return (
    <div className="Contacts">Contacts Contacts Contacts</div>
  )
}
function Chat () {
  return (
    <div className="Contacts">Chat Chat Chat</div>
  )
}

function SplitPane (props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        { props.left }
      </div>
      <div className="SplitPane-right">
        { props.right }
      </div>
    </div>
  )
}

export default class Composition extends Component {
  render() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    )
  }
}
