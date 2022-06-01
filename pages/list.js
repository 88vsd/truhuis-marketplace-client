import { Form, useNotification, Button } from "web3uikit";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";
import TruhuisCadastre from "../constants/contracts/TruhuisCadastre.json";
import TruhuisMarketplace from "../constants/contracts/TruhuisMarketplace.json";
import contractAddresses from "../constants/deployments/map.json";
import { useEffect, useState } from "react";

export default function Home() {
    const { account, isWeb3Enabled } = useMoralis();
    const marketplaceAddr = contractAddresses["dev"]["TruhuisMarketplace"][0];
    const cadastreAddr = contractAddresses["dev"]["TruhuisCadastre"][0];
    const mockERC20EURTAddr = contractAddresses["dev"]["MockERC20EURT"][0];
    const dispatch = useNotification();
    const [sellerProceeds, setSellerProceeds] = useState("0");

    const { runContractFunction } = useWeb3Contract();

    console.log(marketplaceAddr);
    console.log(cadastreAddr);
    console.log(account);
    console.log(mockERC20EURTAddr);

    async function approveAndList(data) {
        console.log("Approving...");
        const currency = data.data[0].inputResult;
        const tokenId = data.data[1].inputResult;
        const initialPrice = ethers.utils.parseUnits(data.data[2].inputResult, "ether").toString();

        console.log("HELLO");

        const approveOptions = {
            abi: TruhuisCadastre.abi,
            contractAddress: cadastreAddr,
            functionName: "approve",
            params: {
                to: marketplaceAddr,
                tokenId: tokenId,
            },
        };

        console.log("HELLO222");

        await runContractFunction({
            params: approveOptions,
            onSuccess: () => handleApproveSuccess(currency, tokenId, initialPrice),
            onError: (error) => {
                console.log(error);
            },
        });
    }

    const handleApproveSuccess = async (currency, tokenId, initialPrice) => {
        console.log("Ok! Now time to list");

        const listOptions = {
            abi: TruhuisMarketplace.abi,
            contractAddress: marketplaceAddr,
            functionName: "listRealEstate",
            params: {
                _currency: currency,
                _tokenId: tokenId,
                _price: initialPrice,
            },
        };

        await runContractFunction({
            params: listOptions,
            onSuccess: handleListRealEstateSuccess,
            onError: (error) => console.log(error),
        });
    };

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
        const returnedProceeds = await runContractFunction({
            params: {
                abi: TruhuisMarketplace.abi,
                contractAddress: marketplaceAddr,
                functionName: "getSellerProceeds",
                params: {
                    _seller: account,
                    _currency: mockERC20EURTAddr,
                },
            },
            onError: (error) => console.log(error),
        });
        if (returnedProceeds) {
            setSellerProceeds(returnedProceeds.toString());
        }
    }

    useEffect(() => {
        setupUI();
    }, [sellerProceeds, account, isWeb3Enabled /*, chainId*/]);

    return (
        <div className="relative ring-4 ring-red mx-auto">
            <Form
                onSubmit={approveAndList}
                data={[
                    {
                        name: "Currency",
                        type: "text",
                        inputWidth: "50%",
                        value: "",
                        key: "currency",
                    },
                    {
                        name: "Token ID",
                        type: "number",
                        value: "",
                        key: "tokenId",
                    },
                    {
                        name: "Price (in EURT)",
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
                    onClick={() => {
                        runContractFunction({
                            params: {
                                abi: TruhuisMarketplace.abi,
                                contractAddress: marketplaceAddr,
                                functionName: "withdrawSellerProceeds",
                                params: {
                                    _currency: mockERC20EURTAddr,
                                },
                            },
                            onError: (error) => console.log(error),
                            onSuccess: handleSellerWithdrawProceedsSuccess,
                        });
                    }}
                    text="Withdraw"
                    type="button"
                />
            ) : (
                <div>No proceeds detected</div>
            )}
        </div>
    );
}
