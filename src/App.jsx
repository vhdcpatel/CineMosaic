import { useEffect, useState } from 'react';
import ApiCall from './utils/apiCall';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/Slices/homeSlice';
import './App.css';
import Footer from './components/footer/Footer';

function App() {
  const [data2,setData] = useState('')

  const Callurl = "/movie/now_playing"; 
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.url)
  console.log(data);

  useEffect(() => {
     apiTesting();
  },[]);

  const apiTesting = async () => {
    const res = await ApiCall(Callurl);
    setData(res);
    dispatch(getApiConfiguration(res));
    }

  return (
    <main className="mainBackGround">
      {/* <h1>Hello world from vhdc!</h1> */}
      {/* {data?.total_results} */}
      <Footer></Footer>
    </main>
  );
}

export default App
