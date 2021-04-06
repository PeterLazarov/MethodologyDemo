import React, { useContext, useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@material-ui/core';
import _ from 'lodash';
import http from 'Services/http';
import { StoreContext } from 'Contexts/StoreProvider';
import apiRoutes from 'Config/apiRoutes';
import BlockTransactionsGrid from 'Components/grids/BlockTransactionsGrid';
import texts from 'Texts';

const BlockDetailsPopup = ({ block }) => {
    const { dispatch } = useContext(StoreContext);
    const [blockDetails, setBlockDetails] = useState({})
    
    useEffect(() => {
        loadDetails(block);

        window.onbeforeunload = onClose;
        window.onpopstate = onClose;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadDetails = async (block) => {
        dispatch({ type: 'DATA_LOADING' });

        const result = await http.request(`${apiRoutes.BLOCKS}/${block.hash}`);
        
        setBlockDetails(result.data);

        dispatch({ type: 'DATA_LOADED' });
    }

    const onClose = () => {
        dispatch({ type: 'HIDE_DATA_DIALOG' })
    }

    return (
        <Dialog 
            maxWidth='lg'
            fullWidth
            open={!_.isEmpty(blockDetails)} 
            onClose={onClose}>
            <DialogTitle>{texts.blockDetails}</DialogTitle>
            <DialogContent>
                <form className='dataPanel'>
                    <div className='dataPanelRow'>
                        <TextField 
                            className='dataPanelInput'
                            value={blockDetails.hash}
                            label={texts.hash}
                            disabled
                            multiline />

                        <TextField 
                            className='dataPanelInput'
                            value={blockDetails.prev_block}
                            label={texts.prev}
                            disabled
                            multiline />
                    </div>

                    <div className='dataPanelRow'>
                        <TextField 
                            className='dataPanelInput'
                            value={blockDetails.time}
                            label={texts.time}
                            disabled />

                        <TextField 
                            className='dataPanelInput'
                            value={blockDetails.height}
                            label={texts.height}
                            disabled />
                    </div>

                    <div className='dataPanelRow'>
                        <TextField 
                            className='dataPanelInput'
                            value={blockDetails.block_index}
                            label={texts.index}
                            disabled />

                        <TextField 
                            className='dataPanelInput'
                            value={blockDetails.size}
                            label={texts.size}
                            disabled />
                    </div>
                </form>
                <BlockTransactionsGrid transactions={blockDetails.tx} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color='primary'>
                    {texts.close}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default BlockDetailsPopup;
