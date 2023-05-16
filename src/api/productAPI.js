export default class ProductAPI {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getAllProducts() {
    return this.apiClient.allProducts().then((res) => res.data);
  }

  async getBy(count) {
    const params = {
      count: count,
    };

    return this.apiClient.productsGetBy(params);
  }
}
