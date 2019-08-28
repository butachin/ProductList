import ProductList from 'src/apis/ProductList/ProductList';
import ProductListAction from 'src/actions/ProductList/ProductListAction';
import productListActionType from '../../actions/ProductList/ProductListActionType';

const initialState: ProductList[] = [];

export default function productList(
  state: ProductList[] = initialState,
  action: ProductListAction
): ProductList[] {
  switch (action.type) {
    case productListActionType.PRODUCTLIST_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}
