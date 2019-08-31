import axios from 'axios';
import ProductList from './models/ProductList';
import ProductDetails from './models/ProductDetails';

class ProductApi {
  public async getProductList(page_num: number) {
    try {
      return await axios.get<ProductList[]>('http://localhost:3001/page' + page_num, {});
    } catch (error) {
      throw error;
    }
  }

  public async getProductDetails(id: number) {
    try {
      return await axios.get<ProductDetails>('http://localhost:3001/' + id, {});
    } catch (error) {
      throw error;
    }
  }

  public async postAddProduct(body: ProductDetails) {
    try {
      return await axios.post<ProductDetails>('http://localhost:3001/cart/product/' + body.id, {});
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductApi();
