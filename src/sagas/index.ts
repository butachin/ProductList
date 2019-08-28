import { all } from 'redux-saga/effects';
import ProductListSaga from './ProductList/ProductListSaga';
import ProductDetailsSaga from './ProductDetails/ProductDetails';

export default function* rootSaga() {
  yield all([...ProductListSaga, ...ProductDetailsSaga]);
}
