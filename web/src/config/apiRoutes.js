import envConfig from "./envConfig";

const apiAddress = envConfig.apiAddress;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ADDRESS: apiAddress,
    BLOCKS: `${apiAddress}/blocks`,
}
