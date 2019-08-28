import React from 'react';
import Props from './ProductListProps';
import GridList from '@material-ui/core/GridList';
import image from '../../images/apple_watch.png';
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

class ProductList extends React.Component<Props> {
  render() {
    const { classes, handleClick } = this.props;

    const productData = [
      {
        id: 0,
        name: 'Apple Watch',
        value: 0,
        icon_path: image,
        review_point: 3,
        review_content: '最高',
        made_by: 'Apple, Inc',
      },
      {
        id: 1,
        name: 'Apple Watch',
        value: 0,
        icon_path: image,
        review_point: 3,
        review_content: '最高',
        made_by: 'Apple, Inc',
      },
      {
        id: 2,
        name: 'Apple Watch',
        value: 0,
        icon_path: image,
        review_point: 3,
        review_content: '最高',
        made_by: 'Apple, Inc',
      },
      {
        id: 3,
        name: 'Apple Watch',
        value: 0,
        icon_path: image,
        review_point: 3,
        review_content: '最高',
        made_by: 'Apple, Inc',
      },
      {
        id: 3,
        name: 'Apple Watch',
        value: 0,
        icon_path: image,
        review_point: 3,
        review_content: '最高',
        made_by: 'Apple, Inc',
      },
    ];

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
            {productData.map(product => (
              <Card className={classes.card}>
                <CardActionArea onClick={handleClick(product.id)}>
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

export default withStyles(styles)(ProductList);
