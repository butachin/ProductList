import { WithStyles } from '@material-ui/core';
import styles from './ProductListStyles';

type ProductListOwnProps = {
  handleClick: (id: number) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type ProductListProps = WithStyles<typeof styles> & ProductListOwnProps;

export default ProductListProps;
