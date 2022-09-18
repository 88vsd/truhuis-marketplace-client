import TRUHUIS_MARKETPLACE from "./constants/contracts/TruhuisMarketplace.json";
import TRUHUIS_CADASTRE from "./constants/contracts/TruhuisCadastre.json";
import MOCK_ERC20_EURT from "./constants/contracts/MockERC20EURT.json";
import MOCK_ERC20_USDT from "./constants/contracts/MockERC20USDT.json";
import CONTRACT_ADDRESSES from "./constants/deployments/map.json";

const ABI = {
    TruhuisCadastre: TRUHUIS_CADASTRE.abi,
    TruhuisMarketplace: TRUHUIS_MARKETPLACE.abi,
    MockERC20USDT: MOCK_ERC20_USDT.abi,
    MockERC20EURT: MOCK_ERC20_EURT.abi,
};

const getContractAbi = (_contractName) => {
    return ABI[_contractName];
};

const getCadastreMapURL = (_tokenId, _cadastreMapURI) => {
    return _cadastreMapURI.replace("ipfs://", "https://ipfs.io/ipfs/") + `/${_tokenId}.png`;
};

// TODO: set up backend storage for real estate images.
const getImagesURLs = (_tokenId) => {
    const url = { 4: "/4.jpg", 5: "/5.jpg", 6: "/6.jpg" };
    return url[_tokenId];
};

//const getCurrencyAddr = (_country) => {
//    const currency = {
//        nld: CONTRACT_ADDRESSES[chainId]["MockERC20EURT"][0],
//        usd: CONTRACT_ADDRESSES[chainId]["MockERC20USDT"][0],
//    };
//
//    return currency[_country];
//};

const getContractAddr = (_contractName) => {
    const chainId = "dev";
    return CONTRACT_ADDRESSES[chainId][_contractName][0];
};

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

export { getContractAbi, getContractAddr, getCadastreMapURL, getImagesURLs };
