import { combineReducers } from 'redux';
import productList from './ProductList/ProductList';
import productDetails from './ProductDetails/ProductDetails';

const rootReducer = combineReducers({
  productList,
  productDetails,
});

export default rootReducer;
