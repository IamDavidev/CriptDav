import React from 'react';
import Coins from '../containers/Coins';

interface exchangeMap {
  name: String;
  image: string;
  url: string;
  id: string;
}

const CardExchanges = (data: any) => {
  const exchanges = data.data;
  console.log(exchanges);
  return (
    <div className="min-h-screen flex flex-col justify-center align-center ">
      <div className="grid grid-cols-4">
        {exchanges &&
          exchanges.map((exh: exchangeMap) => {
            return (
              <a href={exh.url} target="_blank">
                <div className="py-3 my-4 flex flex-col justify-center items-center">
                  <img src={exh.image} alt={exh.id} />
                  <p>{exh.name}</p>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default CardExchanges;