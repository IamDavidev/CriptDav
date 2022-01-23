import React from 'react';
import CardNfts from '../components/CardNfts';
import useNfts from '../hooks/useNfts';

const Nfts = () => {
  const data = useNfts();
  return (
    <div>
      <h1>Nfts</h1>
      {data && data.length > 0 && <CardNfts data={data} />}
    </div>
  );
};

export default Nfts;
