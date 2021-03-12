import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { DataGrid } from '@material-ui/data-grid';
import DataGridPagination from 'Components/extentions/DataGridPagination';
import texts from 'Texts';

export default class BlocksGrid extends Component {
    render() {
        const { props } = this;
        
        return (          
            <DataGrid 
                className='dataGrid'
                getRowId={item => item.hash}
                columns={[
                    {
                        field: 'height', 
                        headerName: texts.height, 
                        flex: 1,
                    },
                    {
                        field: 'time',
                        headerName: texts.time, 
                        flex: 1, 
                    },
                    {
                        field: 'hash', 
                        headerName: texts.hash, 
                        flex: 4,
                    },
                    {
                        field: 'commands',
                        headerName: ' ',
                        width: 70, 
                        cellClassName: 'commandCell',
                        renderCell: params => 
                        <IconButton
                            variant="contained"
                            onClick={() => props.showDetails(params.row)}>
                            <SearchIcon/>  
                        </IconButton>
                    }
                ]}
                rows={props.blocks}                         
                pageSize={props.pageSize} 
                rowCount={props.blocks.length}                          
                components={{
                    Pagination: DataGridPagination
                }}
                autoHeight
                disableColumnMenu
                disableColumnReorder 
                disableClickEventBubbling={true} />
        );
    }
}