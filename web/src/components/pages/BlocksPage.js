import React from 'react';
import { openPopupAction } from 'Reducers/actionLoader';
import { useSelector, useDispatch } from 'react-redux';
import { dialogStateSelector } from 'Containers/StoreProvider';
import { blocksRequest } from 'Queries/block';
import { useQuery } from 'react-query'
import BasicLayout from 'Layouts/BasicLayout';
import BlocksGrid from 'Components/grids/BlocksGrid';
import BlockDetailsPopup from 'Components/popups/BlockDetailsPopup';
import texts from 'Texts';

const BlocksPage = () => {
    const dispatch = useDispatch();
    const dialogState = useSelector(dialogStateSelector);

    const blocksResult = useQuery('blocks', blocksRequest)

    return (
        <BasicLayout title={texts.blocks}>
            <label className='label title'>
                {texts.blocks}
            </label>

            {blocksResult.status === 'success' && (
                <BlocksGrid 
                    blocks={blocksResult.data}           
                    showDetails={(block) => {
                        dispatch(openPopupAction('blockDetails', block));
                    }} />
            )}
            <BlockDetailsPopup block={dialogState.globalPopupData['blockDetails']}/>
        </BasicLayout>  
    )
}

export default BlocksPage;