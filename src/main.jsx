import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/shared-components/layout';
import ErrorPage from './components/shared-components/ErrorPage';
import List from './components/list/List';
import Profile from './components/profile/profile';
import Memory from './services/memory';
import Details from './components/createNew/objectiveDetail';
import Modal from './components/shared-components/Modal';

const root = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <List />,
    },
    {
      path: '/newObjective',
      element: <Details />
    },
    {
      path: '/list',
      element: <List />,
    },
    {
      path: '/list/:id',
      element: <Modal><Details /></Modal>,
    },
    {
      path: '/perfil',
      element: <Profile />,
    }
  ]
},
])

const roote = ReactDOM.createRoot(document.getElementById('root'));
roote.render(
    <Memory>
      <RouterProvider router={root} />
    </Memory>
);


