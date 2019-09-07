import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../apis/ProductApi';
import { getPurchasedProducts } from '../../actions/PurchasedProducts/PurchasedProductsActionCreator';
import PurchasedProductsActionType from '../../actions/PurchasedProducts/PurchasedProductsActionType';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';

export function* getPurchasedProductsData(action: ReturnType<typeof getPurchasedProducts.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getPurchasedProducts>> = yield call(
    api.getPurchasedProducts
  );
  if (response.status === 200 && response.data) {
    yield put(getPurchasedProducts.success(response.data));
  } else if (response.status === 400) {
    yield put(getPurchasedProducts.failure());
  } else {
    yield put(getPurchasedProducts.failure());
  }
}

const GetPurchasedProductsSaga = [
  takeLatest(PurchasedProductsActionType.GET_PURCHASED_PRODUCTS_REQUEST, getPurchasedProductsData),
];

export default GetPurchasedProductsSaga;
