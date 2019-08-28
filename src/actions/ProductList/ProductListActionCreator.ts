import productListActionType from "./ProductListActionType";
import IProduct from "src/apis/ProductList";
import { createAsyncAction } from 'typesafe-actions'

export const getProductList = createAsyncAction(
    productListActionType.PRODUCTLIST_REQUEST,
    productListActionType.PRODUCTLIST_SUCCESS,
    productListActionType.PRODUCTLIST_FAILED
)<undefined, IProduct[], Error>();