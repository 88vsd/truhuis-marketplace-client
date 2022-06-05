import { Form, useNotification, Button } from "web3uikit";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { getContractAbi, getContractAddr } from "../helper-truhuis";

export default function Home() {
    const { account, isWeb3Enabled, chainId } = useMoralis();
    const dispatch = useNotification();
    const [sellerProceeds, setSellerProceeds] = useState("0");

    const { runContractFunction } = useWeb3Contract();

    async function approveAndList(data) {
        console.log("Approving...");
        const tokenId = data.data[0].inputResult;
        const initialPrice = ethers.utils.parseUnits(data.data[1].inputResult, "ether").toString();

        const approveERC721Options = {
            contractAddress: getContractAddr("TruhuisCadastre"),
            functionName: "approve",
            abi: getContractAbi("TruhuisCadastre"),
            params: {
                to: getContractAddr("TruhuisMarketplace"),
                tokenId: tokenId,
            },
        };

        // Fix: can not run approve function due to:
        // https://github.com/MetaMask/metamask-extension/issues/14459
        // Instead approve the token via brownie console
        //
        //await runContractFunction({
        //    params: approveERC721Options,
        //    onSuccess: () => handleApproveSuccess(tokenId, initialPrice),
        //    onError: (error) => {
        //        console.log(error);
        //    },
        //});

        // Run this function while the above function is unavalable.
        await handleApproveSuccess(tokenId, initialPrice);
    }

    async function handleApproveSuccess(tokenId, initialPrice) {
        console.log("Ok! Now time to list");

        const listRealEstateOptions = {
            abi: getContractAbi("TruhuisMarketplace"),
            contractAddress: getContractAddr("TruhuisMarketplace"),
            functionName: "listRealEstate",
            params: {
                _currency: getContractAddr("MockERC20USDT"),
                _tokenId: tokenId,
                _price: initialPrice,
            },
        };

        await runContractFunction({
            params: listRealEstateOptions,
            onSuccess: handleListRealEstateSuccess,
            onError: (error) => console.log(error),
        });
    }

    const handleListRealEstateSuccess = async (tx) => {
        await tx.wait(1);
        dispatch({
            type: "success",
            message: "NFT Real Estate listed!",
            title: "NFT Real Estate listed",
            position: "topR",
        });
    };

    async function handleSellerWithdrawProceedsSuccess(tx) {
        await tx.wait(1);
        dispatch({
            type: "success",
            message: "Withdrawing proceeds",
            position: "topR",
        });
    }

    async function setupUI() {
        const getSellerProceedsOptions = {
            abi: getContractAbi("TruhuisMarketplace"),
            contractAddress: getContractAddr("TruhuisMarketplace"),
            functionName: "getSellerProceeds",
            params: {
                _seller: account,
                _currency: getContractAddr("MockERC20USDT"),
            },
        };

        const returnedProceeds = await runContractFunction({
            params: getSellerProceedsOptions,
        });

        if (returnedProceeds) {
            setSellerProceeds(returnedProceeds.toString());
        }
    }

    async function withdrawSellerProceeds() {
        await runContractFunction({
            params: {
                abi: getContractAbi("TruhuisMarketplace"),
                contractAddress: getContractAddr("TruhuisMarketplace"),
                functionName: "withdrawSellerProceeds",
                params: {
                    _currency: getContractAddr("MockERC20USDT"),
                },
            },
            onError: (error) => console.log(error),
            onSuccess: handleSellerWithdrawProceedsSuccess,
        });
    }

    useEffect(() => {
        setupUI();
    }, [sellerProceeds, account, isWeb3Enabled, chainId]);

    return (
        <div className="relative ring-4 ring-red mx-auto">
            <Form
                onSubmit={approveAndList}
                data={[
                    {
                        name: "Token ID",
                        type: "number",
                        value: "",
                        key: "tokenId",
                    },
                    {
                        name: "Price (in USDT)",
                        type: "number",
                        value: "",
                        key: "initialPrice",
                    },
                ]}
                title="List you Real Estate!"
                id="Main Form"
            />
            <div>Withdraw {sellerProceeds} proceeds</div>
            {sellerProceeds != "0" ? (
                <Button
                    onClick={withdrawSellerProceeds}
                    text="Withdraw"
                    theme="primary"
                    type="button"
                />
            ) : (
                <div>No withdrawable proceeds detected</div>
            )}
        </div>
    );
}
