import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NotFound from './components/NotFound/NotFound';

import Contact from './components/Contact/Contact';
import {  createBrowserRouter,  RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css'
import Users from './components/Users/Users';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children:[
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
