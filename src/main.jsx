import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import InterFace from './Pages/InterFace.jsx'
import Login from './Pages/Login.jsx'
import Sign from "./Pages/Sign.jsx"

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    
  },
  {
    path: "/interface",
    element: <InterFace />,
    errorElement: <div>404 Not Found</div>,
    
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <div>404 Not Found</div>,
    
  },
  {
    path: "/Sign",
    element: <Sign />,
    errorElement: <div>404 Not Found</div>,
    
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  

)