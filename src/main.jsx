import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Roters'
import AuthProvaider from './Provaider/AuthProvaider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvaider>
  </React.StrictMode>
)
