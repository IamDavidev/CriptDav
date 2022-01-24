import { useExchanges } from '../hooks/useExchanges';
import { FC } from 'react';
import CardExchanges from '../components/CardExchanges';
import Finance from './Finance';







const Exchanges = () => {
  const exchangesData = useExchanges();
  return (
    <>
      <h1>Exchanges</h1>
      <CardExchanges data={exchangesData} />
      <Finance />
    </>
  );
};

export default Exchanges;
