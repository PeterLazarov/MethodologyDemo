import React, { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { blockDetailsRequest } from 'src/queries/block';
import { loadingAction, closePopupAction } from 'src/reducers/actionLoader';
import { useQuery } from 'react-query';
import _ from 'lodash';
import BlockTransactionsGrid from 'src/components/grids/BlockTransactionsGrid';
import { Block, BlockDetails } from 'src/models';
import { StyledForm, StyledFormRow } from 'src/styles/styledComponents';
import texts from 'src/texts.json';

type Props = {
    block: Block
};
const BlockDetailsPopup: React.FC<Props> = ({ block }) => {
    const dispatch = useDispatch();
    const detailsResult = useQuery<BlockDetails>('blockDetails', blockDetailsRequest.bind(this, block), {
        enabled: false,
    })
    
    useEffect(() => {
        if (!_.isEmpty(block)) {
            detailsResult.refetch();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [block])

    useEffect(() => {
        console.log(block.hash ,detailsResult)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailsResult])
    
    useEffect(() => {
        dispatch(loadingAction(detailsResult.isLoading))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailsResult.isLoading])

    const onClose = () => {
        dispatch(closePopupAction('blockDetails'))
    }

    return (
        <Dialog 
            maxWidth='lg'
            fullWidth
            open={!_.isEmpty(block)} 
            onClose={onClose}>
            <DialogTitle>{texts.blockDetails}</DialogTitle>
            {detailsResult.isSuccess && (
                <DialogContent>
                    <StyledForm>
                        <StyledFormRow>
                            <TextField 
                                className='dataPanelInput'
                                value={detailsResult.data.hash}
                                label={texts.hash}
                                disabled
                                multiline />

                            <TextField 
                                className='dataPanelInput'
                                value={detailsResult.data.prev_block}
                                label={texts.prev}
                                disabled
                                multiline />
                        </StyledFormRow>

                        <StyledFormRow>
                            <TextField 
                                className='dataPanelInput'
                                value={detailsResult.data.time}
                                label={texts.time}
                                disabled />

                            <TextField 
                                className='dataPanelInput'
                                value={detailsResult.data.height}
                                label={texts.height}
                                disabled />
                        </StyledFormRow>

                        <StyledFormRow>
                            <TextField 
                                className='dataPanelInput'
                                value={detailsResult.data.block_index}
                                label={texts.index}
                                disabled />

                            <TextField 
                                className='dataPanelInput'
                                value={detailsResult.data.size}
                                label={texts.size}
                                disabled />
                        </StyledFormRow>
                    </StyledForm>
                    <BlockTransactionsGrid transactions={detailsResult.data.tx} />
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
