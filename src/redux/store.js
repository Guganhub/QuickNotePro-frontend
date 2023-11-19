import {combineReducers,legacy_createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import userReducer from './users/userReducer';
import { noteReducers } from './notes/noteReducers';

let rootReducer = combineReducers({
    userReducer : userReducer,
    noteReducers:noteReducers
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
