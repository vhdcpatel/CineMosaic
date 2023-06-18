import { useEffect, useState } from 'react';
import ApiCall from './utils/apiCall';
import './App.css'

function App() {
  const url = "movie/now_playing"; 
  
  useEffect(()=>{
    apiTesting();
  },[]);

  const apiTesting = async () => {
    const res = await ApiCall(url);
    console.log(res);   
    }

  return (
    <main className='mainBackGround'>
      <h1>Hello world from vhdc!</h1>
    </main>
  )
}

export default App
