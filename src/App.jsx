import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Market from './pages/Market';
import Home from './pages/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Market",
    element: <Market/>,
  },
]);



function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
