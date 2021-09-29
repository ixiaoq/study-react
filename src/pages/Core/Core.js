import React, { Component } from 'react'
import { Switch, Route } from "react-router"

import Nav from '@/components/Nav/Nav'

import Clock from './components/Clock';
import Props from './components/ComponentOrProps';

const navList = [
  {
    path: '/core/props',
    name: '组件 & Props',
  },
  {
    path: '/core/state',
    name: 'State & 生命周期',
  },
]

export default class Core extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Nav navList={ navList } />

        <Switch>
          <Route path="/core/props" component={ Props }></Route>
          <Route path="/core/state" exact component={ Clock }></Route>
        </Switch>
      </div>
    )
  }
}
