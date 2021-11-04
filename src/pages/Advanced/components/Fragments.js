import React, { Component } from 'react'

function ColumnsHead () {
  return (
    <>
      <th>111</th>
      <th>22</th>
      <th>3333</th>
    </>
  )
}
function Columns () {
  return (
    <React.Fragment>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </React.Fragment>
  )
}


export default class Fragments extends Component {
  render() {
    return (
      <table border='1' >
        <thead>
          <tr>
            <ColumnsHead />
          </tr>
        </thead>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    )
  }
}
