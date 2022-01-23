import CardFinance from "../components/CardFinance";
import { useFinance } from "../hooks/useFinance";

const Finance = () => {
  const financeData = useFinance()
  return <>
    <h1>Finance</h1>
      {
        financeData ? <CardFinance data={financeData}/>
        : <p>
          loading...
        </p>
      } 
  </>;
};


export default Finance 