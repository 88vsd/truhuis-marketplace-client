-include .env

moralis-sync:; moralis-admin-cli connect-local-devchain --chain hardhat --moralisSubdomain ${moralisSubdomain} --frpcPath ./frp/frpc
moralis-cloud:; moralis-admin-cli watch-cloud-folder --moralisSubdomain ${moralisSubdomain} --autoSave 1 --moralisCloudfolder ./cloudFunctions
moralis-events:; node addEvents.js

