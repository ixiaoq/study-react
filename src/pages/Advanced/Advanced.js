import React, { Component } from 'react'

import Content from './components/Context'
import ErrorBoundaries from './components/ErrorBoundaries'
import Refs from './components/Refs'
import Fragments from './components/Fragments'

export default class Advanced extends Component {
  render() {
    return (
      <div>
        <Content />
        <ErrorBoundaries />
        <Refs />
        <Fragments />
      </div>
    )
  }
}
