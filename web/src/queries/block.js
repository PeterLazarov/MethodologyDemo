import apiRoutes from 'Config/apiRoutes';

export const blocksRequest = async () => {
    const res = await fetch(apiRoutes.BLOCKS);
    return res.json();
};