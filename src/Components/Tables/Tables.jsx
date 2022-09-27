import React, { Component } from 'react'

export default class Tables extends Component {


    render() {
        const {arrProduct,delProduct,editProduct} = this.props;
        return (
            <table className='table mt-2'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>name</th>
                        <th>price</th>
                        <th>desc</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {arrProduct.map((prod,index)=>{
                    return  <tr key={index}>
                    <td>{prod.id}</td>
                    <td>
                        <img src={prod.image} alt="..." width={50} height={50} />
                    </td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>{prod.description}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>{
                            delProduct(prod.id);
                        }}>Xoá</button>
                        <button className='btn btn-primary mx-2' onClick={()=>{
                            editProduct(prod);
                        }}>Sửa</button>
                    </td>
                </tr>
                   })}
                </tbody>

            </table>
        )
    }
}
