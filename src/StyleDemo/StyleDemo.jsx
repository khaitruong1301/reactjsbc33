import React, { Component } from 'react'
//Cách 1: Khi import tất cả các component đều có thể sử dụng được (Thường hay sử dụng)
import '../assets/styles.css';

import style from './StyleDemo.module.css';

export default class StyleDemo extends Component {

  render() {
    return (
      <div className='container'>
        <h3 className='color-red'>Cybersoft</h3>
        <p className={`text-center ${style['color-pink']}`}>hello 123</p>
        <div style={{
            color:'green',
            border:'10px solid red',
            padding:'15px',
            backgroundColor:'#000'          
        }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quis delectus eveniet, excepturi iusto voluptas nisi dolorem provident consequuntur commodi ipsum aspernatur ab nobis saepe libero. Unde vel nihil obcaecati?</div>
      </div>
    )
  }
}
