import apiRoutes from 'Config/apiRoutes';

export const blocksRequest = async () => {
    const res = await fetch(apiRoutes.BLOCKS);
    return res.json();
};

export const blockDetailsRequest = async (block) => {
    const res = await fetch(`${apiRoutes.BLOCKS}/${block.hash}`);
    return res.json();
};