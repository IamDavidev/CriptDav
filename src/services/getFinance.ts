export {};

export const getFinance = async (): Promise<[]> => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/finance_platforms'
  ).then((res) => res.json());
  return response;
};
