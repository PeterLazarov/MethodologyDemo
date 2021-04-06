import React, { useContext } from 'react';
import { openPopupAction } from 'Reducers/actionLoader';
import { StoreContext } from 'Contexts/StoreProvider';
import { blocksRequest } from 'Queries/block';
import { useQuery } from 'react-query'
import BasicLayout from 'Layouts/BasicLayout';
import BlocksGrid from 'Components/grids/BlocksGrid';
import BlockDetailsPopup from 'Components/popups/BlockDetailsPopup';
import texts from 'Texts';

const BlocksPage = () => {
    const { dispatch } = useContext(StoreContext);

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
                        dispatch(openPopupAction(<BlockDetailsPopup block={block}/>))
                    }} />
            )}
        </BasicLayout>  
    )
}

export default BlocksPage;