import React, { Component } from "react";

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

export default class RenderArrayComponent extends Component {
  renderProduct = () => {
    {
      //output: [<tr></tr>,<tr></tr>]
      //Cách 1:
      // let arrTr = [];
      // for(let prod of arrProduct){
      //     //tạo ra đối tượng jsx là tr
      //     let trx = <tr key={prod.id}>
      //         <td>{prod.id}</td>
      //         <td>{prod.name}</td>
      //         <td><img src={prod.img} alt="..." width={50} height={50} /></td>
      //         <td>{prod.price}</td>
      //         <td>
      //             <button className='btn btn-danger'>Del</button>
      //         </td>
      //     </tr>;
      //     //đưa object thẻ tr vào mảng
      //     arrTr.push(trx); // [<tr>,<tr>,<tr>]
      // }
      // return arrTr;
    }
    //Cách 2:
    return arrProduct.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.img} alt="..." width={50} height={50} />
          </td>
          <td>{item.price}</td>
          <td>
            <button className="btn btn-danger">Del</button>
          </td>
        </tr>
      );
    });

  };

  renderCardProduct = () => {
    return arrProduct.map((item)=> {
        return <div className="col-3" key={item.id}>
            <div className="card">
                <img src={item.img} alt="..." className="w-100" />
                <div className="card-body">
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                    <button className="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
    })

  }

  render() {
    console.log(typeof (<div>1</div>));
    return (
      <div className="container">
        <h3 className="text-center">Product list</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr />
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">
            {this.renderCardProduct()}
        </div>
      </div>
    );
  }
}
