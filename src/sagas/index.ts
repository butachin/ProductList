import { all } from 'redux-saga/effects';
import ProductListSaga from './ProductList/ProductListSaga';
import ProductDetailsSaga from './ProductDetails/ProductDetails';
import AddProductSaga from './ProductDetails/AddProduct';
import CartProductsSaga from './Cart/CartProductsSaga';
import DeleteCartProductsSaga from './Cart/DeleteCartProductsSaga';

export default function* rootSaga() {
  yield all([
    ...ProductListSaga,
    ...ProductDetailsSaga,
    ...AddProductSaga,
    ...CartProductsSaga,
    ...DeleteCartProductsSaga,
  ]);
}
