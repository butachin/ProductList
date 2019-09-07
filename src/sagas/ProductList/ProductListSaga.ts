import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../apis/ProductApi';
import { getProductList } from '../../actions/ProductList/ProductListActionCreator';
import productListActionType from '../../actions/ProductList/ProductListActionType';
import { PromiseGenericType } from 'src/utils/types/TypeUtils';

export function* getProductListData(action: ReturnType<typeof getProductList.request>) {
  const response: PromiseGenericType<ReturnType<typeof api.getProductList>> = yield call(
    api.getProductList,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(getProductList.success(response.data));
  } else if (response.status === 400) {
    yield put(getProductList.failure());
  } else {
    yield put(getProductList.failure());
  }
}

const ProductListSaga = [
  takeLatest(productListActionType.PRODUCT_LIST_REQUEST, getProductListData),
];
export default ProductListSaga;
