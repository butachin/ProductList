import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './PurchasedProductsStyles';
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@material-ui/core';
import Props from './PurchasedProductsProps';

class PurchasedProducts extends React.Component<Props> {
  public componentDidMount() {
    this.props.getPurchasedProductsRequest();
  }
  render() {
    const { classes, purchasedProducts } = this.props;

    return (
      <div>
        <Typography variant='h4' gutterBottom className={classes.title}>
          注文履歴
        </Typography>
        <List className={classes.listRoot}>
          <Divider />
          {purchasedProducts.map(product => (
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={product.icon_path} className={classes.avater} />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant='h4'>{product.name}</Typography>
                  <Typography
                    variant='h5'
                    className={classes.value}
                  >{`¥　${product.value.toLocaleString()}`}</Typography>
                  <Typography color='textSecondary'>{product.made_by}</Typography>
                </ListItemText>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(PurchasedProducts);
