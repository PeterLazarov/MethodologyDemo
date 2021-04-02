import React, { Component } from 'react';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Table } from "antd";
import texts from 'Texts';

export default class BlocksGrid extends Component {
    render() {
        const { props } = this;
        
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
                        render: (text, block) => 
                            <IconButton
                                variant="contained"
                                onClick={() => props.showDetails(block)}>
                                <SearchIcon/>  
                            </IconButton>
                    }
                ]}
                dataSource={props.blocks}
                rowKey="hash" 
            />      
        );
    }
}