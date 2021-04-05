import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Table } from "antd";
import texts from 'Texts';

const BlockTransactionsGrid = ({ transactions }) => {
    const getSubTableOutData = (block) => {
        return _.map(block.out, out => _.pick(out, ['addr', 'value']));
    }

    const getSubTableInputsData = (block) => {
        return _.map(block.inputs, input => _.pick(input, ['sequence', 'witness']));
    }

    return (         
        <Table
            className='dataGrid'
            columns={[
                {
                    dataIndex: 'relayed_by', 
                    title: texts.relayedBy, 
                },
                {
                    dataIndex: 'time',
                    title: texts.time, 
                    render: value => moment(0).seconds(value).format('LLLL')
                },
                {
                    dataIndex: 'fee',
                    title: texts.fee, 
                },
            ]}
            expandedRowRender={block => (
                <div> 
                    <Table columns={[
                        {
                            dataIndex: 'addr',
                            title: texts.address, 
                        },
                        {
                            dataIndex: 'value',
                            title: texts.value, 
                        },
                    ]} 
                    dataSource={getSubTableOutData(block)} pagination={false} 
                    rowKey="script" />

                    <Table columns={[
                        {
                            dataIndex: 'sequence',
                            title: texts.sequence, 
                        },
                        {
                            dataIndex: 'witness',
                            title: texts.witness, 
                        },
                    ]} 
                    dataSource={getSubTableInputsData(block)} pagination={false} 
                    rowKey="sequence" />
                </div>
            )}
            dataSource={transactions}
            rowKey="hash" 
            pagination={{
                defaultPageSize: 3
            }}
        /> 
    );
}

export default BlockTransactionsGrid;