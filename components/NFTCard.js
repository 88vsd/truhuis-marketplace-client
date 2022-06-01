import { useState, useEffect } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import Image from "next/image";
import { Card, useNotification } from "web3uikit";
import { ethers } from "ethers";
import UpdateListingModal from "./UpdateListingModal";
import { getContractAbi, getContractAddr } from "../helper-truhuis";

const truncateStr = (fullStr, strLen) => {
    if (fullStr.length <= strLen) return fullStr;
    const separator = "...";
    const separatorLength = separator.length;
    const charsToShow = strLen - separatorLength;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
    return (
        fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars)
    );
};

export default function NftCard({
    tokenId,
    countryRealEstate,
    initialPrice,
    currencyAddr,
    initialTime,
    coolingOffPeriod,
    stage,
    seller,
}) {
    const { isWeb3Enabled, account } = useMoralis();
    const [imageURI, setImageURI] = useState("");
    const [streetName, setStreetName] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [postcode, setPostcode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [houseType, setHouseType] = useState("Condo");

    const [showModal, setShowModal] = useState(false);
    const hideModal = () => setShowModal(false);

    const dispatch = useNotification();
    const { runContractFunction } = useWeb3Contract();

    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: getContractAbi("TruhuisCadastre"),
        contractAddress: getContractAddr("TruhuisCadastre"),
        functionName: "tokenURI",
        params: { tokenId: tokenId },
    });

    const approveOptions = {
        abi: getContractAbi("MockERC20EURT"),
        contractAddress: getContractAddr("MockERC20EURT"),
        functionName: "approve",
        params: {
            spender: getContractAddr("TruhuisMarketplace"),
            amount: initialPrice,
        },
    };

    const purchaseRealEstateOptions = {
        abi: getContractAbi("TruhuisMarketplace"),
        contractAddress: getContractAddr("TruhuisMarketplace"),
        functionName: "purchaseRealEstate",
        params: {
            _seller: seller,
            _currency: currencyAddr,
            _tokenId: tokenId,
        },
    };

    async function updateUI() {
        const tokenURI = await getTokenURI();
        console.log(`The tokenURI is ${tokenURI}`);
        if (tokenURI) {
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
            const tokenURIResponse = await (await fetch(requestURL)).json();
            const location = tokenURIResponse.attributes[0].location;
            const imageURI = tokenURIResponse.image;
            const imageURIURL =
                imageURI.replace("ipfs://", "https://ipfs.io/ipfs/") + `/${tokenId}.png`;

            setImageURI(imageURIURL);
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
    const formattedSellerAddr = isOwnedByUser ? "you" : truncateStr(seller || "", 15);

    const handleCardClick = async () => {
        if (isOwnedByUser) {
            setShowModal(true);
        } else {
            await runContractFunction({
                params: approveOptions,
                onError: (error) => console.log(error),
                onSuccess: handleApproveERC20Success,
            });
            await runContractFunction({
                params: purchaseRealEstateOptions,
                onError: (error) => console.log(error),
                onSuccess: handlePurchaseRealEstateSuccess,
            });
        }
    };

    const handleApproveERC20Success = async (tx) => {
        await tx.wait(1);
        dispatch({
            type: "success",
            message: "ERC20 approved!",
            title: "ERC20 approved",
            position: "topR",
        });
    };

    const handlePurchaseRealEstateSuccess = async (tx) => {
        await tx.wait(1);
        dispatch({
            type: "success",
            message: "Real Estate purchased!",
            title: "Real Estate purchased",
            position: "topR",
        });
    };

    if (country === "NLD") {
        return (
            <div>
                <div>
                    {imageURI ? (
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
                                        loader={() => imageURI}
                                        src={imageURI}
                                        height="700"
                                        width="700"
                                    />
                                    <div className="flex flex-col xl:text-3xl text-truhuisGrey font-light">
                                        <div className="mt-3 border border-truhuisGrey rounded-full w-full" />

                                        <div className="mt-1 font-bold uppercase xl:text-4xl text-truhuisBlue">
                                            {houseType}
                                        </div>
                                        <div className="">
                                            {streetName} {streetNumber} {postcode}
                                        </div>
                                        <div className="">{city}</div>
                                        <div className="mt-1 border border-truhuisGrey rounded-full w-full" />
                                        <div className="mt-1">
                                            EURT {ethers.utils.formatUnits(initialPrice, "ether")}
                                        </div>
                                        <div className="mt-1">TID {tokenId}</div>
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
                <div>
                    {imageURI ? (
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
                                        loader={() => imageURI}
                                        src={imageURI}
                                        height="700"
                                        width="700"
                                    />
                                    <div className="flex flex-col xl:text-3xl text-truhuisGrey font-light">
                                        <div className="mt-3 border border-truhuisGrey rounded-full w-full" />

                                        <div className="mt-1 font-bold uppercase xl:text-4xl text-truhuisBlue">
                                            {houseType}
                                        </div>
                                        <div className="">
                                            {postcode} {streetName} {streetNumber}
                                        </div>
                                        <div className="">{city}</div>
                                        <div className="mt-1 border border-truhuisGrey rounded-full w-full" />
                                        <div className="mt-1">
                                            USDT {ethers.utils.formatUnits(initialPrice, "ether")}
                                        </div>
                                        <div className="mt-1">TID {tokenId}</div>
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
}
