import React, { Component } from 'react'

export default class ProductItem extends Component {

  //this.props: thuộc tính props là thuộc tính có sẵn của react class component, dùng để nhận giá trị từ component cha (Nơi sử dụng thẻ này) truyền vào

  render() {
    // const name = this.props.productName;
    // const img = this.props.img;
    const {name,img,price,id} = this.props.product;
    return (
      <div className='card'>
        <img src={img} className="w-100" alt="..."/>
        <div className='card-body'>
            <p>{name}</p>
            <p>{price}</p>
            <button className='btn btn-dark'>Add to cart</button>
        </div>
      </div>
    )
  }
}
