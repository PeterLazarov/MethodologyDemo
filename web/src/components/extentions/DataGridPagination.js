import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default class DataGridPagination extends Component {
    render() {
        const { state, api } = this.props;

        return (
          <Pagination
            color='primary'
            variant="outlined"
            shape="rounded"
            page={state.pagination.page}
            count={state.pagination.pageCount}
            onChange={(event, value) => api.current.setPage(value)}
          />
        );
    }
}
