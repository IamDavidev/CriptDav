import { Link } from 'react-router-dom';

interface coinMap {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  id: string;
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
              <Link to={`/coin/${coin.id}`} key={coin.id}>
                <div className="flex flex-col justify-center items-center py-3 my-3">
                  <img src={coin.image} className="w-20" />
                  <h2>
                    {coin.name}:({' '}
                    <span className="text-blue-800">{coin.symbol}</span>)
                  </h2>
                  <strong>{price}</strong>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default CardCoin;
