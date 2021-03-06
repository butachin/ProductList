import { WithStyles } from '@material-ui/core';
import styles from './ProductListStyles';
import ProductList from 'src/apis/models/ProductList';
import { RouteComponentProps } from 'react-router';

export type ProductListConnectedProps = {
  productList: ProductList;
};

export type ProductListDispatchProps = {
  getProductListRequest: (page_num: number) => void;
  getProductDetailsRequest: (id: number) => void;
};

type ProductListProps = WithStyles<typeof styles> &
  ProductListConnectedProps &
  ProductListDispatchProps &
  RouteComponentProps;

export default ProductListProps;
