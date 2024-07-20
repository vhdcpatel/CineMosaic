import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from "./store/Slices/homeSlice";
import {  BrowserRouter as Router } from "react-router-dom";
import './App.css';

import ApiCall from './utils/apiCall';
import AppRoutes from './routes/AppRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfiguration();
    genresCall();
  }, []);

  const fetchApiConfiguration = async () => {
    try {
      const responce = await ApiCall("/configuration")
      const url = {
        backdrop: responce.images.secure_base_url + "original",
        poster: responce.images.secure_base_url + "original",
        profile: responce.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url))
    }
    catch (error) {
      console.log(error);
      console.log("Someting went wrong !");
    }
  }

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(ApiCall(`/genre/${url}/list`));
    });

    // Wait for responce for both of api call;
    const data = await Promise.all(promises);
    console.log(data);

    data.map(({ genres }) => {
      genres.map((item) => (allGenres[item.id] = item.name));
    });

    dispatch(getGenres(allGenres));
  }

  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App
