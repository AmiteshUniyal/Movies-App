import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Items from './Components/Items';
import Action from './Components/Explore/Action';
import Romance from './Components/Explore/Romance';
import Comedy from './Components/Explore/Comedy';
import Sci_fi from './Components/Explore/Sci-fi';
import Horror from './Components/Explore/Horror';
import Expand from './Components/Expand';
import Search from './Components/Search';
import './App.css';


function App() { 

   const router = createBrowserRouter([
    {
      path: '/Action',
      element: <><Navbar /><Action/></>
    },
    {
      path:'/Comedy',
      element: <> <Navbar /> <Comedy/> </>
    },
    {
      path:'/Romance',
      element: <> <Navbar  /> <Romance/> </>
    },
    {
      path:'/Sci-Fi',
      element: <> <Navbar  /> <Sci_fi/> </>
    },
    {
      path:'/Horror',
      element: <> <Navbar /> <Horror/> </>
    },
    {
      path:'/',
      element: <> <Navbar /> <Items/> </>
    },
    {
      path:'/Expand/:id',
      element: <> <Navbar /> <Expand/> </>
    },
    {
      path:'/Search/:string',
      element: <> <Navbar /> <Search/> </>
    }
   ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
