import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dataStateSelector } from 'src/components/containers/StoreProvider';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

type Props = {
    title: string,
    children: object[]
};
const BasicLayout: React.FC<Props> = ({ title, children }) => {
    const dataState = useSelector(dataStateSelector);
    

    useEffect(() => { 
        console.log(dataState.dataLoading)
    }, [dataState.dataLoading])

    useEffect(() => { 
        document.title = title;  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (   
        <div className='basic-layout'>
            <Backdrop className='backdrop' open={dataState.dataLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>

            { children }
        </div>        
    );
}

export default BasicLayout;