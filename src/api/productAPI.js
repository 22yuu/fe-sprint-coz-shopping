export default class ProductAPI {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getAllProducts() {
    return this.apiClient.allProducts();
  }

  async getBy(count) {
    const params = {
      count: count,
    };

    return this.apiClient.productsGetBy(params);
  }
}
