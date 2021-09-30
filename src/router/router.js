import React from 'react'
import { Switch, Route } from "react-router"

import Home from '@/pages/Home/Home'
import Core from '@/pages/Core/Core'
import Advanced from '@/pages/Advanced/Advanced'
import NotFound from '@/pages/NotFound/NotFound'

const getRouter = () => (
  <Switch>
    <Route path="/" exact component={ Home }></Route>
    <Route path="/core/" children={(route) => {
      console.log('route', route)
      return (
        <Core />
      )
    }}></Route>
    <Route path="/advanced" component={ Advanced }></Route>
    <Route component={ NotFound }></Route>
  </Switch>
)

export default getRouter
