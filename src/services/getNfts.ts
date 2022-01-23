export const getNfts = async (): Promise<[]> => {
  const response = fetch(
    'https://api.opensea.io/api/v1/bundles?limit=20&offset=0'
  ).then((res) => res.json());
  return response;
};

