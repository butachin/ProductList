import React from 'react';
import Props from './ProductDetailsProps';
import { withStyles } from '@material-ui/styles';
import styles from './ProductDetailsStyles';
import { Typography } from '@material-ui/core';

class ProductDetails extends React.Component<Props> {
  render() {
    const { classes, productDetails } = this.props;
    return (
      <div className={classes.container}>
        <img className={classes.image} alt='complex' src={productDetails.icon_path} />
        <div className={classes.description}>
          <Typography className={classes.madeBy} variant='subtitle1' color='textSecondary'>
            {productDetails.made_by}
          </Typography>
          <Typography variant='h2'>{productDetails.name}</Typography>
          <Typography
            className={classes.value}
            variant='h4'
          >{`¥ ${productDetails.value}`}</Typography>
          <Typography
            className={classes.reviewPoint}
            variant='subtitle1'
          >{`評価：${productDetails.review_point}`}</Typography>
          <Typography variant='subtitle1'>{`コメント：${productDetails.review_content}`}</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetails);
