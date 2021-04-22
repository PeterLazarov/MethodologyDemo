import React from 'react';
import { openPopupAction } from 'src/reducers/actionLoader';
import { useSelector, useDispatch } from 'react-redux';
import { dialogStateSelector } from 'src/components/containers/StoreProvider';
import { blocksRequest } from 'src/queries/block';
import { useQuery } from 'react-query'
import BasicLayout from 'src/components/layouts/BasicLayout';
import BlocksGrid from 'src/components/grids/BlocksGrid';
import BlockDetailsPopup from 'src/components/popups/BlockDetailsPopup';
import texts from 'src/texts.json';

const BlocksPage: React.FC = () => {
    const dispatch = useDispatch();
    const dialogState = useSelector(dialogStateSelector);

    const blocksResult = useQuery('blocks', blocksRequest)

    return (
        <BasicLayout title={texts.blocks}>
            <label className='label title'>
                {texts.blocks}
            </label>

            { blocksResult.status === 'success' ? (
                <BlocksGrid 
                    blocks={blocksResult.data}           
                    showDetails={(block) => {
                        dispatch(openPopupAction('blockDetails', block));
                    }} />
            ): <></> }
            <BlockDetailsPopup block={dialogState.globalPopupData['blockDetails']}/>
        </BasicLayout>  
    )
}

export default BlocksPage;