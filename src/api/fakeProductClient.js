import axios from 'axios';

export default class FakeProductClient {
  async allProducts() {
    return axios.get('/data/products.json');
  }

  async productsGetBy(params) {
    const { count } = params;

    return count == 4
      ? axios.get('/data/productsGetBy4.json')
      : axios.get('/data/productsGetBy10.json');
  }
}
