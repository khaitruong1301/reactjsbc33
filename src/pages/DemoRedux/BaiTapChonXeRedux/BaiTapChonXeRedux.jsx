import React, { Component } from 'react'
import { connect } from 'react-redux'

class BaiTapChonXeRedux extends Component {

  changeColor = (color) => {
    //Tạo ra action bắt buộc có type 
    const action = {
        type:'CHANGE_COLOR',
        payload:color
    };
    //Dùng this.props.dispatch từ connect cung cấp để đưa dữ liệu lên redux
    this.props.dispatch(action)
  }
  render() {
    // console.log(this.props);
    let {imgSrc} = this.props;
    return (
      <div className='container'>
        <h3>Bài tập chọn xe redux</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={imgSrc} alt="..." className='w-100' />
            </div>
            <div className='col-6'>
                <button className='btn btn-danger mx-2' onClick={()=>{
                    this.changeColor('red');
                }}>Red</button>
                <button className='btn btn-dark mx-2' onClick={()=>{
                    this.changeColor('black');
                }}>Black</button>
                <button className='btn btn-light mx-2' onClick={()=>{
                    this.changeColor('silver');
                }}>Silver</button>
                <button className='btn btn-secondary mx-2' onClick={()=>{
                    this.changeColor('steel');
                }}>Steel</button>

            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        imgSrc: state.imgSrc
    }
}

export default connect(mapStateToProps)(BaiTapChonXeRedux);
