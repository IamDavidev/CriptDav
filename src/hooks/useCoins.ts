import { useState, useEffect } from 'react';
import { getCoins } from '../services/getCoins';

export const useCoins = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCoins().then((res) => setData(res));
  },[]);

  return data;
};

export {};
