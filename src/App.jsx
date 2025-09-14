import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "recipes/:id",
          element: <RecipeDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
  
}

export default App
