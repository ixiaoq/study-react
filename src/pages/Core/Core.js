import React, { Component } from 'react'
import { Route } from "react-router"

import Nav from '@/components/Nav/Nav'

import Index from './Index'
import Clock from './components/Clock'
import Props from './components/ComponentOrProps'
import HandleEvents from './components/HandleEvents'
import ListKey from './components/ListKey'
import Form from './components/Form'
import LiftingStateUp from './components/LiftingStateUp'
import Composition from './components/Composition'
import Practise from './components/Practise'

const navList = [
  {
    path: '/core/props',
    name: '组件 & Props',
  },
  {
    path: '/core/state',
    name: 'State & 生命周期',
  },
  {
    path: '/core/events',
    name: '事件处理',
  },
  {
    path: '/core/list',
    name: '列表 & Key',
  },
  {
    path: '/core/form',
    name: '表单',
  },
  {
    path: '/core/lifting-state-up',
    name: '状态提升',
  },
  {
    path: '/core/composition',
    name: '组合 vs 继承',
  },
  {
    path: '/core/practise',
    name: '练习',
  },
]

export default class Core extends Component {
  render() {

    return (
      <div>
        <Nav navList={ navList } />

        <Route path="/core/index" component={ Index }></Route>
        <Route path="/core/props" component={ Props }></Route>
        <Route path="/core/state" component={ Clock }></Route>
        <Route path="/core/events" component={ HandleEvents }></Route>
        <Route path="/core/list" component={ ListKey }></Route>
        <Route path="/core/form" component={ Form }></Route>
        <Route path="/core/lifting-state-up" component={ LiftingStateUp }></Route>
        <Route path="/core/composition" component={ Composition }></Route>
        <Route path="/core/practise" component={ Practise }></Route>
      </div>
    )
  }
}
