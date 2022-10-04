import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './reduders/cartReducer';
import { fontSizeReducer } from './reduders/fontSize';
import { imgSrcReducer } from './reduders/imgSrcReducer';


export const store = configureStore({
    reducer: {
        // Nơi chứa toàn bộ state của ứng dụng
        fontSize:fontSizeReducer,
        imgSrc: imgSrcReducer,
        cartReducer:cartReducer


        // stateA: ()=>{

        // }
    }
});



