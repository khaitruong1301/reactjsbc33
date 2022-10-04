//rxslice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [

    ]
}

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addNewProduct: (state, { type, payload }) => {
            //  B1: Lấy dữ liệu từ payload
            const itemCart  = payload;
            //B2: Xử lý thay đổi state
            const item = state.cart.find(sp => sp.id === itemCart.id);
            if (item) { //Nếu sản phẩm có trong giỏ hàng => tăng số lượng
                item.quantity = item.quantity + 1;
            } else {
                //Nếu sản phẩm chưa có trong giỏ hàng thì lấy sản phẩm đó thêm vào giỏ hàng 
                state.cart = [...state.cart, itemCart]
            }
        },
        deleteItem : (state,{type,payload}) => {
            //B1: Lấy dữ liệu từ payload gửi lên
            const id = payload; //Gửi lên id của sp được click
            //B2: cập nhật state
            state.cart = state.cart.filter(item=>item.id !== id)
        },
        changeQuantity: (state,{payload})=>{
            //payload: {id:'',quantity:1 | -1}
            //Lấy dữ liệu từ payload
            const {id,quantity} = payload;
            //Cập nhật state.cart
            //Tìm ra sản phẩm cần tăng giảm số lượng dựa vào id
            const item = state.cart.find(itemCart => itemCart.id === id);
            item.quantity += quantity;

        }
    }
});
export const { addNewProduct,deleteItem,changeQuantity} = cartReducer.actions
export default cartReducer.reducer









// //rxreducer
// const initialState = {
//     cart: [
//         {id:1,name:'product 1',price:1000,quantity:2,image:'https://i.pravatar.cc'},

//     ]
// }
// /*
//     Nếu như state là object, array ? => lưu địa chỉ ô nhớ
//     {...object} - [...object]
// */
// export default (state = initialState, { type, payload }) => {
//     console.log('payload',payload)
//   switch (type) {
//     case 'ADD_NEW_PRODUCT' : {
//         //B1: Lấy dữ liệu từ payload
//         const {itemCart} = payload; 
//         //B2: Xử lý thay đổi state
//         const item = state.cart.find(sp => sp.id === itemCart.id);
//         if(item){ //Nếu sản phẩm có trong giỏ hàng => tăng số lượng
//             item.quantity = item.quantity + 1;
//         }else {
//             //Nếu sản phẩm chưa có trong giỏ hàng thì lấy sản phẩm đó thêm vào giỏ hàng 
//             state.cart = [...state.cart,itemCart]
//         }
//     };

//   default:
//     return state
//   }
// }






