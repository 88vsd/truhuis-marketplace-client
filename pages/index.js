import { useMoralisQuery, useMoralis } from "react-moralis";
import NFTCard from "../components/NFTCard";

export default function Home() {
    const { isWeb3Enabled } = useMoralis();
    // Getting all active listings from Moralis Database
    const { data: listedNFTs, isFetching: fetchingListedNFTs } = useMoralisQuery(
        "ActiveListing", // table name
        (query) => query.limit(10).descending("tokenId")
    );

    return (
        <div className="mx-auto grid grid-rows-1 ring-truhuisGrey rounded-3xl ring-2 relative">
            <div className="grid grid-rows-1 grid-cols-3 divide-x-2 divide-truhuisGrey">
                {isWeb3Enabled ? (
                    fetchingListedNFTs ? (
                        <div>Loading currently listed NFT Real Estates...</div>
                    ) : (
                        listedNFTs.map((nft) => {
                            console.log(nft.attributes);
                            const {
                                tokenId,
                                countryRealEstate,
                                initialPrice,
                                currency,
                                initialTime,
                                coolingOffPeriod,
                                stage,
                                seller,
                            } = nft.attributes;
                            return (
                                <div>
                                    <NFTCard
                                        tokenId={tokenId}
                                        countryRealEstate={countryRealEstate}
                                        initialPrice={initialPrice}
                                        currencyAddr={currency}
                                        initialTime={initialTime}
                                        coolingOffPeriod={coolingOffPeriod}
                                        stage={stage}
                                        seller={seller}
                                        key={`${tokenId}`}
                                    />
                                </div>
                            );
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    );
}
