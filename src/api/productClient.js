import axios from 'axios';

export default class ProductClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://cozshopping.codestates-seb.link/api/v1/',
    });
  }

  async allProducts() {
    return this.httpClient.get('products');
  }

  async productsGetBy(params) {
    console.log(params);
    return this.httpClient.get('products', { params });
  }
}
