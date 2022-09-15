import React, { Component } from "react";

export default class Item extends Component {
  render() {
    //this.props không thể gán lại giá trị (read only)
    const {image,price,name} = this.props.prod
    return (
      <div className="card">
        <img src={image} alt="..." />
        <div className="card-body">
          <h3>{name}</h3>
          <p>{price}</p>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    );
  }
}
