import React from 'react';
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
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';
import Props from './CartProps';
import State from './CartState';
import Product from 'src/apis/models/Product';

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  public componentDidMount() {
    this.props.getCartProductsRequest();
  }

  public handleOpen = () => {
    this.setState({ open: true });
  };

  public handleClose = () => {
    this.setState({ open: false });
  };

  public handleBuyButtonClick = (ids: number[], products: Product[]) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.props.postPeymentsRequest(products);
    ids.map(id => this.props.deleteCartProductsRequest(id));
    this.props.getCartProductsRequest();
    this.setState({ open: false });
  };

  public handleDeleteButtonClick = (id: number) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.props.deleteCartProductsRequest(id);
    this.props.getCartProductsRequest();
  };

  render() {
    const { classes, cartProducts } = this.props;
    let ids: number[] = [];

    return (
      <div>
        <Typography variant='h4' gutterBottom className={classes.title}>
          ショッピングカート
        </Typography>
        <Button className={classes.buyButton} onClick={this.handleOpen}>
          <Typography className={classes.buttonText}>購入する</Typography>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='alert-dialog-title'
        >
          <DialogTitle id='alert-dialog-title'>{'カートの中の商品を購入しますか？'}</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              キャンセル
            </Button>
            <Button
              onClick={this.handleBuyButtonClick(ids, cartProducts)}
              color='primary'
              autoFocus
            >
              購入する
            </Button>
          </DialogActions>
        </Dialog>
        <List className={classes.listRoot}>
          <Divider />
          {cartProducts.map(cart => (
            <div>
              <div className={classes.ids}>{ids.push(cart.id)}</div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={cart.icon_path} className={classes.avater} />
                </ListItemAvatar>
                <div className={classes.container}>
                  <ListItemText>
                    <Typography variant='h4'>{cart.name}</Typography>
                    <Typography
                      variant='h5'
                      className={classes.value}
                    >{`¥　${cart.value.toLocaleString()}`}</Typography>
                    <Typography color='textSecondary'>{cart.made_by}</Typography>
                  </ListItemText>
                  <Button
                    className={classes.deleteButton}
                    onClick={this.handleDeleteButtonClick(cart.id)}
                  >
                    削除
                  </Button>
                </div>
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
