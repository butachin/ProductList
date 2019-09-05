import ProductDetails from 'src/apis/models/ProductDetails';
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

export default function productDetails(
  state: ProductDetails = initialState,
  action: ProductDetailsAction
): ProductDetails {
  switch (action.type) {
    case ProductDetailsActionType.PRODUCT_DETAILS_SUCCESSED:
      return {
        ...state,
        ...action.payload,
      };

    case ProductDetailsActionType.POST_ADD_PRODUCT_SUCCESSED:
      return {
        ...state,
      };
    default:
      return state;
  }
}
