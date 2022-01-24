import React from 'react';
import CardNfts from '../components/CardNfts';
import useNfts from '../hooks/useNfts';

const Nfts = () => {
  const data = useNfts();
  console.log(data);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Nfts</h1>
      {data ? <CardNfts data={data} /> : <p>loading ...</p>}
    </div>
  );
};

export default Nfts;
