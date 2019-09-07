import { combineReducers } from 'redux';
import productList from './ProductList/ProductList';
import productDetails from './ProductDetails/ProductDetails';
import cartProducts from './Cart/CartProducts';
import purchasedProducts from './PurchasedProducts/PurchasedProducts';

const rootReducer = combineReducers({
  productList,
  productDetails,
  cartProducts,
  purchasedProducts,
});

export default rootReducer;
