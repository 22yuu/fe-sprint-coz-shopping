import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { ProductProvider } from './context/ProductContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './pages/Main';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <ProductProvider>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </ProductProvider>
      <Footer />
    </>
  );
}
