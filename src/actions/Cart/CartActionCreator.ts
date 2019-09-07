import { createAsyncAction } from 'typesafe-actions';
import CartActionType from './CartActionType';
import Product from 'src/apis/models/Product';

export const getCartProducts = createAsyncAction(
  CartActionType.CART_REQUEST,
  CartActionType.CART_SUCCESSED,
  CartActionType.CART_FAILED
)<undefined, Product[], undefined>();

export const postPayments = createAsyncAction(
  CartActionType.POST_PAYMENTS_REQUEST,
  CartActionType.POST_PAYMENTS_SUCCESSED,
  CartActionType.POST_PAYMENTS_FAILED
)<Product[], Product[], undefined>();

export const deleteCartProducts = createAsyncAction(
  CartActionType.DELETE_CART_PRODUCTS_REQUEST,
  CartActionType.DELETE_CART_PRODUCTS_SUCCESSED,
  CartActionType.DELETE_CART_PRODUCTS_FAILED
)<number, Product[], undefined>();
