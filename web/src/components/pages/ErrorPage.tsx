import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import envConfig from 'src/config/envConfig';
import BasicLayout from 'src/components/layouts/BasicLayout';
import texts from 'src/texts.json';

const ErrorPage: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <BasicLayout title={texts.error}>
            <p>{texts.somethingWentWrong}</p>
            <pre>{error.message}</pre>
            { envConfig.isDevelopment ? <pre>{error.stack}</pre> : <></> }
            <button onClick={resetErrorBoundary}>{texts.tryAgain}</button>
        </BasicLayout>
    );
}

export default ErrorPage;