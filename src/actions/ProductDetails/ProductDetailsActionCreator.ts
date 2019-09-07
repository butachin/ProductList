import ProductDetailsActionType from './ProductDetailsActionType';
import ProductDetails from 'src/apis/models/ProductDetails';
import { createAsyncAction } from 'typesafe-actions';

export const getProductDetails = createAsyncAction(
  ProductDetailsActionType.PRODUCT_DETAILS_REQUEST,
  ProductDetailsActionType.PRODUCT_DETAILS_SUCCESSED,
  ProductDetailsActionType.PRODUCT_DETAILS_FAILED
)<number, ProductDetails, undefined>();
