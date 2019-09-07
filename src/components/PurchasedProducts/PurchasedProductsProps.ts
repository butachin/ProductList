import { WithStyles } from '@material-ui/styles';
import styles from './PurchasedProductsStyles';
import Product from 'src/apis/models/Product';

export type PurchasedProductsConnectedProps = {
  purchasedProducts: Product[];
};

export type PurchasedProductsDispatchProps = {
  getPurchasedProductsRequest: () => void;
};

type PurchasedProductsProps = WithStyles<typeof styles> &
  PurchasedProductsConnectedProps &
  PurchasedProductsDispatchProps;

export default PurchasedProductsProps;
