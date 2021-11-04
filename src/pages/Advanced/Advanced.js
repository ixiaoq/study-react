import React, { Component } from 'react'

import Context from './components/Context'
import ErrorBoundaries from './components/ErrorBoundaries'
import Refs from './components/Refs'
import Fragments from './components/Fragments'
import HOCComponent from './components/HOCComponent'

export default class Advanced extends Component {
  render() {
    return (
      <div>
        <Context />
        <ErrorBoundaries />
        <Refs />
        <Fragments />
        <HOCComponent />
      </div>
    )
  }
}
