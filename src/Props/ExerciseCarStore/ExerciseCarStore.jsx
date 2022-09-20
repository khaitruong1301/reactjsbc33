import React, { Component } from 'react'
import CarList from './CarList'
import Modal from './Modal'

const products = [
    { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
    { id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
];
export default class ExerciseCarStore extends Component {

    state = {
        srcImg: './img/products/red-car.jpg'
    }

    //state đặt trên component nào thì setState sẽ đặt tại component đó

    xemChiTiet = (carClick)=> {
        this.setState({
            srcImg: carClick.img
        })
    }

    render() {
        return (
            <div className='container'>
                {/* <img src={this.state.srcImg} /> */}
                <Modal imgCar= {this.state.srcImg} />
                <CarList products={products} xemChiTiet={this.xemChiTiet}/>
            </div>
        )
    }
}
