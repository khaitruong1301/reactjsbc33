import React, { Component } from 'react'
import ProductItem from './ProductItem'
const arrProduct = [
    { id: 1, name: "red car", img: "./img/products/red-car.jpg", price: 1000 },
    {
      id: 2,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  ];
export default class ProductList extends Component {

    renderProduct = () => {
        return arrProduct.map((item,index)=> {
            return <div className='col-3' key={index}>
                <ProductItem product={item} /> {/*{id,name,img...} */}
            </div>
        })
    }

  render() {
    let prod = {
        id:1,
        name:'Red car',
        price: 1000,
        img: './img/products/steel-car.jpg'
    }

    return (
      <div className='container'>
        {/* <div className='w-25'>
            <ProductItem product={arrProduct[1]} />
        </div> */}
        {/* <div className='w-25 mt-2'>
            <ProductItem productName="black car" img="./img/products/black-car.jpg"/>
        </div> */}
        <h3>Product list</h3>
        <div className='row'>
            {this.renderProduct()}
        </div>
      </div>
    )
  }
}
