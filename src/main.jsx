import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-black min-h-screen text-white'>
      <RouterProvider router={router} />

    </div>
  </StrictMode>,
)
