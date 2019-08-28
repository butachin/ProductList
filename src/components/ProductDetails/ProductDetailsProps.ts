import ProductDetails from 'src/apis/ProductDetails/ProductDetails';
import { WithStyles } from '@material-ui/core';
import styles from './ProductDetailsStyles';

export type ProductDetailsConnectedProps = {
  productDetails: ProductDetails;
};

type ProductDetailsProps = WithStyles<typeof styles> & ProductDetailsConnectedProps;

export default ProductDetailsProps;
