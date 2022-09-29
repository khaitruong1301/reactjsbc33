import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        // Nơi chứa toàn bộ state của ứng dụng
        fontSize:(state=30,action) => {
            // console.log(action);
            switch(action.type) {
                case 'TANG_GIAM_FONT': {
                    //Xử lý
                    state += action.payload;
                    return state;//trả về state mới
                }
                default : return state;
            }
        },
        imgSrc: (state='./img/products/red-car.jpg',action) => {
            // console.log(action);
            switch(action.type) {
                case 'CHANGE_COLOR': {
                    state = `./img/products/${action.payload}-car.jpg`;
                    return state;
                }
                default : return state;
            }

        }


        // stateA: ()=>{

        // }
    }
});



