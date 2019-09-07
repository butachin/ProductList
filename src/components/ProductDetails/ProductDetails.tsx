import React from 'react';
import Props from './ProductDetailsProps';
import { withStyles } from '@material-ui/styles';
import styles from './ProductDetailsStyles';
import { Typography, Button, IconButton } from '@material-ui/core';
import ShoppingIcon from '@material-ui/icons/AddShoppingCart';
import ProductDetailsState from 'src/apis/models/ProductDetails';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';

class ProductDetails extends React.Component<Props> {
  public handleCartClick = (body: ProductDetailsState) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.props.postAddProductRequest(body);
  };

  public handleCartButtonClick = (route: string) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.props.history.push(route);
  };

  render() {
    const { classes, productDetails } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.purchasedButtonContainer}>
          <IconButton
            className={classes.circleButton}
            onClick={this.handleCartButtonClick('/purchasedProducts')}
          >
            <AssignmentIcon />
          </IconButton>
          <Typography variant='caption'>注文履歴</Typography>
        </div>
        <div className={classes.cartButtonContainer}>
          <IconButton
            className={classes.circleButton}
            onClick={this.handleCartButtonClick('/cart')}
          >
            <CartIcon />
          </IconButton>
          <Typography variant='caption'>カート</Typography>
        </div>
        <img className={classes.image} alt='complex' src={productDetails.icon_path} />
        <div className={classes.description}>
          <div>
            <Typography className={classes.madeBy} variant='subtitle1' color='textSecondary'>
              {productDetails.made_by}
            </Typography>
            <Typography variant='h2'>{productDetails.name}</Typography>
            <Typography
              className={classes.value}
              variant='h4'
            >{`¥ ${productDetails.value.toLocaleString()}`}</Typography>
            <Typography
              className={classes.reviewPoint}
              variant='subtitle1'
            >{`評価：${productDetails.review_point}`}</Typography>
            <Typography variant='subtitle1'>{`コメント：${productDetails.review_content}`}</Typography>
          </div>
          <Button className={classes.button} onClick={this.handleCartClick(productDetails)}>
            <ShoppingIcon className={classes.shoppingIcon} />
            <Typography className={classes.buttonText}>カートに入れる</Typography>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetails);
