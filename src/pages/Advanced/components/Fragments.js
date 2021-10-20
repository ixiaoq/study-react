import React, { Component } from 'react'

function Columns () {
  return (
    <>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </>
  )
}
// function Columns () {
//   return (
//     <React.Fragment>
//       <td>1</td>
//       <td>2</td>
//       <td>3</td>
//     </React.Fragment>
//   )
// }


export default class Fragments extends Component {
  render() {
    return (
      <tr>
        <Columns/>
      </tr>
    )
  }
}
