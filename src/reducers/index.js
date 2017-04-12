import {combineReducers} from 'redux';
import itemReducer from './item';
import shoppingCartReducer from './shoppingCart';

const RootReducer = combineReducers({
 item:itemReducer,
 shoppingCart:shoppingCartReducer
});
export default RootReducer;
