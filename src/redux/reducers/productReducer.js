//reducer takes the initial state and the action
import { ActionTypes } from "../constants/action-types";
const initalState = {
    products: []
}

export const productReducer = (state= initalState, {type,payload}) => {
    // console.log('initalState ==============>>>', initalState)

    // console.log('type ==============>>>', type)

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products:payload };
    
        default:
            return state
    }

}