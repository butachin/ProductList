import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductList } from "src/apis/ProductListApi";
import * as productListActionCreators from "src/actions/ProductList/ProductListActionCreator"
import productListActionType from 'src/actions/ProductList/ProductListActionType';

function* getProductListData() {
    const { body, error } = yield call(getProductList); 
    if(error) {
        yield put(productListActionCreators.getProductList.failure(error));
    } else {
        if(body) {
            yield put(productListActionCreators.getProductList.success(body))
        }
    }
}

const ProductListSaga = [
    takeEvery(productListActionType.PRODUCTLIST_REQUEST, getProductListData)
];

export default ProductListSaga;