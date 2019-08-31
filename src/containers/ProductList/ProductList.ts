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

const mapStateToProps = (state: rootState): ProductListConnectedProps => {
  return {
    productList: state.productList,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ProductListAction | ProductDetailsAction>
): ProductListDispatchProps => {
  return {
    getProductListRequest: (page_num: number) => {
      dispatch(ProductListActionCreators.getProductList.request(page_num));
    },
    getProductDetailsRequest: (id: number) => {
      dispatch(ProductDetailsActionCreators.getProductDetails.request(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
