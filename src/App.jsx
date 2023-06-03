import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tier1 from './routes/tier1/tier1';
import Tier2 from './routes/tier2';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Tier1 />,
    },
    {
      path: "/tier1",
      element: <Tier1 />,
    },
    {
      path: "/tier2",
      element: <Tier2 />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
