import axios from 'axios';
import ProductList from './models/ProductList';
import ProductDetails from './models/ProductDetails';
import Product from './models/Product';

class ProductApi {
  public async getProductList(page_num: number) {
    // ページ番号を受け取って商品のリストGETする
    try {
      return await axios.get<ProductList>('http://localhost:3001/page' + page_num, {});
    } catch (error) {
      throw error;
    }
  }

  public async getProductDetails(product_id: number) {
    // 商品のidを受け取って商品の詳細をGETする
    try {
      return await axios.get<ProductDetails>('http://localhost:3001/products/' + product_id, {});
    } catch (error) {
      throw error;
    }
  }

  public async getCartProducts() {
    // カートの商品をGETする
    try {
      return await axios.get<Product[]>('http://localhost:3001/cart', {});
    } catch (error) {
      throw error;
    }
  }

  public async postAddProduct(body: ProductDetails) {
    // カートに商品をPOSTする
    try {
      return await axios.post<ProductDetails>('http://localhost:3001/cart', body);
    } catch (error) {
      throw error;
    }
  }

  public async postPayments(products: Product[]) {
    try {
      return await axios.post<Product[]>('http://localhost:3001/payments', products);
    } catch (error) {
      throw error;
    }
  }

  public async deleteCartProducts(id: number) {
    // カートの商品をDELETEする
    try {
      return await axios.delete<Product[]>('http://localhost:3001/cart/' + id, {});
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductApi();
