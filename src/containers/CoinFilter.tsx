import { useParams } from 'react-router-dom';
import InfoCoin from './InfoCoin';
import useCoinFilter from '../hooks/useCoinFilter';


const CoinFilter = () => {
  const { title } = useParams();

  const coinInfo= useCoinFilter({ title: title || 'bitcoin' });
  return (
    <>
      <h1 className='text-blue-500 text-3xl uppercase tracking-widest'>{title}</h1>
      {coinInfo ? <InfoCoin data={coinInfo} /> : <p>loading...</p>}
    </>
  );
};
export default CoinFilter;

