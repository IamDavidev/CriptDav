import CardCoin from '../components/cardCoin';
import { useCoins } from '../hooks/useCoins';
import { FC, Suspense, lazy } from 'react';

const Coins: FC = () => {
  return (
    <Suspense
      fallback={
        <h1 className="text-center text-2xl font-bold text-gray-700">
          Loading...
        </h1>
      }
    >
      <DataCoins />
    </Suspense>
  );
};

export default Coins;

const DataCoins = () => {
  const CoinsData = useCoins();
  return <CardCoin data={CoinsData} />;
};
