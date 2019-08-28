import { WithStyles } from '@material-ui/core';
import styles from './ProductListStyles';
import IProduct from 'src/apis/ProductList';

// type ProductListOwnProps = {
//   handleClick: (id: number) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
// };

export type ProductListConnectProps = {
  productList: IProduct[];
};

export type ProductListDispatchProps = {
  getProductListRequest: () => void;
};

type ProductListProps = WithStyles<typeof styles> &
  ProductListConnectProps &
  ProductListDispatchProps;

export default ProductListProps;
