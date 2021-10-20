import React, { Component, Suspense } from 'react'
import getRouter from '@/router/router'

import GlobalNav from '@/components/GlobalNav/GlobalNav'
import Loading from '@/components/Loading/Loading'


// 导航菜单
const navList = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/core/index',
    name: '核心概念'
  },
  {
    path: '/advanced',
    name: '高级指引'
  },
  {
    path: '/api',
    name: 'api 参考'
  },
  {
    path: '/hook',
    name: 'hook'
  },
  {
    path: '/about',
    name: 'about'
  }
]

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Suspense fallback={<Loading />}>
          <GlobalNav navList={ navList } />
          { getRouter() }
        </Suspense>
      </div>
    )
  }
}
