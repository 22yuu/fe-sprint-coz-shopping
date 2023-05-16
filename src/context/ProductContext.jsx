import React, { useContext, createContext, ReactNode } from 'react';
import FakeProductClient from '../api/FakeProductClient';
import ProductClient from '../api/ProductClient';
import ProductAPI from '../api/productAPI';

// type ProviderProps = {
//   children: ReactNode,
// };
export const ProductApiContext = createContext();

const fake = new FakeProductClient();
const client = new ProductClient();
const productApi = new ProductAPI(fake);

export function ProductProvider({ children }) {
  return (
    <ProductApiContext.Provider value={{ productApi }}>
      {children}
    </ProductApiContext.Provider>
  );
}

export function useProductApi() {
  return useContext(ProductApiContext);
}
