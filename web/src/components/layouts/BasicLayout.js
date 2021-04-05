import React, { useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const BasicLayout = ({ title, loading, children }) => {
    useEffect(() => { 
        document.title = title;  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (   
        <div className='blocksPage'>
            <Backdrop className='backdrop' open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>

            { children }
        </div>        
    );
}

export default BasicLayout;