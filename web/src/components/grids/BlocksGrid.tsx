import React from 'react';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Table } from "antd";
import texts from 'src/texts.json';

type Props = {
    blocks: Array<object>,
    showDetails: (block: object) => void,
}

const BlocksGrid = ({ blocks, showDetails }: Props) => {
    return (           
        <Table
            className='dataGrid'
            columns={[
                {
                    dataIndex: 'height', 
                    title: texts.height, 
                },
                {
                    dataIndex: 'time',
                    title: texts.time, 
                    render: value => moment(0).seconds(value).format('LLLL')
                },
                {
                    dataIndex: 'hash', 
                    title: texts.hash, 
                },
                {
                    title: ' ',
                    key: 'commands',
                    render: (text, block) => (
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