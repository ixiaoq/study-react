import React, { Component } from 'react'


const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

export default class Refs extends Component {
  render() {
    const ref = React.createRef()
    console.log(ref)

    return (
      <div>
        <FancyButton ref={ref}>Click me!</FancyButton>
      </div>
    )
  }
}
