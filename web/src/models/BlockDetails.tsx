import Block from './Block';

interface BlockDetails {
    hash: string,
    prev_block: string,
    time: string,
    height: string,
    block_index: string,
    size: string,
    tx: Block[],
}

export default BlockDetails