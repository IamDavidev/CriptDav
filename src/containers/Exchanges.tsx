import { useExchanges } from '../hooks/useExchanges';
import { FC } from 'react';
import CardExchanges from '../components/CardExchanges';







const Exchanges = () => {
  const exchangesData = useExchanges();
  console.log(exchangesData);
  return (
    <>
      <h1>Exchanges</h1>
      <CardExchanges data={exchangesData} />
    </>
  );
};

export default Exchanges;
