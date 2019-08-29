import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../apis/ProductApi';
import { getProductDetails } from '../../actions/ProductDetails/ProductDetailsActionCreator';
import ProductDetailsActionType from '../../actions/ProductDetails/ProductDetailsActionType';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';

export function* getProductDetailsData(action: ReturnType<typeof getProductDetails.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getProductDetails>> = yield call(
    api.getProductDetails,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(getProductDetails.success(response.data));
  } else if (response.status === 400) {
    yield put(getProductDetails.failure());
  } else {
    yield put(getProductDetails.failure());
  }
}

const ProductDetailsSaga = [
  takeEvery(ProductDetailsActionType.PRODUCTDETAILS_REQUEST, getProductDetailsData),
];
export default ProductDetailsSaga;
