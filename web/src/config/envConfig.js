import dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    blockchainApiAddress: process.env.REACT_APP_BLOCKCHAIN_API_ADDRESS,
    rollbarToken: process.env.REACT_APP_ROLLBAR_TOKEN,
    rollbarEnvironment: process.env.REACT_APP_ROLLBAR_ENVIRONMENT,
    isDevelopment: process.env.NODE_ENV === 'development'
}