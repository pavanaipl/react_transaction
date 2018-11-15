import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import logger from 'redux-logger'

const initialstate = {};

const middleware=[thunk, logger]

const store = createStore(rootReducer, initialstate, applyMiddleware(...middleware));

export default store