import Rollbar from 'rollbar';
import rollbarMiddleware from 'rollbar-redux-middleware';
import envConfig from 'Config/envConfig';

const rollbar = new Rollbar({
    accessToken: envConfig.rollbarToken,
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: envConfig.rollbarEnvironment
})

export const rollbarRedux = rollbarMiddleware(rollbar); 

export default rollbar;