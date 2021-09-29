import React, { Component } from 'react'
import style from './ComponentOrProps.css'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function Avatar(props) {
  return (
    <img
      className={style.Avatar}
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function Comment(props) {
  return (
    <div className={style.Comment}>
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
    </div>
  )
}

const img = require('@/static/image/avatar.jpg').default
console.log(img)

const user = {
  text: '基材基材㐱脞',
  author: {
    name: 'zhangsan',
    avatarUrl: require('@/static/image/avatar.jpg').default,
  },
}

export default class ComponentOrProps extends Component {
  render() {
    return (
      <div className="props">
        <Welcome name="World" />
        <Welcome name="React" />

        <Comment {...user} />
    </div>
    )
  }
}
