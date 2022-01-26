interface nftMap {
  name: string;
  assets: [];
  permalink: string;
  slug: string
}

const CardNfts = (data: any) => {
  const nfts = data.data.bundles;
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center">
        {nfts &&
          nfts.map((nft: nftMap) => {
            return (
              <a href={nft.permalink} key={nft.slug} className="flex flex-col justify-center items-center" target='_blank'>
                <h2 className="my-4 text-blue-400">{nft.name}</h2>
                <div className="grid grid-cols-2 place-items-center">
                  {nft.assets &&
                    nft.assets.map((asset: any) => {
                      return (
                        <div key={asset.id}>
                          <img
                            src={asset.image_preview_url}
                            className="px-1 m-3 w-40 object-cover"
                            alt={asset.name}
                          />
                        </div>
                      );
                    })}
                </div>
              </a>
            );
          })}
      </div>
    </>
  );
};

export default CardNfts;
