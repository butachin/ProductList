import {
  ProductListConnectProps,
  ProductListDispatchProps,
} from 'src/components/ProductList/ProductListProps';
import rootState from 'src/states';
import { connect } from 'react-redux';
import ProductList from 'src/components/ProductList/ProductList';
import { Dispatch } from 'redux';
import ProductListAction from 'src/actions/ProductList/ProductListAction';
import * as ProductListActionCreators from 'src/actions/ProductList/ProductListActionCreator';

function mapStateToProps(state: rootState): ProductListConnectProps {
  return {
    productList: state.productList,
  };
}

function mapDispatchToProps(dispatch: Dispatch<ProductListAction>): ProductListDispatchProps {
  return {
    getProductListRequest: () => {
      dispatch(ProductListActionCreators.getProductList.request());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
