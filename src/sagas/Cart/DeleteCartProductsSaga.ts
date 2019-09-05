import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../apis/ProductApi';
import { deleteCartProducts } from '../../actions/Cart/CartActionCreator';
import CartActionType from '../../actions/Cart/CartActionType';
import { PromiseGenericType } from '../../utils/types/TypeUtils';

export function* deleteCartProductsData(action: ReturnType<typeof deleteCartProducts.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.deleteCartProducts>> = yield call(
    api.deleteCartProducts,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(deleteCartProducts.success(response.data));
  } else if (response.status === 400) {
    yield put(deleteCartProducts.failure());
  } else {
    yield put(deleteCartProducts.failure());
  }
}

const DeleteCartProductsSaga = [
  takeEvery(CartActionType.DELETE_CART_PRODUCTS_REQUEST, deleteCartProductsData),
];
export default DeleteCartProductsSaga;
