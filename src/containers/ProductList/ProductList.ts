import {
  ProductListConnectProps,
  ProductListDispatchProps,
} from '../../components/ProductList/ProductListProps';
import rootState from 'src/states';
import { connect } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import { Dispatch } from 'redux';
import ProductListAction from '../../actions/ProductList/ProductListAction';
import * as ProductListActionCreators from '../../actions/ProductList/ProductListActionCreator';

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
