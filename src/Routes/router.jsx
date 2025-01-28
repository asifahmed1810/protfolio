import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'projects',
          element:<Projects></Projects>
        },
        {
          path:'resume',
          element:<Resume></Resume>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        }
      ]
    },
  ]);

export default router;