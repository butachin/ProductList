import { all } from "redux-saga/effects";
import ProductListSaga from "./ProductList/ProductListSaga";

export default function* rootSaga() {
    yield all([
        ...ProductListSaga,
    ])
}