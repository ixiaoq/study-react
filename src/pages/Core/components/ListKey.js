import React, { Component } from 'react'


function ListItems ({ id, title, content }) {
  return (
    <div>
      <h3>{ id }.{ title }</h3>
      <p>{ content }</p>
    </div>
  )
}

export default class ListKey extends Component {
  render() {
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'const', content: 'You can install React from npm.'},
      {id: 3, title: 'inset', content: 'You can install React from npm.'},
      {id: 4, title: 'let', content: 'You can install React from npm.'}
    ]

    return (
      <div>
        {
          posts.map(item =>
            <ListItems key={item.id} { ...item } />
          )
        }

      </div>
    )
  }
}
