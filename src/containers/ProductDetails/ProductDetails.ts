import rootState from 'src/states';
import {
  ProductDetailsConnectedProps,
  ProductDetailsDispatchProps,
} from 'src/components/ProductDetails/ProductDetailsProps';
import { connect } from 'react-redux';
import ProductDetails from 'src/components/ProductDetails/ProductDetails';
import { Dispatch } from 'redux';
import { postAddProduct } from 'src/actions/Cart/CartActionCreator';
import ProductDetailsState from 'src/apis/models/ProductDetails';
import CartAction from 'src/actions/Cart/CartAction';

const mapStateToProps = (state: rootState): ProductDetailsConnectedProps => {
  return {
    productDetails: state.productDetails,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CartAction>): ProductDetailsDispatchProps => ({
  postAddProductRequest: (body: ProductDetailsState) => {
    dispatch(postAddProduct.request(body));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
