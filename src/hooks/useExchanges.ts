import { useState, useEffect } from 'react';
import { getExchanges } from '../services/getExchanges';

export const useExchanges = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getExchanges().then((res) => setData(res));
  },[]);
  return data
};
