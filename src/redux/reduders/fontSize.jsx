

const stateDefault = 30


export const fontSizeReducer = (state=stateDefault,action) => {
    // console.log(action);
    switch(action.type) {
        case 'TANG_GIAM_FONT': {
            //Xử lý
            state += action.payload;
            return state;//trả về state mới
        }
        default : return state;
    }
}