import React from 'react';
import CardNfts from '../components/CardNfts';
import useNfts from '../hooks/useNfts';

const Nfts = () => {
  const data = useNfts();
  console.log(data);
  return (
    <div>
      <h1>Nfts</h1>
      {data ? <CardNfts data={data} /> : <p>loading ...</p>}
    </div>
  );
};

export default Nfts;
