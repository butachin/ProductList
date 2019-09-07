import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../apis/ProductApi';
import { postAddProduct } from '../../actions/ProductDetails/ProductDetailsActionCreator';
import ProductDetailsActionType from '../../actions/ProductDetails/ProductDetailsActionType';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';

export function* postAddProductData(action: ReturnType<typeof postAddProduct.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.postAddProduct>> = yield call(
    api.postAddProduct,
    action.payload
  );

  if (response.status === 201 && response.data) {
    yield put(postAddProduct.success(response.data));
  } else if (response.status === 400) {
    yield put(postAddProduct.failure());
  } else {
    yield put(postAddProduct.failure());
  }
}

const AddProductSaga = [
  takeEvery(ProductDetailsActionType.POST_ADD_PRODUCT_REQUEST, postAddProductData),
];
export default AddProductSaga;
