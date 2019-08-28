import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductDetails } from '../../apis/ProductApi';
import * as ProductDetailsActionCreators from '../../actions/ProductDetails/ProductDetailsActionCreator';
import ProductDetailsActionType from '../../actions/ProductDetails/ProductDetailsActionType';

function* getProductDetailsData() {
  // const { body, error } = yield call(getProductList);
  // if(error) {
  //     yield put(productListActionCreators.getProductList.failure(error));
  // } else {
  //     if(body) {
  //         console.log(`body:${body}`)
  //         yield put(productListActionCreators.getProductList.success(body))
  //     }
  // }
  const ProductDetails = yield call(getProductDetails);
  yield put(ProductDetailsActionCreators.getProductDetails.success(ProductDetails));
}

const ProductDetailsSaga = [
  takeEvery(ProductDetailsActionType.PRODUCTDETAILS_REQUEST, getProductDetailsData),
];

export default ProductDetailsSaga;
