import Product from 'src/apis/models/Product';
import CartAction from 'src/actions/Cart/CartAction';
import CartActionType from 'src/actions/Cart/CartActionType';
import ProductDetailsAction from 'src/actions/ProductDetails/ProductDetailsAction';
import ProductDetailsActionType from 'src/actions/ProductDetails/ProductDetailsActionType';

const initialState: Product[] = [];

export default function cartProducts(
  state: Product[] = initialState,
  action: CartAction | ProductDetailsAction
): Product[] {
  switch (action.type) {
    case CartActionType.CART_SUCCESSED:
      return [...action.payload];

    case CartActionType.DELETE_CART_PRODUCTS_SUCCESSED:
      return []; // カートの中身を空にする

    case ProductDetailsActionType.POST_ADD_PRODUCT_SUCCESSED:
      return [...state, action.payload];
    default:
      return state;
  }
}
