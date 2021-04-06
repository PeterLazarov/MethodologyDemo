import React, { useContext, useEffect } from 'react';
import { StoreContext } from 'Contexts/StoreProvider';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const BasicLayout = ({ title, children }) => {
    const { dataState } = useContext(StoreContext);
    
    useEffect(() => { 
        document.title = title;  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (   
        <div className='blocksPage'>
            <Backdrop className='backdrop' open={dataState && dataState.dataLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>

            { children }
        </div>        
    );
}

export default BasicLayout;