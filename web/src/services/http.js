import logger from './logger';
import apiRoutes from '../config/apiRoutes';
import envConfig from '../config/envConfig';

export default {
    async request(url, options) {
        const verb = (options && options.verb) ? options.verb : 'GET';
        const body = (options && options.body) ? options.body : null;

        if (envConfig.environment === 'development') {
            logger.log(`fetching ${apiRoutes.ADDRESS}${url} via ${verb}`);
            if (body) {
                logger.logObject(body);
            }
        }

        let response = {};
        try {
            response = await fetch(`${apiRoutes.ADDRESS}${url}`, {
                method: verb,
                protocol: 'http',
                headers: {
                    // 'Access-Control-Allow-Origin': envConfig.domain,
                    'Content-Type': 'application/json',
                },
                body: body ? JSON.stringify(body) : null
            });
            if (envConfig.environment === 'development') {
                logger.log('Raw responce');
                logger.logObject(response);
            }
        } catch (error) {
            logger.log(error);
        }

        let json = {};
        try {
            json = await response.json();
            if (envConfig.useHttpLogging) {
                logger.log('Parsed responce');
                logger.logObject(json);
            }
        } catch (error) {
            logger.log(error);
        }

        return {
            status: response.status,
            data: json
        };
    }
}