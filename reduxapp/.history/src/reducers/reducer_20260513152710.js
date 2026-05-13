import { changeNumber } from './reducer/rootReducer.js';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    changeNumber
})

export default rootReducer;