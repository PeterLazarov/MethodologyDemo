import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@material-ui/core';
import _ from 'lodash';
import http from 'Services/http';
import apiRoutes from 'Config/apiRoutes';
import BlockTransactionsGrid from 'Components/grids/BlockTransactionsGrid';
import texts from 'Texts';

class BlockDetailsPopup extends Component {
    state = {
        blockDetails: {}
    }

    componentDidMount() {
        this.loadDetails(this.props.block);

        window.onbeforeunload = this.onClose;
        window.onpopstate = this.onClose;
    }
    
    render() {
        const { blockDetails } = this.state;

        return (
            <Dialog 
                maxWidth='lg'
                fullWidth
                open={!_.isEmpty(blockDetails)} 
                onClose={this.onClose}>
                <DialogTitle>{texts.blockDetails}</DialogTitle>
                <DialogContent>
                    <form className='dataPanel'>
                        <div className='dataPanelRow'>
                            <TextField 
                                className='dataPanelInput'
                                value={blockDetails.hash}
                                label={texts.hash}
                                disabled
                                multiline />

                            <TextField 
                                className='dataPanelInput'
                                value={blockDetails.prev_block}
                                label={texts.prev}
                                disabled
                                multiline />
                        </div>

                        <div className='dataPanelRow'>
                            <TextField 
                                className='dataPanelInput'
                                value={blockDetails.time}
                                label={texts.time}
                                disabled />

                            <TextField 
                                className='dataPanelInput'
                                value={blockDetails.height}
                                label={texts.height}
                                disabled />
                        </div>

                        <div className='dataPanelRow'>
                            <TextField 
                                className='dataPanelInput'
                                value={blockDetails.block_index}
                                label={texts.index}
                                disabled />

                            <TextField 
                                className='dataPanelInput'
                                value={blockDetails.size}
                                label={texts.size}
                                disabled />
                        </div>
                    </form>
                    <BlockTransactionsGrid transactions={blockDetails.tx} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onClose} color='primary'>
                        {texts.close}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
    
    loadDetails = async (block) => {
        this.props.dispatch({ type: 'DATA_LOADING' });

        const result = await http.request(`${apiRoutes.BLOCKS}/${block.hash}`);
        
        this.setState({ blockDetails: result.data }) 

        this.props.dispatch({ type: 'DATA_LOADED' });
    }

    onClose = () => {
        this.props.dispatch({ type: 'HIDE_DATA_DIALOG' })
    }
}

function mapStateToProps({ dataState }) {
    return { 
        dataLoading: dataState.dataLoading
    };
}

export default (connect(mapStateToProps)(BlockDetailsPopup));
