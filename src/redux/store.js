//Create a store for (method redux)
import {createStore} from 'redux'
import cakeReducer from './cake/cakeReducers'

const store = createStore(cakeReducer)