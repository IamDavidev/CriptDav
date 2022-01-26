import React, { Suspense } from 'react';
import CardNfts from '../components/CardNfts';
import useNfts from '../hooks/useNfts';

const Nfts = () => {
  const data = useNfts();
  return (
    <Suspense
      fallback={
        <div className="text-center text-2xl font-bold text-blue-700">
          Loading...
        </div>
      }
    >
      <div className="flex flex-col justify-center items-center">
        <h1>Nfts</h1>
        <DataCoins />
      </div>
    </Suspense>
  );
};

export default Nfts;

const DataCoins = () => {
  const dataNfts = useNfts();
  return <CardNfts data={dataNfts} />;
};
