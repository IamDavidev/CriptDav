import { useState, useEffect } from 'react';
import CoinFilter from '../containers/CoinFilter';
import { getCoinFilter } from '../services/getCoinFilter';

const useCoinFilter = ({title}:{title:string})=> {
  const [data , setData] = useState([]);

  useEffect(() => {
    getCoinFilter({title}).then((res) => setData(res));
  }, []);



  return data
};


export default useCoinFilter
