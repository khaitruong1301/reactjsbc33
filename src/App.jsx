//rfc

import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from './Components/HeaderHome/HeaderHome'
import Home from './Components/Home/Home'
import DemoDataBinding from './DataBinding/DemoDataBinding/DemoDataBinding'
import HandleEvent from './HandleEvent/HandleEvent'
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet'
import DemoChildrenProps from './Props/DemoChildrenProps/DemoChildrenProps'
import ProductList from './Props/DemoProps/ProductList'
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore'
import ShoesApp from './Props/ShoesApp/ShoesApp'
import RenderArrayComponent from './RenderArrayComponent/RenderArrayComponent'
import HeaderLogin from './StateDemo/HeaderLogin'
import StateDemo from './StateDemo/StateDemo'
import StyleDemo from './StyleDemo/StyleDemo'

export default function App() {
  return (
    <div>
      <HeaderHome />
      {/* outlet Là vị trí hiển thị component route con  */}
      <div style={{minHeight:800}}>
        <Outlet />
      </div>
      <footer className='bg-dark text-light p-5 text-center'>footer</footer>
    </div>
  )
}
