import dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    blockchainApiAddress: process.env.REACT_APP_BLOCKCHAIN_API_ADDRESS,
    isDevelopment: process.env.NODE_ENV === 'development'
}