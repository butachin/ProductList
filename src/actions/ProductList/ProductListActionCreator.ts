import ProductListActionType from './ProductListActionType';
import ProductList from 'src/apis/ProductList/ProductList';
import { createAsyncAction } from 'typesafe-actions';

export const getProductList = createAsyncAction(
  ProductListActionType.PRODUCTLIST_REQUEST,
  ProductListActionType.PRODUCTLIST_SUCCESS,
  ProductListActionType.PRODUCTLIST_FAILED
)<number, ProductList[], undefined>();
