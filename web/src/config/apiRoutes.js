import envConfig from "./envConfig";

const blockchainApiAddress = envConfig.blockchainApiAddress;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    BLOCKCHAIN_ADDRESS: blockchainApiAddress,
    BLOCKS: `${blockchainApiAddress}/blocks`,
}
