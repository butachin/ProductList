import React from 'react';
import ProductListProps from './ProductListProps';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/styles';
import styles from './ProductListStyles';
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  TextField,
} from '@material-ui/core';
import { withRouter } from 'react-router';

class ProductList extends React.Component<ProductListProps> {
  public componentDidMount() {
    this.props.getProductListRequest(1);
  }

  public handleClick = (url: string, id: number) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.props.history.push(url);
    this.props.getProductDetailsRequest(id);
  };

  render() {
    const { classes, productList } = this.props;

    return (
      <div>
        <Typography variant='h3' gutterBottom className={classes.title}>
          商品リスト
        </Typography>
        <TextField
          id='standard-page-input'
          label='Page'
          className={classes.textField}
          type='number'
          margin='normal'
        />
        <div className={classes.root}>
          <GridList cellHeight={420} className={classes.gridList}>
            {productList.map((product, index) => (
              <Card className={classes.card} key={index}>
                <CardActionArea onClick={this.handleClick('/details', product.id)}>
                  <CardMedia
                    className={classes.media}
                    image={product.icon_path}
                    title='Contemplative Reptile'
                  />
                </CardActionArea>
                <CardContent>
                  <Typography variant='h5'>{product.name}</Typography>
                  <Typography variant='body2'>{`評価：${product.review_point}`}</Typography>
                  <Typography variant='body2'>{`コメント：${product.review_content}`}</Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {product.made_by}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ProductList));
