export {};

interface coinMap {
  name: string;
}

const InfoCoin = (data: any) => {
  const infoCoin = data.data;
  console.log(infoCoin.market_data.price_change_percentage_24h);
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="">
          <img src={infoCoin.image.large} alt={infoCoin.name} />
        </div>
        <div className="">
          <strong>
            price :{' '}
            <span className="text-red-500">
              {infoCoin && infoCoin.market_data.current_price.usd}
            </span>
          </strong>
          <p>
            <strong>
              price change 24h :
              {Number(infoCoin.market_data.price_change_percentage_24h) < 0 ? (
                <span className="text-red-500">
                  {' '}
                  {infoCoin.market_data.price_change_percentage_24h}{' '}
                </span>
              ) : (
                <span className="text-green-400">
                  {infoCoin.market_data.price_change_percentage_24h}
                </span>
              )}
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoCoin;
