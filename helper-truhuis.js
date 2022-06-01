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

const getContractAddr = (_contractName) => {
    const chainId = "dev";
    return CONTRACT_ADDRESSES[chainId][_contractName][0];
};

export { getContractAbi, getContractAddr };
