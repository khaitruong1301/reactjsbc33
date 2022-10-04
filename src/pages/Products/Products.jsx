//rcredux

import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { addNewProduct } from '../../redux/reduders/cartReducer';
class Products extends Component {

    state = {
        arrProduct:[]
    };

    async componentDidMount() {
      console.log(123)
      //callapi 
      try {
          const result = await axios.get('https://shop.cyberlearn.vn/api/product');
  
          await this.setState({
            arrProduct:result.data.content
          });
  
          console.log(result.data.content);
  
      }catch(err){
          console.log(err)
      }
    }


  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <h3>Product list</h3>
        <div className='row'>
            {this.state.arrProduct.map((item,index)=>{
                return <div className='col-3' key={index}>
                <div className='card'>
                    <img src={item.image} alt="..." />
                    <div className='card-body'>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button className='btn btn-dark' onClick={()=>{
                            const itemCart = {...item,quantity:1};
                            // const action = {
                            //     type:'cartReducer/addNewProduct',
                            //     payload: itemCart
                            // }

                            const action = addNewProduct(itemCart);
                            console.log(action);

                            //Gửi dữ liệu lên redux
                            this.props.dispatch(action);

                        }}>Add to cart <i className='fa fa-cart-plus mx-2'></i></button>
                    </div>
                </div>
            </div>
            })}
            
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    
});


// => { return {} }   <=> => ({})



export default connect(mapStateToProps)(Products)