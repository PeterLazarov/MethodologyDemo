import React, { useContext, useEffect, useState } from 'react';
import { openPopupAction } from 'Redux/actionLoader';
import { StoreProvider } from 'Contexts/StoreProvider';
import BasicLayout from 'Components/layouts/BasicLayout';
// import BasicLayout from 'Layouts/BasicLayout';
import BlocksGrid from 'Components/grids/BlocksGrid';
import BlockDetailsPopup from 'Components/popups/BlockDetailsPopup';
import http from 'Services/http';
import apiRoutes from 'Config/apiRoutes';
import texts from 'Texts';

const BlocksPage = () => {
    const dispatch = useContext(StoreProvider);

    const [showLoading, setShowLoading] = useState(false);
    const [blocks, setBlocks] = useState([]);

    const loadData = async () => {
        setShowLoading(true)

        const result = await http.request(`${apiRoutes.BLOCKS}`);

        setBlocks(result.data); 
        setShowLoading(false);
    }

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <BasicLayout title={texts.blocks} loading={showLoading}>
            <label className='label title'>
                {texts.blocks}
            </label>

            <BlocksGrid 
                blocks={blocks}           
                showDetails={(block) => {
                    dispatch(openPopupAction(<BlockDetailsPopup block={block}/>))
                }} />
        </BasicLayout>  
    )
}

export default BlocksPage;