import Product from 'src/apis/models/Product';
import PurchasedProducutsAction from 'src/actions/PurchasedProducts/PurchasedProductsAction';
import PurchasedProducutsActionType from 'src/actions/PurchasedProducts/PurchasedProductsActionType';

const initialState: Product[] = [];

export default function purchasedProdcuts(
  state: Product[] = initialState,
  action: PurchasedProducutsAction
): Product[] {
  switch (action.type) {
    case PurchasedProducutsActionType.GET_PURCHASED_PRODUCTS_SUCCESSED:
      return [...action.payload];
    default:
      return state;
  }
}
