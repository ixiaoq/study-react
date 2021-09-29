import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '@/layouts/App/App'

import './style/global.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

