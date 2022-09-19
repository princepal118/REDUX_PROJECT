//reducer takes the initial state and the action

import { ActionTypes } from "../constants/action-types";


const initalState = {
    products: [
        {
        id: 1,
        title: "Prince",
        category: "Programmer"
        }
        
    ]
}
export const productReducer = (state, {type,payload}) => {
    // console.log('action', action)

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
           return state
    
        default:
            return state
    }

}