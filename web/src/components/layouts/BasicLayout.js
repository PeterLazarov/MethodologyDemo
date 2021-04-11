import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dataStateSelector } from 'Containers/StoreProvider';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const BasicLayout = ({ title, children }) => {
    const dataState = useSelector(dataStateSelector);
    
    useEffect(() => { 
        document.title = title;  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (   
        <div className='basic-layout'>
            <Backdrop className='backdrop' open={dataState && dataState.dataLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>

            { children }
        </div>        
    );
}

export default BasicLayout;