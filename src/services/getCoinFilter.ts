export const getCoinFilter = async ({
  title,
}: {
  title: string;
}): Promise<[]> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${title}`
  ).then((res) => res.json());

  return response;
};
