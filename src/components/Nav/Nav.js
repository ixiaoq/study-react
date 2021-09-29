import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './Nav.css'


export default class Nav extends Component {
  render() {

    const NavList = this.props.navList.map((nav) => (
      <Link to={ nav.path } key={ nav.path }>{ nav.name }</Link>
    ));

    return (
      <div className={ style.navList }>
        { NavList }
      </div>
    )
  }
}
