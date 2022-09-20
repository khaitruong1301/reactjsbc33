import React, { Component } from 'react'
import CarItem from './CarItem';

export default class CarList extends Component {

    renderProduct = () => {
        const { products,xemChiTiet } = this.props;
        return products.map((car,index)=>{
            return <div className='col-3' key={index}>
                <CarItem carItem={car} xemChiTiet={xemChiTiet}/>
                
            </div>
        })
    }

    render() {

        return (
            <div>
                <h3 className='text-center'>Product list</h3>
                <div className='row'>
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
