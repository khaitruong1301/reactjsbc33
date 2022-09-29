import React, { Component } from 'react'
import {connect} from 'react-redux';


class TangGiamFontSize extends Component {

    // state= {
    //     fontSize:16
    // }
  render() {
    let {fontSize,dispatch} = this.props;
    console.log(this.props); // dispatch, fontSize
    return (
      <div className='container'>
            <h3>Bài tập tăng giảm fontsize</h3>
            <p style={{fontSize:fontSize}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, eveniet?</p>
            <button className='btn btn-success mx-2' onClick={()=>{
                //action : Dữ liệu gửi lên redux
                const action = {
                    type: 'TANG_GIAM_FONT', //Thuộc tính bắt buộc (tên action)
                    payload: 1 //payload sẽ là phần dữ liệu gửi lên redux
                };

                //Dùng props.dispatch để đưa dữ liệu lên redux
                dispatch(action);

            }}>+</button>
            <button className='btn btn-success mx-2' onClick={()=>{
                const action = {
                    type:'TANG_GIAM_FONT',
                    payload: -1
                };
                //Dùng props.dispatch để đưa dữ liệu lên redux
                dispatch(action);
            }}>-</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return { // hàm return về giá trị gì thì giá trị đó sẽ chuyển thành this.props của component
        fontSize: state.fontSize
    }
}


const ComponentRedux = connect(mapStateToProps)(TangGiamFontSize);

export default ComponentRedux;




// function main() {

//     return function (Component) {
//         return Component;
//     };
    
// }


//  main()(Component)




