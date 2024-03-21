import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>
  },
  {
    path: '/about',
    element: <div>about</div>
  },
  {
    path: '/contact',
    element: <div>contact</div>
  },
  {
    path: '*',
    element: <div>404 not found.</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
