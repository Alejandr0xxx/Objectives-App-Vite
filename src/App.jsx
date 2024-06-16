import './index.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/shared-components/layout';
import ErrorPage from './components/shared-components/ErrorPage';
import Details, { action as createObjective } from './components/createNew/objectiveDetail';
import List from './components/list/List';
import { loader as objectivesLoader, action as objectiveCompleted} from './components/list/objectives';
import Profile from './components/profile/profile';
export default function App() {
  const root = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <List />,
        loader: objectivesLoader,
        action: objectiveCompleted,
      },
      {
        path: '/list',
        element: <List />,
        loader: objectivesLoader,
        action: objectiveCompleted,
      },
      {
        path: '/newObjetive',
        element: <Details />,
        action: createObjective,
      },
      {
        path: '/perfil',
        element: <Profile/>,
      }
    ]
  },
  ])
  return <RouterProvider router={root} />
}


