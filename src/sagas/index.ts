import { all } from 'redux-saga/effects';
import ProductListSaga from './ProductList/ProductListSaga';
import ProductDetailsSaga from './ProductDetails/ProductDetails';
import AddProductSaga from './Cart/AddProduct';
import CartProductsSaga from './Cart/CartProductsSaga';
import DeleteCartProductsSaga from './Cart/DeleteCartProductsSaga';
import PostPaymentsSaga from './Cart/PostPaymentsSaga';
import GetPurchasedProductsSaga from './PurchasedProducts/GetPurchasedProducts';

export default function* rootSaga() {
  yield all([
    ...ProductListSaga,
    ...ProductDetailsSaga,
    ...AddProductSaga,
    ...PostPaymentsSaga,
    ...CartProductsSaga,
    ...DeleteCartProductsSaga,
    ...GetPurchasedProductsSaga,
  ]);
}
