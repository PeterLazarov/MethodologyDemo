import dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    apiAddress: process.env.REACT_APP_API_ADDRESS
}