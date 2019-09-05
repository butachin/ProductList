import Product from 'src/apis/models/Product';
import CartAction from 'src/actions/Cart/CartAction';
import CartActionType from 'src/actions/Cart/CartActionType';

const initialState: Product[] = [];

export default function cartProducts(
  state: Product[] = initialState,
  action: CartAction
): Product[] {
  switch (action.type) {
    case CartActionType.CART_SUCCESSED:
      return [...action.payload];

    case CartActionType.DELETE_CART_PRODUCTS_SUCCESSED:
      return []; // カートの中身を空にする
    default:
      return state;
  }
}
