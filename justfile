# Load .env file.
set dotenv-load := true
# Pass justfile recipe args as positional arguments to commands.
set positional-arguments := true

default:
    @just --list

moralis-sync:
    moralis-admin-cli connect-local-devchain \
    --chain hardhat \
    --moralisSubdomain $moralisSubdomain \
    --frpcPath ./frp/frpc

moralis-cloud:
    moralis-admin-cli watch-cloud-folder \
    --moralisSubdomain $moralisSubdomain \
    --autoSave 1 \
    --moralisCloudfolder ./src/moralis/cloudFunctions

moralis-events:
    node ./src/moralis/addEvents.js

