import './styles/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CardsPage from './pages/CardsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
