import { WithStyles } from '@material-ui/core';
import styles from './CartStyles';
import Product from 'src/apis/models/Product';

export type CartConnectedProps = {
  cartProducts: Product[];
};

export type CartDispatchToProps = {
  getCartProductsRequest: () => void;
  postPeymentsRequest: (products: Product[]) => void;
  deleteCartProductsRequest: (id: number) => void;
};

type CartProps = WithStyles<typeof styles> & CartDispatchToProps & CartConnectedProps;

export default CartProps;
