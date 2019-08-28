import ProductDetailsActionType from './ProductDetailsActionType';
import ProductDetails from 'src/apis/ProductDetails/ProductDetails';
import { createAsyncAction } from 'typesafe-actions';

export const getProductDetails = createAsyncAction(
  ProductDetailsActionType.PRODUCTDETAILS_REQUEST,
  ProductDetailsActionType.PRODUCTDETAILS_SUCCESS,
  ProductDetailsActionType.PRODUCTDETAILS_FAILED
)<number, ProductDetails[], Error>();