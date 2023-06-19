import React, { useEffect, useState } from 'react'
import ApiCall from "../utils/apiCall"

const useFetch = (url) => {

  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(null);
  const [error,setError] = useState(null);

  useEffect(()=>{
    setLoading("Loading...");
    setData(null);
    setError(null);

    const fetchApi = async () => {
      try{
        const res = await ApiCall(url);
        setLoading(false);
        setData(res);
      }
      catch(e) {
        // console.log(e)
        setLoading(false);
        setError("Could not fetch data.")
      }
    }
    fetchApi();
  },[url]);

  return { data, loading, error };
}

export default useFetch;
