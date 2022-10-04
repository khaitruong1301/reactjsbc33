import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
 class HeaderHome extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="">Cybersoft</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'} to="/home" aria-current="page" style={({isActive}) => isActive ? {color:'red',borderRadius:'5px'} : {}}>Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}  to="/login"  style={({isActive}) => isActive ? {color:'red',borderRadius:'5px'} : {}}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}  to="/register"  style={({isActive}) => isActive ? {color:'red',borderRadius:'5px'} : {}}>Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}  to="/formdemo"  style={({isActive}) => isActive ? {color:'red',borderRadius:'5px'} : {}}>React Form</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}  to="/reactlifecycle"  style={({isActive}) => isActive ? {color:'red',borderRadius:'5px'} : {}}>React lifecycle</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux - Demo</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/tanggiamfont">Demo - tăng giảm fontsize</NavLink>
                                <NavLink className="dropdown-item" to="/baitapchonxe">Demo chọn xe</NavLink>
                                <NavLink className="dropdown-item" to="/products">Demo giỏ hàng</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <NavLink style={{textDecoration:'none'}} className="nav-item text-light px-5" to={'cart'}>
                            <i className='fa fa-cart-plus'></i> ({this.props.cart.length})
                                -
                            {this.props.cart.reduce((tt,itemCart,index)=>{
                                return tt += itemCart.quantity * itemCart.price;
                            },0).toLocaleString()} $
                        </NavLink>
                    </form>
                </div>
            </nav>

        )
    }
}

const mapStateToProps = (state) => ({

    cart: state.cartReducer.cart

})



export default connect(mapStateToProps)(HeaderHome)




