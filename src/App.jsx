
import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootpage from './page/Rootpage';
import Homepage from './page/Homepage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootpage />}
     
      
    >
       <Route
      path="/"
      element={<Homepage />}
     
      
    >
  
    </Route>
  
    </Route>
  )
);

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App