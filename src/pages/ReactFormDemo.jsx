import React, { Component } from 'react'

export default class ReactFormDemo extends Component {

    state = {
        values: {
            id: '',
            name: '',
            price: '',
            image: '',
            description: '',
            productType: 'phone'
        },
        errors:{
            id: '',
            name: '',
            price: '',
            image: '',
            description: '',
        },
    

    }

    handleChangeInput = (e) => {
        let {value,id} = e.target; //id:price, value: '1000'
        let newValues = {...this.state.values};
        newValues[id] = value;

        let newErrors = {...this.state.errors};
        //Xử lý lỗi:
        let messError = '';
        if(value.trim() =='') {
            messError = id + ' không được bỏ trống !';
        }else {
            let dataType = e.target.getAttribute('data-type');
            if(dataType === 'number'){
                let regexNumber = /^\d+$/;
                if(!regexNumber.test(value)){
                    messError = id + ' phải nhập số!';
                }
            }
            if(dataType == 'email') {
                let regexEmail = /abc/;
                if(!regexEmail.test(value)){
                    messError = id + ' không đúng định dạng!';
                }
            }
        }
        newErrors[id] = messError;



        //setState
        this.setState({
            values:newValues,
            errors:newErrors
        },()=>{
            console.log(this.state);
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); //Hàm này giúp chặn sự kiện reload của browser khi form submit
        console.log('submit', this.state);

    }
    render() {
        return (
            <form className='container' onSubmit={this.handleSubmit}>
                <h3>Create product</h3>
                <div className='card'>
                    <div className='card-header bg-dark text-warning'>
                        <h3>Product info</h3>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>id</p>
                                    <input className='form-control' id="id" name="id" onInput={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.state.errors.id}</p>
                                </div>
                                <div className='form-group'>
                                    <p>name</p>
                                    <input className='form-control' id="name" name="name" onInput={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.state.errors.name}</p>
                                </div>
                                <div className='form-group'>
                                    <p>price</p>
                                    <input data-type="number" className='form-control' id="price" name="price" onInput={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.state.errors.price}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>image</p>
                                    <input className='form-control' id="image" name="image" onInput={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.state.errors.image}</p>
                                </div>
                                <div className='form-group'>
                                    <p>productType</p>
                                    <select id="productType" className='form-control' onInput={this.handleChangeInput}>
                                        <option value={"phone"}>Phone</option>
                                        <option value={"lablet"}>Tablet</option>
                                        <option value={"laptop"}>Laptop</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <p>description</p>
                                    <textarea
                                        onInput={this.handleChangeInput} className='form-control' id="description" name="description" />
                                           <p className='text text-danger'>{this.state.errors.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-success' type='submit'>Create</button>
                    </div>
                </div>
            </form>
        )
    }
}
