import {combineReducers} from 'redux';
import modeReducer from '../redux/reducers/mode'

const createRootReducer = combineReducers({
    modeReducer
})


export default createRootReducer