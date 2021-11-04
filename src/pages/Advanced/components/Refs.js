import React, { Component } from 'react'

// const FancyButton = React.forwardRef((props, ref) => (
//   <>
//     <button className="FancyButton" onClick={props.onClick}>
//       {props.children}
//     </button>
//     <input type="text" ref={ref} />
//   </>
// ));

export default class Refs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ref: React.createRef()
    }
  }
  handleClick () {
    console.log('Refs', this.state.ref)
  }
  render() {
    return (
      <div>
        <h3>Refs</h3>
        <button className="FancyButton" onClick={ () => this.handleClick() }>
          Refs Click me!
        </button>
        <input type="text" ref={this.ref} />
      </div>
    )
  }
}
