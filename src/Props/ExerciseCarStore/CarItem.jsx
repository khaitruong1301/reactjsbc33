import React, { Component } from 'react'

export default class CarItem extends Component {
  render() {
    const {carItem,xemChiTiet} = this.props;


    return (
      <div className='card'>
        <img src={carItem.img} alt='...' />
        <div className='card-body'>
            <p>{carItem.name}</p>
            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
              xemChiTiet(carItem)
            }}>Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
