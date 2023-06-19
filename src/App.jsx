import { useEffect, useState } from 'react';
import ApiCall from './utils/apiCall';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/Slices/homeSlice';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import './App.css';

// Importing pages and components.
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResults from './pages/serachResults/SearchResults';
import Explore from './pages/explore/Explore';
import Error from './pages/error/Error';
import RootLayout from './pages/Root/RootLayout';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: ":mediaType/:id", element: <Details /> },
        { path: "search/:query", element: <SearchResults /> },
        { path: "explore/:mediaType", element: <Explore /> },
      ],
    },
  ]);

  return (
  <RouterProvider router={router}>
  </RouterProvider>);
}

export default App
