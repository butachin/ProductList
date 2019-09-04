import ProductListActionType from './ProductListActionType';
import ProductList from 'src/apis/models/ProductList';
import { createAsyncAction } from 'typesafe-actions';

export const getProductList = createAsyncAction(
  ProductListActionType.PRODUCT_LIST_REQUEST,
  ProductListActionType.PRODUCT_LIST_SUCCESS,
  ProductListActionType.PRODUCT_LIST_FAILED
)<number, ProductList, undefined>();
