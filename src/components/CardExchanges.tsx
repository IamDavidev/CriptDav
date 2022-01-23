import React from 'react';

interface exchangeMap {
    name: String;
}



const CardExchanges = (data: any) => {
    const exchanges = data.data;
  return <div>
    <h1>cardExchanges</h1>
    {exchanges && exchanges.map((exh: exchangeMap)=> {
            return (
                <>
                   <p>
                       {
                           exh.name
                       }
                   </p>
                </>
            )
    })}
  </div>;
};

export default CardExchanges;
