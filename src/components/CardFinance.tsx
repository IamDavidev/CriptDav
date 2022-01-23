import React from 'react';

interface financeMap {
  name: String;
  centralized: boolean;
  website_url: string;
}

const CardFinance = (data: any) => {
  const finance = data.data;
  console.log(finance);
  return (
    <div>
      <div className="grid grid-cols-4">
        {finance &&
          finance.map((finance: financeMap) => {
            return (
              <>
                <a href={finance.website_url} className="py-2 my-4 flex flex-col justify-center items-center ">
                  <p>{finance.name}</p>
                  {finance.centralized ? (
                    <p className="text-red-700">Centralized</p>
                  ) : (
                    <p className='text-yellow-300'>Decentralized</p>
                  )}
                </a>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default CardFinance;
