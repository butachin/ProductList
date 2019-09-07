import { createAsyncAction } from 'typesafe-actions';
import PurchasedProducutsActionType from './PurchasedProductsActionType';
import Product from 'src/apis/models/Product';

export const getPurchasedProducts = createAsyncAction(
  PurchasedProducutsActionType.GET_PURCHASED_PRODUCTS_REQUEST,
  PurchasedProducutsActionType.GET_PURCHASED_PRODUCTS_SUCCESSED,
  PurchasedProducutsActionType.GET_PURCHASED_PRODUCTS_FAILED
)<undefined, Product[], undefined>();
