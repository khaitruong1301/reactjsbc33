

const stateDefault = './img/products/red-car.jpg'


export const imgSrcReducer = (state=stateDefault,action) => {
    // console.log(action);
    switch(action.type) {
        case 'CHANGE_COLOR': {
            state = `./img/products/${action.payload}-car.jpg`;
            return state;
        }
        default : return state;
    }
}




