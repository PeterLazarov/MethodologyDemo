import envConfig from "../config/envConfig";

export default {
    log(text) {
        if (envConfig.environment === 'dev' && console.info) {
            console.info(text);
        }
    },
    logObject(obj) {
        if (envConfig.environment === 'dev' && console.dir) {
            console.dir(obj);
        }
    }
}