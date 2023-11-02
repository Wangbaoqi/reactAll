import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import App from './App.tsx'
import Layout from './Layout.tsx'
import ErrorPage from './Error.tsx'
import ClassPart from './classViews'
import './index.css'
import Singleton from './patterns/singleton/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'ClassPart',
        element: <ClassPart />
      },
      {
        path: 'pattern/',
        children: [
          {
            path: 'singleton',
            element: <Singleton />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
