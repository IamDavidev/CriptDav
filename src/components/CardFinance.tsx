import React from 'react';

interface financeMap {
  name: String;
}

const CardFinance = (data: any) => {
  const finance = data.data;
  return (
    <div>
      <h1>Finance</h1>
      {finance &&
        finance.map((finance: financeMap) => {
          return (
            <>
              <p>{finance.name}</p>
            </>
          );
        })}
    </div>
  );
};

export default CardFinance;
