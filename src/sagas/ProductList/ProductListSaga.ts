import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductList } from "../../apis/ProductListApi";
import * as productListActionCreators from "../../actions/ProductList/ProductListActionCreator"
import productListActionType from '../../actions/ProductList/ProductListActionType';

function* getProductListData() {
    // const { body, error } = yield call(getProductList); 
    // if(error) {
    //     yield put(productListActionCreators.getProductList.failure(error));
    // } else {
    //     if(body) {
    //         console.log(`body:${body}`)
    //         yield put(productListActionCreators.getProductList.success(body))
    //     }
    // }
    const productList = yield call(getProductList);
    yield put(productListActionCreators.getProductList.success(productList))
}

const ProductListSaga = [
    takeEvery(productListActionType.PRODUCTLIST_REQUEST, getProductListData)
];

export default ProductListSaga;