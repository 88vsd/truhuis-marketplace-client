import { Modal, Input, useNotification } from "web3uikit";
import { useState } from "react";
import TruhuisMarketplace from "../constants/contracts/TruhuisMarketplace.json";
import contractAddresses from "../constants/deployments/map.json";
import { useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";

export default function UpdateListingModal({
    price,
    tokenId,
    countryRealEstate,
    initialPrice,
    currency,
    initialTime,
    coolingOffPeriod,
    stage,
    seller,
    isVisible,
    onClose,
}) {
    let chainId = process.env.chainId || "dev";

    const dispatch = useNotification();
    const [priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0);

    const handleUpdateListingSuccess = async (tx) => {
        await tx.wait(1);
        // notification
        dispatch({
            type: "success",
            message: "Listing updated successfully",
            title: "Listing updated: please refresh",
            position: "topR",
        });
        onClose && onClose();
        setPriceToUpdateListingWith("0");
    };

    const { runContractFunction: updateListing } = useWeb3Contract({
        abi: TruhuisMarketplace.abi,
        contractAddress: contractAddresses[chainId]["TruhuisMarketplace"][0],
        functionName: "updateListing",
        params: {
            _currency: currency,
            _tokenId: tokenId,
            _newPrice: ethers.utils.parseEther(priceToUpdateListingWith.toString()),
        },
    });

    return (
        <Modal
            isVisible={isVisible}
            onCancel={onClose}
            onCloseButtonPressed={onClose}
            onOk={() => {
                updateListing({
                    onError: (error) => {
                        console.log(error);
                    },
                    onSuccess: handleUpdateListingSuccess,
                });
            }}
        >
            <Input
                label="Update listing price in USDT Currency"
                name="New listing price"
                type="number"
                onChange={(event) => {
                    setPriceToUpdateListingWith(event.target.value);
                }}
            />
        </Modal>
    );
}
