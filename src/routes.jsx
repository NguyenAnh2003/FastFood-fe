import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages';
import Layout from './components';

const router = createBrowserRouter([
  {
    path: '/',
    // layout element
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
