import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../apis/ProductApi';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';
import { postPayments } from 'src/actions/Cart/CartActionCreator';
import CartActionType from 'src/actions/Cart/CartActionType';
export function* postPaymentsData(action: ReturnType<typeof postPayments.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.postPayments>> = yield call(
    api.postPayments,
    action.payload
  );
  if (response.status === 201 && response.data) {
    yield put(postPayments.success(response.data));
  } else if (response.status === 400) {
    yield put(postPayments.failure());
  } else {
    yield put(postPayments.failure());
  }
}
const PostPaymentsSaga = [takeLatest(CartActionType.POST_PAYMENTS_REQUEST, postPaymentsData)];
export default PostPaymentsSaga;
