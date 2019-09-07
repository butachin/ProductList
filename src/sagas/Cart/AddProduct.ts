import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../apis/ProductApi';
import { postAddProduct } from '../../actions/Cart/CartActionCreator';
import CartActionType from '../../actions/Cart/CartActionType';
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

const AddProductSaga = [takeLatest(CartActionType.POST_ADD_PRODUCT_REQUEST, postAddProductData)];
export default AddProductSaga;
