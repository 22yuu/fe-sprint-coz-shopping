import { createContext, ReactNode, useContext } from 'react';

import FakeProductClient from '../api/FakeProductClient';
import ProductAPI from '../api/productAPI';
import ProductClient from '../api/ProductClient';

type ProviderProps = {
  children: ReactNode;
};
export const ProductApiContext = createContext();

const fake = new FakeProductClient();
const client = new ProductClient();
const productApi = new ProductAPI(client);

export function ProductProvider({ children }: ProviderProps) {
  return (
    <ProductApiContext.Provider value={{ productApi }}>
      {children}
    </ProductApiContext.Provider>
  );
}

export function useProductApi() {
  return useContext(ProductApiContext);
}
