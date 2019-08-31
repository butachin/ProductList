import ProductDetails from 'src/apis/models/ProductDetails';
import { WithStyles } from '@material-ui/core';
import styles from './ProductDetailsStyles';

export type ProductDetailsConnectedProps = {
  productDetails: ProductDetails;
};

export type ProductDetailsDispatchProps = {
  postAddProductRequest: (body: ProductDetails) => void;
};

type ProductDetailsProps = WithStyles<typeof styles> &
  ProductDetailsConnectedProps &
  ProductDetailsDispatchProps;

export default ProductDetailsProps;
