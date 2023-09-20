import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import PDPContent from './PDPContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/products/:id',
        element: <PDPContent />,
      },
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('app')
);
