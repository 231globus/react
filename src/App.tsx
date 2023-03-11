import About from './pages/about/About';
import Cards from './pages/cards/Cards';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Cards />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
