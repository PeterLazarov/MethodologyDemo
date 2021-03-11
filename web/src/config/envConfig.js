import dotenv from "dotenv";

dotenv.config();

console.log(process.env)
export default {
    domain: process.env.REACT_APP_DOMAIN,
    apiAddress: process.env.REACT_APP_API_ADDRESS,
    environment: process.env.REACT_APP_ENVIRONMENT,
}