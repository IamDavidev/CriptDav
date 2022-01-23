import { useState, useEffect } from 'react';
import { getNfts } from '../services/getNfts';

const useNfts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNfts().then((res) => setData(res));
  }, []);
  return data
};


export default useNfts