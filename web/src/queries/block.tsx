import apiRoutes from 'src/config/apiRoutes';
import { Block } from 'src/models';

export const blocksRequest = async () => {
    const res = await fetch(apiRoutes.BLOCKS);
    return res.json();
};

export const blockDetailsRequest = async (block: Block) => {
    const res = await fetch(`${apiRoutes.BLOCKS}/${block.hash}`);
    return res.json();
};