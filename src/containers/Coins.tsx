import CardCoin from '../components/cardCoin';
import { useCoins } from '../hooks/useCoins';
import { FC } from 'react';
const Coins: FC = ({ children }) => {
  const coinsData = useCoins();
  console.log(coinsData)
  return (
    <>
      <h1>coins</h1>
      <CardCoin data={coinsData} />
    </>
  );
};

export default Coins;
