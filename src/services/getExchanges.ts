export {};

export const getExchanges = async (): Promise<[]> => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/exchanges'
  ).then((res) => res.json());
  return response;
};
