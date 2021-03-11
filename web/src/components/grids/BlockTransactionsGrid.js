import React, { Component } from 'react';
import _ from 'lodash';
import { DataGrid } from '@material-ui/data-grid';
import { Popup, Button, Card, Label } from 'semantic-ui-react';
import DataGridPagination from 'Components/extentions/DataGridPagination';
import texts from 'Texts';

export default class BlocksGrid extends Component {
    state = {
        pageSize: 5
    }

    render() {
        const { props, state } = this;
        
        return (          
            <DataGrid 
                className='dataGrid'
                getRowId={item => item.hash}
                columns={[
                    {
                        field: 'relayed_by', 
                        headerName: texts.relayedBy, 
                        flex: 1,
                    },
                    {
                        field: 'time',
                        headerName: texts.time, 
                        flex: 1, 
                    },
                    {
                        field: 'fee',
                        headerName: texts.fee, 
                        flex: 1, 
                    },
                    {
                        field: 'inputs', 
                        headerName: texts.inputs, 
                        width: 70,
                        renderCell: (params) => (
                            <Popup
                                content={
                                    <div className='flexColumn'>
                                        {params.row.inputs.map(item => 
                                            <Card>
                                                <Card.Content>
                                                    <Label content='Seq.:'/>
                                                    <Label content={item.sequence}/>
                                                </Card.Content> 
                                                <Card.Content>
                                                    <Label content='Witness:'/>
                                                    <Label content={item.witness}/>
                                                </Card.Content> 
                                                <Card.Content>
                                                    <Label content='Script:'/>
                                                    <Label content={item.script}/>
                                                </Card.Content> 
                                            </Card>
                                        )}
                                    </div>
                                }
                                on='click'
                                hideOnScroll
                                pinned
                                trigger={<Button icon='eye' />} 
                            />
                        )
                    },
                    {
                        field: 'out', 
                        headerName: texts.out, 
                        width: 70,
                        renderCell: (params) => (
                            <Popup
                                content={
                                    <div className='flexColumn'>
                                        {params.row.out.map(item => 
                                            <Card>
                                                <Card.Content>
                                                    <Label content='Addr:'/>
                                                    <Label content={!_.isEmpty(item.addr) ? item.addr : texts.unknown}/>
                                                </Card.Content> 
                                                <Card.Content>
                                                    <Label content='Value:'/>
                                                    <Label content={item.value}/>
                                                </Card.Content> 
                                            </Card>
                                        )}
                                    </div>
                                }
                                on='click'
                                pinned
                                flowing
                                trigger={<Button icon='eye' />} 
                            />
                        )
                    },
                ]}
                rows={props.transactions}                         
                pageSize={state.pageSize} 
                rowCount={props.transactions.length}                          
                components={{
                    Pagination: DataGridPagination
                }}
                autoHeight
                disableColumnMenu
                disableColumnReorder 
                disableClickEventBubbling={true} />
        );
    }
    outValueGetter(params) {
        console.log(params.row.out);
        return _.join(_.compact(_.map(params.row.out, 'addr')), ' ');
    }
}