import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
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
                        ]} dataSource={this.getSubTableOutData(block)} pagination={false} />

                        <Table columns={[
                            {
                                dataIndex: 'sequence',
                                title: texts.sequence, 
                            },
                            {
                                dataIndex: 'witness',
                                title: texts.witness, 
                            },
                        ]} dataSource={this.getSubTableInputsData(block)} pagination={false} />
                    </div>
                )}
                dataSource={props.transactions}
                pagination={{
                    defaultPageSize: 3
                }}
            /> 
        );
    }

    getSubTableOutData(block) {
        return _.map(block.out, out => _.pick(out, ['addr', 'value']));
    }

    getSubTableInputsData(block) {
        return _.map(block.inputs, input => _.pick(input, ['sequence', 'witness']));
    }
}