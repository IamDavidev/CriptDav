import { useParams } from 'react-router-dom';
import InfoCoin from './InfoCoin';
import useCoinFilter from '../hooks/useCoinFilter';


const CoinFilter = () => {
  const { title } = useParams();

  const coinInfo= useCoinFilter({ title: title || 'bitcoin' });
  console.log(coinInfo);
  return (
    <>
      <h1>{title}</h1>
      {coinInfo ? <InfoCoin data={coinInfo} /> : <p>loading...</p>}
    </>
  );
};
export default CoinFilter;
