import { lazy, Suspense } from 'react';

import CardFinance from '../components/CardFinance';
import { useFinance } from '../hooks/useFinance';

const Finance = () => {
  const financeData = useFinance();
  return (
    <Suspense
      fallback={
        <h1 className="text-center text-2xl font-bold text-blue-700">
          Loading...
        </h1>
      }
    >
      <h1>Finance</h1>
      <DataFinance />
    </Suspense>
  );
};

export default Finance;

const DataFinance = () => {
  const financeData = useFinance();
  return <CardFinance data={financeData} />;
};
