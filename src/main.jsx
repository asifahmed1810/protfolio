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
    <div className=' min-h-screen text-white'>
      <div className='w-4/5 mx-auto'>
        <RouterProvider router={router} />
      </div>

    </div>
  </StrictMode>,
)
