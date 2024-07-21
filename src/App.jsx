import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from "./store/Slices/homeSlice";
import {  BrowserRouter } from "react-router-dom";
import './App.css';

import ApiCall from './utils/apiCall';
import AppRoutes from './routes/AppRoutes';
import VPNDialog from './components/vpnDialog/VPNDialog';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const [vpnDialogBoxVisible, setVpnDialogBoxVisible] = useState(false);

  const handleDialogClose = ()=>{
    setVpnDialogBoxVisible(false);
  }

  useEffect(() => {
    fetchApiConfiguration();
    genresCall();
  }, []);

  const fetchApiConfiguration = async () => {
    try {
      const response = await ApiCall("/configuration");
      if(axios.isAxiosError(response)){
        throw response;
      }

      const url = {
        backdrop: response.images.secure_base_url + "original",
        poster: response.images.secure_base_url + "original",
        profile: response.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url))
    }
    catch (error) {
      console.log(error);
      if(error.code === 'ERR_NETWORK'){
        setVpnDialogBoxVisible(true);
      }
    }
  }

  const genresCall = async () => {
    // Wait for response for both of api call;
    try{
      let promises = [];
      let endPoints = ["tv", "movie"];
      let allGenres = {};
  
      endPoints.forEach((url) => {
        promises.push(ApiCall(`/genre/${url}/list`));
      });
      const data = await Promise.all(promises);
      
      if(axios.isAxiosError(data)){
        throw response;
      }
  
      data.map(({ genres }) => {
        genres.map((item) => (allGenres[item.id] = item.name));
      });
  
      dispatch(getGenres(allGenres));

    }catch(error){
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <VPNDialog isOpen={vpnDialogBoxVisible} handleClose={handleDialogClose} />
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App
