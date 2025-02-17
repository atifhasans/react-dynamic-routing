import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Layout.jsx';
import Login from './Pages/Login.jsx';
import Products from './Pages/Products.jsx';
import Register from './Pages/Register.jsx';
import SingleProduct from './Pages/SingleProduct.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Login />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'product/:id',
        element: <SingleProduct />
      },
      {
        path: '*',  
        element: <div>404 - Page Not Found</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
