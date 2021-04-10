import React, { useContext, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@material-ui/core';
import { StoreContext } from 'Containers/StoreProvider';
import { blockDetailsRequest } from 'Queries/block';
import { loadingAction, closePopupAction } from 'Reducers/actionLoader';
import { useQuery } from 'react-query'
import BlockTransactionsGrid from 'Components/grids/BlockTransactionsGrid';
import texts from 'Texts';

const BlockDetailsPopup = ({ block }) => {
    const { dispatch } = useContext(StoreContext);
    const { isLoading, isSuccess, data, refetch } = useQuery('blockDetails', blockDetailsRequest.bind(this, block), {
        enabled: false,
    })
    
    useEffect(() => {
        if (block) {
            refetch();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [block])

    useEffect(() => {
        dispatch(loadingAction(isLoading))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    const onClose = () => {
        dispatch(closePopupAction('blockDetails'))
    }

    return (
        <Dialog 
            maxWidth='lg'
            fullWidth
            open={!!block} 
            onClose={onClose}>
            <DialogTitle>{texts.blockDetails}</DialogTitle>
            {isSuccess && (
                <DialogContent>
                    <form className='dataPanel'>
                        <div className='dataPanelRow'>
                            <TextField 
                                className='dataPanelInput'
                                value={data.hash}
                                label={texts.hash}
                                disabled
                                multiline />

                            <TextField 
                                className='dataPanelInput'
                                value={data.prev_block}
                                label={texts.prev}
                                disabled
                                multiline />
                        </div>

                        <div className='dataPanelRow'>
                            <TextField 
                                className='dataPanelInput'
                                value={data.time}
                                label={texts.time}
                                disabled />

                            <TextField 
                                className='dataPanelInput'
                                value={data.height}
                                label={texts.height}
                                disabled />
                        </div>

                        <div className='dataPanelRow'>
                            <TextField 
                                className='dataPanelInput'
                                value={data.block_index}
                                label={texts.index}
                                disabled />

                            <TextField 
                                className='dataPanelInput'
                                value={data.size}
                                label={texts.size}
                                disabled />
                        </div>
                    </form>
                    <BlockTransactionsGrid transactions={data.tx} />
                </DialogContent>
            )}
            <DialogActions>
                <Button onClick={onClose} color='primary'>
                    {texts.close}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default BlockDetailsPopup;
