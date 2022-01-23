interface coinMap {
  name: String;
  symbol: String;
}
interface PropsData{
    data: []

}


const CardCoin = (data: any) => {
  const coins = data.data;
  return (
    <>
      {coins &&
        coins.map((coin: coinMap) => {
          return (
            <>
              <div className="">
                <h1>
                  {coin.name}:( <span className="text-blue-800">
                    {coin.symbol}
                      </span>)
                </h1>
              </div>
            </>
          );
        })}
    </>
  );
};

export default CardCoin;
