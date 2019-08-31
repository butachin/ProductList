import ProductList from 'src/apis/models/ProductList';
import ProductListAction from 'src/actions/ProductList/ProductListAction';
import productListActionType from '../../actions/ProductList/ProductListActionType';

const initialState: ProductList[] = [];

export default function productList(
  state: ProductList[] = initialState,
  action: ProductListAction
): ProductList[] {
  switch (action.type) {
    case productListActionType.PRODUCT_LIST_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}
