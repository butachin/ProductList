import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../apis/ProductApi';
import { getCartProducts } from '../../actions/Cart/CartActionCreator';
import CartActionType from '../../actions/Cart/CartActionType';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';

export function* getCartProductsData(action: ReturnType<typeof getCartProducts.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getCartProducts>> = yield call(
    api.getCartProducts
  );

  if (response.status === 200 && response.data) {
    yield put(getCartProducts.success(response.data));
  } else if (response.status === 400) {
    yield put(getCartProducts.failure());
  } else {
    yield put(getCartProducts.failure());
  }
}

const CartProductsSaga = [takeLatest(CartActionType.CART_REQUEST, getCartProductsData)];
export default CartProductsSaga;
