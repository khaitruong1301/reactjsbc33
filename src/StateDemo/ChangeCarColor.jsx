import React, { Component } from 'react'

export default class ChangeCarColor extends Component {

  state = {
     imgSrc: './img/products/red-car.jpg'
  }

  handleChangeColor = (color) => {
    this.setState({
      imgSrc:`./img/products/${color}-car.jpg`
    })
  }


  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-4'>
                <img src={this.state.imgSrc} alt='...' className='w-100' />
            </div>
            <div className='col-8'>
                <button className='btn btn-dark mx-2' onClick={()=>{
                  this.setState({
                    imgSrc: './img/products/black-car.jpg'
                  });
                }}>Black car</button>
                <button className='btn btn-danger mx-2' onClick={()=>{
                  this.handleChangeColor('red');
                }}>Red red</button>
                <button className='btn btn-secondary mx-2' onClick={()=>{
                  this.handleChangeColor('silver');
                }}>silver car</button>
                <button className='btn btn-light mx-2' onClick={()=>{
                  this.handleChangeColor('steel');
                }}>steel car</button>
            </div>
        </div>
      </div>
    )
  }
}
