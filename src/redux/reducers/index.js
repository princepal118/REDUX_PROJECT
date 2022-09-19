// if you have multiple reducers you have to combine them.



import {combineReducer} from 'redux'

// import the preoduct reducer

import { productReducer } from './productReducer'

const reducers = combineReducer({
    allProducts: productReducer
})

