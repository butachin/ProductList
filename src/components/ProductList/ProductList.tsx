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
  IconButton,
} from '@material-ui/core';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import ProductListState from './ProductListState';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';

class ProductList extends React.Component<ProductListProps, ProductListState> {
  readonly state = {
    page: 1,
  };

  public componentDidMount() {
    this.props.getProductListRequest(this.state.page);
  }

  public handleClick = (route: string, id: number) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.props.history.push(route);
    this.props.getProductDetailsRequest(id);
  };

  public handleCartButtonClick = (route: string) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.props.history.push(route);
  };

  public handlePageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    this.setState({ page: Number(event.target.value) });
  };

  public handlePageButtonClick = (page_num: number) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.props.getProductListRequest(page_num);
  };

  render() {
    const { classes, productList } = this.props;

    return (
      <div>
        <Typography variant='h4' gutterBottom className={classes.title}>
          商品リスト
        </Typography>
        <div className={classes.cartButtonContainer}>
          <IconButton className={classes.cartButton} onClick={this.handleCartButtonClick('/cart')}>
            <CartIcon />
          </IconButton>
          <Typography variant='caption'>カート</Typography>
        </div>
        <div className={classes.pageContainer}>
          <TextField
            value={this.state.page}
            className={classes.textField}
            type='number'
            margin='normal'
            onChange={this.handlePageChange}
          />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={this.handlePageButtonClick(this.state.page)}
          >
            ページを移動する
          </Button>
        </div>
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
