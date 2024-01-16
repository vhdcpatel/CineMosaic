import axios from "axios";

// const token = import.meta.env.VITE_APP_TMDB_TOKEN;
const token = import.meta.env.VITE_APP_TMDB_TOKEN;
const baseUrl = "https://api.themoviedb.org/3";

const headers = {
  accept: 'application/json',
  Authorization: 'Bearer ' + token,
}

const ApiCall = async (url, params) => {
  try {
    const { data } = await axios.get(baseUrl + url, {
      method: "GET",
      headers,
      params,
    });
    return data;
  }
  catch (err) {
    return err;
  }
}

export default ApiCall;