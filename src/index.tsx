import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './components/shared-components/layout';
import ErrorPage from './components/shared-components/ErrorPage';
import List from './components/private/list/List';
import Profile from './components/private/profile/profile';
import Memory from './memory/memory';
import Details from './components/private/createNew/objectiveDetail';
import Modal from './components/shared-components/Modal';
import Register from './components/public/resgister/register';
import Login from './components/public/login/login';
import Auth from './components/shared-components/Auth';
import AuthMemory from './memory/AuthMemory';



const root = createBrowserRouter([{
  path: '/',
  element: <Navigate to={'/list'} />,
  errorElement: <ErrorPage />
},
{
  element: <Layout isPrivate={false} />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]
},
{
  element: <Layout isPrivate={true} />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <Auth />,
      children: [
        {
          path: '/newObjective',
          element: <Details />
        },
        {
          path: '/list',
          element: <List />,
          children: [
            {
              path: '/list/:id',
              element: <Modal><Details /></Modal>,
            },
          ]
        },
        {
          path: '/profile',
          element: <Profile />,
        }]
    }
  ]
}
],
)
const roote = ReactDOM.createRoot(document.getElementById('root')!);
roote.render(
  <AuthMemory>
    <Memory>
      <RouterProvider router={root} />
    </Memory>
  </AuthMemory>
);



