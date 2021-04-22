import BlockOut from './BlockOut';
import BlockInput from './BlockInput';

interface Block {
    out: BlockOut[],
    inputs: BlockInput[],
    hash: string
}

export default Block;