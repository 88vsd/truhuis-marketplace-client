require("dotenv").config();
const Moralis = require("moralis/node");
const contractAddresses = require("./constants/deployments/map.json");

let chainId = process.env.chainId || "dev";
let moralisChainId = chainId == "dev" ? "1337" : chainId;
const contractAddr = contractAddresses[chainId]["TruhuisMarketplace"][0];

const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;
const masterKey = process.env.masterKey;

async function main() {
    await Moralis.start({ serverUrl, appId, masterKey });
    console.log(`Working with contract address ${contractAddr}`);

    let realEstateListedOptions = {
        // Moralis understands a local chain is 1337
        chainId: moralisChainId,
        address: contractAddr,
        sync_historical: true,
        topic: "RealEstateListed(address,uint256,bytes3,address,uint256,uint256,uint256,uint8)",
        abi: {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "seller",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "bytes3",
                    name: "propertyCountry",
                    type: "bytes3",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "currency",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "initialTime",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "initialPrice",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "coolingOffPeriod",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "enum TruhuisMarketplace.Stage",
                    name: "stage",
                    type: "uint8",
                },
            ],
            name: "RealEstateListed",
            type: "event",
        },
        tableName: "RealEstateListed",
    };

    let realEstateBoughtOptions = {
        chainId: moralisChainId,
        address: contractAddr,
        sync_historical: true,
        topic: "RealEstateBought(address,address,uint256,uint256,uint256,uint8)",
        sync_historical: true,
        abi: {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "buyer",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "seller",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "purchaseTime",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "purchasePrice",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "enum TruhuisMarketplace.Stage",
                    name: "stage",
                    type: "uint8",
                },
            ],
            name: "RealEstateBought",
            type: "event",
        },
        tableName: "RealEstateBought",
    };

    let listingCanceledOptions = {
        chainId: moralisChainId,
        address: contractAddr,
        topic: "ListingCanceled(address,uint256)",
        sync_historical: true,
        abi: {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "seller",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "ListingCanceled",
            type: "event",
        },
        tableName: "ListingCanceled",
    };

    const listedResponse = await Moralis.Cloud.run("watchContractEvent", realEstateListedOptions, {
        useMasterKey: true,
    });
    const boughtResponse = await Moralis.Cloud.run("watchContractEvent", realEstateBoughtOptions, {
        useMasterKey: true,
    });
    const canceledResponse = await Moralis.Cloud.run("watchContractEvent", listingCanceledOptions, {
        useMasterKey: true,
    });

    if (listedResponse.success && boughtResponse.success && canceledResponse.success) {
        console.log("Success! Database updated with watching events");
    } else {
        console.log("Something went wrong...");
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
