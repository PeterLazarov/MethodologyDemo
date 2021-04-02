import apiRoutes from '../config/apiRoutes';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async request(url, options) {
        const verb = (options && options.verb) ? options.verb : 'GET';
        const body = (options && options.body) ? options.body : null;

        let response = {};
        let json = {};
        try {
            response = await fetch(`${apiRoutes.ADDRESS}${url}`, {
                method: verb,
                protocol: 'http',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body ? JSON.stringify(body) : null
            });
            json = await response.json();
        } catch (error) {
            console.log(error);
        }

        return {
            status: response.status,
            data: json
        };
    }
}