import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import NotFound from './components/NotFound/NotFound';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <NotFound/>,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/users",
          loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
          element: <Users />,
        },
        {
          path: "/users/:userId",
          loader: ({ params }) =>
            fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element: <UserDetails />,
        },
        {
          path: '/posts',
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
          element: <Posts/>,
        },
        {
          path: '/posts/:postId',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          element: <PostDetails/>,
        },

      ],
    },
  ]);

  export default router;