import { useParams } from 'react-router-dom';
import InfoCoin from './InfoCoin';
import useCoinFilter from '../hooks/useCoinFilter';
import { Suspense } from 'react';

const CoinFilter = () => {
  const { title }: any = useParams();
  return (
    <>
      <h1 className="text-blue-500 text-3xl uppercase tracking-widest">
        {title}
      </h1>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">loading</div>
        }
      >
        <CoinData title={title} />
      </Suspense>
      {/* {coinInfo ? <InfoCoin data={coinInfo} /> : <p>loading...</p>} */}
    </>
  );
};
export default CoinFilter;

const CoinData = ({ title }: { title: string }) => {
  const dataFilter: any = useCoinFilter({ title });
  return (
    <>
      {dataFilter && dataFilter.image ? (
        <InfoCoin data={dataFilter} />
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};
