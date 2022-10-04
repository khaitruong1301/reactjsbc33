//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { changeQuantity, deleteItem } from '../../redux/reduders/cartReducer'
class Cart extends Component {


    render() {
        console.log(this.props.cart)
        return (
            <div className='container'>
                <h3>Cart</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>image</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((itemCart, index) => {

                            return <tr key={index}>
                                <td>{itemCart.id}</td>
                                <td>{itemCart.name}</td>
                                <td><img src={itemCart.image} alt="..." width={50} height={50} /></td>
                                <td>{itemCart.price}</td>
                                <td>
                                    <button className='btn btn-dark mx-2' onClick={()=>{
                                        //tạo ra action 
                                        const action = changeQuantity({
                                            id:itemCart.id,
                                            quantity:1
                                        })
                                        //đưa action lên reducer
                                        this.props.dispatch(action);
                                    }}>+</button>
                                    {itemCart.quantity}
                                    <button className='btn btn-dark mx-2' onClick={()=>{
                                         //tạo ra action 
                                         const action = changeQuantity({
                                            id:itemCart.id,
                                            quantity:-1
                                        })
                                        //đưa action lên reducer
                                        this.props.dispatch(action);
                                    }}>-</button>
                                </td>
                                <td>{itemCart.price * itemCart.quantity}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => {
                                        //tạo ra action đưa dữ liệu lên redux
                                        const action = deleteItem(itemCart.id);
                                        /* 
                                            action = {
                                                type:'cartReducer/deleteItem',
                                                payload: itemCart.id
                                            }
                                        */

                                        this.props.dispatch(action);
                                    }}>
                                        <i className='fa fa-trash'></i>
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart
})



export default connect(mapStateToProps)(Cart)