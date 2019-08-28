import rootState from 'src/states';
import { ProductDetailsConnectedProps } from 'src/components/ProductDetails/ProductDetailsProps';
import { connect } from 'react-redux';
import ProductDetails from 'src/components/ProductDetails/ProductDetails';

function mapStateToProps(state: rootState): ProductDetailsConnectedProps {
  return {
    productDetails: state.productDetails,
  };
}

export default connect(
  mapStateToProps,
  null
)(ProductDetails);
