import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { ProductProvider } from './context/ProductContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <ProductProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </ProductProvider>
      <Footer />
    </>
  );
}
