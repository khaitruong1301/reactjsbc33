import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div>
        Không tìm thấy thông tin 
        <NavLink to={''}>Trở về trang chủ</NavLink>

      </div>
    )
  }
}
