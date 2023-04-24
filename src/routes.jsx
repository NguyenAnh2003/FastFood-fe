import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    // layout element
    element: '',
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
