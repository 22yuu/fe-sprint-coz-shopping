import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import { BookmarkProvider } from './context/BookmarkContext';
import { ProductProvider } from './context/ProductContext';
import Bookmark from './pages/Bookmark.tsx';
import Main from './pages/Main.tsx';
import NotFound from './pages/NotFound.tsx';
import ProductList from './pages/ProductList.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App outlet={<NotFound />} />,
    children: [
      { index: true, element: <Main /> },
      { path: 'productlist', element: <ProductList /> },
      { path: 'bookmark', element: <Bookmark /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <BookmarkProvider>
      <RouterProvider router={router} />
    </BookmarkProvider>
  </ProductProvider>
);
