// if you have multiple reducers you have to combine them.



import {combineReducers} from 'redux'

// import the preoduct reducer

import { productReducer } from './productReducer'

const reducers = combineReducers({
    allProducts: productReducer
})

export default reducers

