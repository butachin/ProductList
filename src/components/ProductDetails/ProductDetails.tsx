import React from 'react';
import Props from './ProductDetailsProps';

class ProductDetails extends React.Component<Props> {
  render() {
    const { productDetails } = this.props;
    return <div>{productDetails.name}</div>;
  }
}

export default ProductDetails;
