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
    case ProductDetailsActionType.PRODUCTDETAILS_SUCCESS:
      return {
        ...action.payload,
        id: state.id,
        name: state.name,
        value: state.value,
        icon_path: state.icon_path,
        review_point: state.review_point,
        review_content: state.review_content,
        made_by: state.made_by,
      };
    default:
      return state;
  }
}
