import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/Slices/homeSlice';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

// Importing pages and components.
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResults from './pages/serachResults/SearchResults';
import Explore from './pages/explore/Explore';
import Error from './pages/error/Error';
import RootLayout from './pages/Root/RootLayout';
import ApiCall from './utils/apiCall';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchApiConfiguration();
  },[]);

  const fetchApiConfiguration = async ()=>{
    try{
      const responce = await ApiCall("/configuration")
      const url = {
        backdrop: responce.images.secure_base_url + "original",
        poster: responce.images.secure_base_url + "original",
        profile: responce.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url))
    }
    catch(error){
      console.log("Someting went wrong !");
    }
  } 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: ":mediaType/:id", element: <Details /> },
        { path: "search/:query", element: <SearchResults /> },
        { path: "explore/:mediaType", element: <Explore /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (
  <RouterProvider router={router}>
  </RouterProvider>);
}

export default App
