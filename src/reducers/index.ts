import { combineReducers } from 'redux';
import productList from './ProductList/ProductList';
import productDetails from './ProductDetails/ProductDetails';
import cartProducts from './Cart/CartProducts';

const rootReducer = combineReducers({
  productList,
  productDetails,
  cartProducts,
});

export default rootReducer;
