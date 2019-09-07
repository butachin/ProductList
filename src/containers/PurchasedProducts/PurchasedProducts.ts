import rootState from 'src/states';
import {
  PurchasedProductsConnectedProps,
  PurchasedProductsDispatchProps,
} from 'src/components/PurchasedProducts/PurchasedProductsProps';
import { Dispatch } from 'redux';
import PurchasedProductsAction from 'src/actions/PurchasedProducts/PurchasedProductsAction';
import { getPurchasedProducts } from 'src/actions/PurchasedProducts/PurchasedProductsActionCreator';
import { connect } from 'react-redux';
import PurchasedProducts from 'src/components/PurchasedProducts/PurchasedProducts';

const mapStateToProps = (state: rootState): PurchasedProductsConnectedProps => {
  return {
    purchasedProducts: state.purchasedProducts,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<PurchasedProductsAction>
): PurchasedProductsDispatchProps => ({
  getPurchasedProductsRequest: () => {
    dispatch(getPurchasedProducts.request());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchasedProducts);
