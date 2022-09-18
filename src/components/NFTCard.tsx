import { useState, useEffect } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import Image from "next/image";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";
import UpdateListingModal from "./UpdateListingModal";
import {
    getContractAbi,
    getContractAddr,
    getImagesURLs,
    getCadastreMapURL,
} from "../helper-truhuis";

interface INftCardProps {
    tokenId: number;
    initialPrice: number;
    currencyAddr: string;
    seller: string;
}

export default function NftCard({
    tokenId,
    initialPrice,
    currencyAddr,
    seller,
}: /*
    countryRealEstate,
    initialTime,
    coolingOffPeriod,
    stage,
    */
INftCardProps) {
    const { isWeb3Enabled, account } = useMoralis();
    const [imagesURLs, setImagesURLs] = useState("");
    const [cadastreMapURL, setCadastreMapURL] = useState("");
    const [streetName, setStreetName] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [postcode, setPostcode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [houseType, setHouseType] = useState("");

    const [showModal, setShowModal] = useState(false);
    const hideModal = () => setShowModal(false);

    const dispatch = useNotification();

    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: getContractAbi("TruhuisCadastre"),
        contractAddress: getContractAddr("TruhuisCadastre"),
        functionName: "tokenURI",
        params: { tokenId: tokenId },
    });

    const { runContractFunction: approveERC20 } = useWeb3Contract({
        abi: getContractAbi("MockERC20USDT"),
        contractAddress: getContractAddr("MockERC20USDT"),
        functionName: "approve",
        params: {
            spender: getContractAddr("TruhuisMarketplace"),
            amount: initialPrice,
        },
    });

    const handlePurchaseRealEstateSuccess = async (tx: any) => {
        await tx.wait(1);
        dispatch({
            type: "success",
            message: "Real Estate purchased!",
            title: "Real Estate purchased",
            position: "topR",
        });
    };

    const handleApproveERC20Success = async (tx: any) => {
        await tx.wait(1);
        dispatch({
            type: "success",
            message: "ERC20 approved!",
            title: "ERC20 approved",
            position: "topR",
        });
    };

    const { runContractFunction: purchaseRealEstate } = useWeb3Contract({
        abi: getContractAbi("TruhuisMarketplace"),
        contractAddress: getContractAddr("TruhuisMarketplace"),
        functionName: "purchaseRealEstate",
        params: {
            _seller: seller,
            _currency: currencyAddr,
            _tokenId: tokenId,
        },
    });

    async function updateUI() {
        const tokenURI = await getTokenURI();
        console.log(`The tokenURI is ${tokenURI}`);
        if (tokenURI) {
            const requestURL = (tokenURI as string).replace(
                "ipfs://",
                "https://ipfs.io/ipfs/"
            );
            const tokenURIResponse = await (await fetch(requestURL)).json();
            const location = tokenURIResponse.attributes[0].location;
            const cadastreMapURI = tokenURIResponse.image;
            const cadastreMapURL = getCadastreMapURL(tokenId, cadastreMapURI);
            const imagesURLs = getImagesURLs(tokenId);

            setImagesURLs(imagesURLs);
            setCadastreMapURL(cadastreMapURL);
            setStreetName(location.street_name);
            setStreetNumber(location.street_number);
            setPostcode(location.postcode);
            setCity(location.city);
            setCountry(location.country);
            setHouseType(tokenURIResponse.attributes[1].house_type);
        }
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI();
        }
    }, [isWeb3Enabled]);

    const isOwnedByUser = seller == account || seller == undefined;
    //const formattedSellerAddr = isOwnedByUser ? "you" : truncateStr(seller || "", 15);

    const handleCardClick = async () => {
        if (isOwnedByUser) {
            setShowModal(true);
        } else {
            await approveERC20({
                onError: (error) => console.log(error),
                onSuccess: handleApproveERC20Success,
            });
            await purchaseRealEstate({
                onError: (error) => console.log(error),
                onSuccess: handlePurchaseRealEstateSuccess,
            });
        }
    };

    if (country === "NLD") {
        return (
            <div>
                <div>
                    {imagesURLs ? (
                        <div>
                            <UpdateListingModal
                                isVisible={showModal}
                                tokenId={tokenId}
                                currency={currencyAddr}
                                onClose={hideModal}
                            />
                            <div className="relative">
                                <div className="flex m-3 flex-col">
                                    <Image
                                        className="rounded-3xl "
                                        loader={() => imagesURLs}
                                        src={imagesURLs}
                                        height="700"
                                        width="700"
                                    />
                                    <div className="flex font-futura flex-col xl:text-3xl text-truhuisGrey font-light">
                                        <div className="mt-3 border border-truhuisGrey rounded-full w-full" />

                                        <div className="mt-1 font-futuraBold uppercase xl:text-4xl text-truhuisBlue">
                                            {houseType}
                                        </div>
                                        <div className="">
                                            {streetName} {streetNumber}{" "}
                                            {postcode}
                                        </div>
                                        <div className="">{city}</div>
                                        <div className="mt-1 border border-truhuisGrey rounded-full w-full" />
                                        <div className="mt-1">
                                            EURT{" "}
                                            {ethers.utils.formatUnits(
                                                initialPrice,
                                                "ether"
                                            )}
                                        </div>
                                        <div className="mt-1">
                                            TID {tokenId}
                                        </div>
                                        <button
                                            className="h-9 mt-1 w-full font-bold text-white bg-truhuisBlue rounded-xl"
                                            onClick={handleCardClick}
                                        >
                                            BUY
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        );
    }

    if (country === "USA") {
        return (
            <div>
                <div className="">
                    {imagesURLs ? (
                        <div>
                            <UpdateListingModal
                                isVisible={showModal}
                                tokenId={tokenId}
                                currency={currencyAddr}
                                onClose={hideModal}
                            />
                            <div className="relative">
                                <div className="flex m-2 flex-col">
                                    <Image
                                        className="rounded-xl m-2"
                                        loader={() => imagesURLs}
                                        src={imagesURLs}
                                        height="700"
                                        width="700"
                                    />
                                    <div className="flex font-futura flex-col uppercase xl:text-xl text-truhuisGrey font-light">
                                        <div className="mt-2 border border-truhuisGrey rounded-full w-full" />

                                        <div className="mt-1 font-futuraBold xl:text-xl text-truhuisBlue">
                                            {houseType}
                                        </div>
                                        <div className="">
                                            {postcode} {streetName}{" "}
                                            {streetNumber}
                                        </div>
                                        <div className="">{city}</div>
                                        <div className="my-1 border border-truhuisGrey rounded-full w-full" />
                                        <div className="">
                                            USDT{" "}
                                            {ethers.utils.formatUnits(
                                                initialPrice,
                                                "ether"
                                            )}
                                        </div>
                                        <div className="">TID {tokenId}</div>
                                        <button
                                            className="h-7 mt-1 w-full font-futuraBold text-truhuisWhite bg-truhuisBlue rounded-lg"
                                            onClick={handleCardClick}
                                        >
                                            BUY
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        );
    }
}
