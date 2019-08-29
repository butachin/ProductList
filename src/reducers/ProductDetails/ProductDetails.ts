import ProductDetails from 'src/apis/ProductDetails/ProductDetails';
import ProductDetailsAction from 'src/actions/ProductDetails/ProductDetailsAction';
import ProductDetailsActionType from '../../actions/ProductDetails/ProductDetailsActionType';

const initialState: ProductDetails = {
  id: 0,
  name: '',
  value: 0,
  icon_path: '',
  review_point: 0,
  review_content: '',
  made_by: '',
};

export default function productList(
  state: ProductDetails = initialState,
  action: ProductDetailsAction
): ProductDetails {
  switch (action.type) {
    case ProductDetailsActionType.PRODUCTDETAILS_REQUEST:
      return {
        ...state,
      };
    case ProductDetailsActionType.PRODUCTDETAILS_SUCCESSED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
