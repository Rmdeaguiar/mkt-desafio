import { combineReducers } from 'redux';

//import userReducer from './user/reducer'
import cartReducer from './cart/reducer';

const rootReducer = combineReducers({ cartReducer });

export default rootReducer