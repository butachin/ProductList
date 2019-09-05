import rootState from 'src/states';
import { CartConnectedProps, CartDispatchToProps } from 'src/components/Cart/CartProps';
import { Dispatch } from 'redux';
import CartAction from 'src/actions/Cart/CartAction';
import { getCartProducts, deleteCartProducts } from 'src/actions/Cart/CartActionCreator';
import { connect } from 'react-redux';
import Cart from 'src/components/Cart/Cart';

const mapStateToProps = (state: rootState): CartConnectedProps => {
  return {
    cartProducts: state.cartProducts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CartAction>): CartDispatchToProps => ({
  getCartProductsRequest: () => {
    dispatch(getCartProducts.request());
  },
  deleteCartProductsRequest: (id: number) => {
    dispatch(deleteCartProducts.request(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
