import React from 'react';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { AntdDataTable } from "src/styles/styledComponents";
import { Block } from "src/models";
import texts from 'src/texts.json';

type Props = {
    blocks: Block[],
    showDetails: (block: Block) => void,
}

const BlocksGrid = ({ blocks, showDetails }: Props) => {
    return (           
        <AntdDataTable
            className='dataGrid'
            columns={[
                {
                    dataIndex: 'height', 
                    title: texts.height, 
                },
                {
                    dataIndex: 'time',
                    title: texts.time, 
                    render: (value: string) => moment(0).seconds(parseInt(value)).format('LLLL')
                },
                {
                    dataIndex: 'hash', 
                    title: texts.hash, 
                },
                {
                    title: ' ',
                    key: 'commands',
                    render: (text: string, block: Block) => (
                        <IconButton
                            onClick={() => {showDetails(block)}} >
                            <SearchIcon/>  
                        </IconButton>
                    )
                }
            ]}
            dataSource={blocks}
            rowKey="hash" 
        />      
    );
}

export default BlocksGrid;