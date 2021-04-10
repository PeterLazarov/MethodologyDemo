import React from 'react';
import envConfig from 'Config/envConfig';
import BasicLayout from 'Layouts/BasicLayout';
import texts from 'Texts';

const ErrorPage = ({ error, resetErrorBoundary }) => {
    return (
        <BasicLayout title={texts.error}>
            <p>{texts.somethingWentWrong}</p>
            <pre>{error.message}</pre>
            {envConfig.isDevelopment && <pre>{error.stack}</pre> }
            <button onClick={resetErrorBoundary}>{texts.tryAgain}</button>
        </BasicLayout>
    );
}

export default ErrorPage;