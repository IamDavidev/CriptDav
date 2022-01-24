import { useParams } from 'react-router-dom';
import InfoCoin from '../components/InfoCoin';
import useCoinFilter from '../hooks/useCoinFilter';

interface coinsDataMap {
  name: string;
  image: {};
  market_data: {
    current_price: {
      usd: string;
    };
  };
}

const CoinFilter = () => {
  const { title } = useParams();

  const coinInfo: coinsDataMap = useCoinFilter({ title: title || 'bitcoin' });
  console.log(coinInfo);
  return (
    <>
      <h1>{title}</h1>
      {coinInfo ? <InfoCoin data={coinInfo} /> : <p>loading...</p>}
    </>
  );
};
export default CoinFilter;
