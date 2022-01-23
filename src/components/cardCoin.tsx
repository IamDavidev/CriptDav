interface coinMap {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
}
interface PropsData {
  data: [];
}

const CardCoin = (data: any) => {
  const coins = data.data;
  return (
    <>
      <div className="min-h-screen grid grid-cols-4 place-items-center">
        {coins &&
          coins.map((coin: coinMap) => {
            const price = coin.current_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            return (
              <>
                <div className="flex flex-col justify-center items-center py-3 my-3">
                  <img src={coin.image} className="w-20" />
                  <h1>
                    {coin.name}:({' '}
                    <span className="text-blue-800">{coin.symbol}</span>)
                  </h1>
                  <strong>{price}</strong>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default CardCoin;
