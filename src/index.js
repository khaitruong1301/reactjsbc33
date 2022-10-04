import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Cấu hình route cho react 
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';
import Page404 from './pages/Page404';
import ReactFormDemo from './pages/ReactFormDemo';
import ReactLifecycle from './pages/ReactLifecycle/ReactLifecycle';
//Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import TangGiamFontSize from './pages/DemoRedux/TangGiamFontSize/TangGiamFontSize';
import BaiTapChonXeRedux from './pages/DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux';
import Products from './pages/Products/Products';
import Cart from './pages/Products/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='detail' element={<Detail />}></Route>
          <Route path='formdemo' element={<ReactFormDemo />}></Route>
          <Route path='reactlifecycle' element={<ReactLifecycle />}></Route>
          <Route path='tanggiamfont' element={<TangGiamFontSize />}></Route>
          <Route path='baitapchonxe' element={<BaiTapChonXeRedux />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          
          <Route path='*' element={<Navigate to="" />}></Route>
          {/* <Route path='*' element={<Page404 />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
