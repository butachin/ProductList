import { createAsyncAction } from 'typesafe-actions';
import CartActionType from './CartActionType';
import Product from 'src/apis/models/Product';

export const getCartProducts = createAsyncAction(
  CartActionType.CART_REQUEST,
  CartActionType.CART_SUCCESSED,
  CartActionType.CART_FAILED
)<undefined, Product[], undefined>();
