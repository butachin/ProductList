import ProductDetails from 'src/apis/models/ProductDetails';
import { WithStyles } from '@material-ui/core';
import styles from './ProductDetailsStyles';
import { RouteComponentProps } from 'react-router';

export type ProductDetailsConnectedProps = {
  productDetails: ProductDetails;
};

export type ProductDetailsDispatchProps = {
  postAddProductRequest: (body: ProductDetails) => void;
};

type ProductDetailsProps = WithStyles<typeof styles> &
  ProductDetailsConnectedProps &
  ProductDetailsDispatchProps &
  RouteComponentProps;

export default ProductDetailsProps;
