import {
  ProductListConnectedProps,
  ProductListDispatchProps,
} from '../../components/ProductList/ProductListProps';
import rootState from 'src/states';
import { connect } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import { Dispatch } from 'redux';
import ProductListAction from '../../actions/ProductList/ProductListAction';
import * as ProductListActionCreators from '../../actions/ProductList/ProductListActionCreator';
import ProductDetailsAction from '../../actions/ProductDetails/ProductDetailsAction';
import * as ProductDetailsActionCreators from '../../actions/ProductDetails/ProductDetailsActionCreator';

function mapStateToProps(state: rootState): ProductListConnectedProps {
  return {
    productList: state.productList,
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<ProductListAction | ProductDetailsAction>
): ProductListDispatchProps {
  return {
    getProductListRequest: () => {
      dispatch(ProductListActionCreators.getProductList.request());
    },
    getProductDetailsRequest: (id: number) => {
      dispatch(ProductDetailsActionCreators.getProductDetails.request(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
