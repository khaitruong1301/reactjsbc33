import React, { Component } from 'react'
import Tables from '../Components/Tables/Tables';

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
        isSubmit: true,
        arrProduct: [
            {id:1,name:'product 1',price:1000,image:'https://picsum.photos/id/1/50/50',description:'desc prod 1',productType:'phone'},
            {id:2,name:'product 2',price:1000,image:'https://picsum.photos/id/2/50/50',description:'desc prod 2',productType:'laptop'},
        ]    

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

        let submit = false;
        for(let key in newValues){ //price = 1000 => price.toString() => '1000'.trim();
            if(newValues[key].toString().trim() === '') {
                submit = true;
            }
        }

        //setState
        this.setState({
            values:newValues,
            errors:newErrors,
            isSubmit:submit
        },()=>{
            console.log(this.state);
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); //Hàm này giúp chặn sự kiện reload của browser khi form submit
        console.log('submit', this.state);
        //Kiểm tra lỗi trước khi submit
        
        //Lấy ra object error từ state
        let {errors} = this.state;
        for(let key in errors) {
            if(errors[key] !== ''){
                alert('Dữ liệu không hợp lệ !');
                //Dừng lại 
                return;
            }
        }
        //Thêm dữ liệu vào arrProduct
        let newProduct = {...this.state.values}
        this.state.arrProduct.push(newProduct);
        //Cập nhật lại state
        this.setState({
            arrProduct:this.state.arrProduct
        }, ()=> {
            this.luuStorage();
        })
    }

    editProduct = (prodEdit) => {
        console.log(prodEdit);
        this.setState({
            values:prodEdit
        })
    }

    deleteProduct = (idClick) => {
        console.log(idClick);
        // this.state.arrProduct = this.state.arrProduct.filter(prod => prod.id !== idClick);
        let indexDel = this.state.arrProduct.findIndex(prod=>prod.id === idClick);

        this.state.arrProduct.splice(indexDel,1);


        //setState để render lại giao diện
        this.setState({
            arrProduct:this.state.arrProduct
        },() => {
            this.luuStorage();
        });
    }

    handleUpdate = () =>{
        let {values,arrProduct} = this.state;
        //Dữ liệu đang edit: this.state.values
        //Dữ liệu cần thay đổi: this.state.arrProduct
        let prodUpdate = arrProduct.find(prod => prod.id === values.id);

        // prodUpdate.name = values.name;
        // prodUpdate.price = values.price;
        // prodUpdate.description = values.description;
        // prodUpdate.image = values.image;
        // prodUpdate.productType = values.productType;
        for(let key in prodUpdate){
            prodUpdate[key] = values[key];
        }

        this.setState({
            arrProduct:arrProduct
        }, () => {
            this.luuStorage();
        })
    }


    luuStorage  = () => {
        let stringArrProduct = JSON.stringify(this.state.arrProduct);
        localStorage.setItem('arrProduct',stringArrProduct);

    }
    layStore = () => {
        if(localStorage.getItem('arrProduct')) //Nếu store có giá trị thì lấy dữ liệu từ store trả về
        {
             let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
             return arrProduct;
        }
        return [];
    }

    static getDerivedStateFromProps(newProps,currentState){
        // let arrProduct = [];
        // if(localStorage.getItem('arrProduct')) //Nếu store có giá trị thì lấy dữ liệu từ store trả về
        // {
        //      arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
        // }
        // let arrProductStorage = arrProduct;
        // //Trước khi component load giao diện thay đổi state ở đây
        // let newState = {...currentState, arrProduct: arrProductStorage};
        // return newState;
    }




    render() {
        let {id,name,price,image,description,productType} = this.state.values;
        return (
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
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
                                    <input className='form-control' id="id" name="id" onInput={this.handleChangeInput} value={id} />
                                    <p className='text text-danger'>{this.state.errors.id}</p>
                                </div>
                                <div className='form-group'>
                                    <p>name</p>
                                    <input className='form-control' id="name" name="name" onInput={this.handleChangeInput} value={name} />
                                    <p className='text text-danger'>{this.state.errors.name}</p>
                                </div>
                                <div className='form-group'>
                                    <p>price</p>
                                    <input data-type="number" className='form-control' id="price" name="price" value={price} onInput={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.state.errors.price}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>image</p>
                                    <input className='form-control' id="image" name="image" onInput={this.handleChangeInput} value={image} />
                                    <p className='text text-danger'>{this.state.errors.image}</p>
                                </div>
                                <div className='form-group'>
                                    <p>productType</p>
                                    <select id="productType" className='form-control' onInput={this.handleChangeInput} value={productType}>
                                        <option value={"phone"}>Phone</option>
                                        <option value={"lablet"}>Tablet</option>
                                        <option value={"laptop"}>Laptop</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <p>description</p>
                                    <textarea
                                        onInput={this.handleChangeInput} className='form-control' id="description" name="description" value={description} />
                                           <p className='text text-danger'>{this.state.errors.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-success' type='submit' disabled={this.state.isSubmit}>Create</button>
                        <button className='btn btn-primary mx-2' type='button' disabled={this.state.isSubmit} onClick={()=>{
                            this.handleUpdate();
                        }}>Update</button>
                    </div>
                </div>
            </form>
            <Tables arrProduct={this.state.arrProduct} delProduct={this.deleteProduct} editProduct={this.editProduct} />
            </div>
        )
    }

    componentDidMount(){
        //Sau khi giao diện render  => lấy dữ liệu từ store đỗ lên state
        //window.onload 
        this.setState({
            arrProduct:this.layStore()
        })
    }
}
