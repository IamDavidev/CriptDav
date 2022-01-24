import Price from '../components/Price';

export {};

const InfoCoin = (data: any) => {
  const infoCoin = data.data;
  const coinData = infoCoin.market_data;
  return (
    <>
      <section className="grid grid-cols-2 mt-8">
        <div className="flex flex-col justify-center items-center mx-10">
          <img src={infoCoin.image.large} alt={infoCoin.name} />
          <strong className='text-red-700'>{infoCoin.market_cap_rank}</strong>
        </div>
        <div className="">
          <div className="dataGeneral">
            <p>
              circulation :{' '}
              <span className="text-blue-700">
                {coinData.circulating_supply}
              </span>
            </p>
            <p>
              market cap :{' $'}
              <span className="text-blue-700">{coinData.market_cap.usd}</span>
            </p>
          </div>
          <div className="changePrice">
            <h2 className='text-teal-600 text-2xl'>Price change</h2>
            <p>
              price :{' '}
             <span>{infoCoin && infoCoin.market_data.current_price.usd} usd</span>
            
            </p>
            <p className="flex flex-row">
              price change 24h :
              <Price data={coinData.price_change_percentage_24h} />
              %
            </p>
            <p className="flex flex-row">
              price change 7d :{' '}
              <Price data={coinData.price_change_percentage_7d} />
              %
            </p>
            <p className="flex flex-row">
              Price change 14d :{' '}
              <Price data={coinData.price_change_percentage_14d} />
              %
            </p>
          </div>
          <div className="comunity">
            <h2 className='text-teal-600 text-2xl' >Comunity data</h2>
            <p>
              twiter :{' '}
              <span className="text-blue-700">
                {infoCoin.community_data.twitter_followers}
                 {'  '} followers
              </span>
            </p>
            <p>
              reddit :{' '}
              <span className="text-blue-700">
                {infoCoin.community_data.reddit_subscribers}
                {'  '}followers
              </span>
            </p>
          </div>
        </div>
      </section>
      <p className='m-20 text-sky-700'>{infoCoin.description.en}</p>
    </>
  );
};

export default InfoCoin;
