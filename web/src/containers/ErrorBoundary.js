import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import ErrorPage from 'Pages/ErrorPage';

const ErrorBoundary = ({ children }) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorPage}>
            { children }
        </ReactErrorBoundary>
    )
}

export default ErrorBoundary;