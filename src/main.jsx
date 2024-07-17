import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Components/Login/Login';

import Register from './Components/Register/Register';
import Root from './Components/Root/Root';


import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/',
        element:<Register></Register>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<QueryClientProvider client={queryClient}>
<RouterProvider router={router} />
    </QueryClientProvider>
    
  </React.StrictMode>,
)
