import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { AntdDataTable } from "src/styles/styledComponents";
import { Block, BlockOut, BlockInput } from 'src/models';
import texts from 'src/texts.json';

type Props = {
    transactions: Block[]
};
const BlockTransactionsGrid: React.FC<Props> = ({ transactions }) => {
    const getSubTableOutData = (block: Block) => {
        return _.map(block.out, (out: BlockOut) => _.pick(out, ['addr', 'value']));
    }

    const getSubTableInputsData = (block: Block) => {
        return _.map(block.inputs, (input: BlockInput) => _.pick(input, ['sequence', 'witness']));
    }

    return (         
        <AntdDataTable
            columns={[
                {
                    dataIndex: 'relayed_by', 
                    title: texts.relayedBy, 
                },
                {
                    dataIndex: 'time',
                    title: texts.time, 
                    render: (value: string) => moment(0).seconds(parseInt(value)).format('LLLL')
                },
                {
                    dataIndex: 'fee',
                    title: texts.fee, 
                },
            ]}
            expandedRowRender={(block: Block) => (
                <div> 
                    <AntdDataTable columns={[
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

                    <AntdDataTable columns={[
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