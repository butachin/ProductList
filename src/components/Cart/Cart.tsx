import React from 'react';
import Props from './CartProps';
import { withStyles } from '@material-ui/styles';
import styles from './CartStyles';
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@material-ui/core';

class Cart extends React.Component<Props> {
  public componentDidMount() {
    this.props.getCartProductsRequest();
  }
  render() {
    const { classes, cartProducts } = this.props;
    return (
      <div>
        <Typography variant='h4' gutterBottom className={classes.title}>
          ショッピングカート
        </Typography>
        <List className={classes.listRoot}>
          <Divider />
          {cartProducts.map(cart => (
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={cart.icon_path} className={classes.avater} />
                </ListItemAvatar>
                <ListItemText className={classes.text}>
                  <Typography variant='h4'>{cart.name}</Typography>
                  <Typography
                    variant='h5'
                    className={classes.value}
                  >{`¥　${cart.value.toLocaleString()}`}</Typography>
                  <Typography color='textSecondary'>{cart.made_by}</Typography>
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

export default withStyles(styles)(Cart);
