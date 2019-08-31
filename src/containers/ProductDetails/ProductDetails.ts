import rootState from 'src/states';
import {
  ProductDetailsConnectedProps,
  ProductDetailsDispatchProps,
} from 'src/components/ProductDetails/ProductDetailsProps';
import { connect } from 'react-redux';
import ProductDetails from 'src/components/ProductDetails/ProductDetails';
import { Dispatch } from 'redux';
import ProductDetailsAction from 'src/actions/ProductDetails/ProductDetailsAction';
import { postAddProduct } from 'src/actions/ProductDetails/ProductDetailsActionCreator';
import ProductDetailsState from 'src/apis/models/ProductDetails';

const mapStateToProps = (state: rootState): ProductDetailsConnectedProps => {
  return {
    productDetails: state.productDetails,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ProductDetailsAction>
): ProductDetailsDispatchProps => ({
  postAddProductRequest: (body: ProductDetailsState) => {
    dispatch(postAddProduct.request(body));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
