import CardFinance from '../components/CardFinance';
import { useFinance } from '../hooks/useFinance';

const Finance = () => {
  const financeData = useFinance();
  return (
    <>
      <h1>Finance</h1>
      <div className="min-h-screen">
        {financeData ? <CardFinance data={financeData} /> : <p>loading...</p>}
      </div>
    </>
  );
};

export default Finance;
