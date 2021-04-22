import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import ErrorPage from 'src/components/pages/ErrorPage';

type Props = {
    children: object[]
};
const ErrorBoundary: React.FC<Props> = ({ children }) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorPage}>
            { children }
        </ReactErrorBoundary>
    )
}

export default ErrorBoundary;