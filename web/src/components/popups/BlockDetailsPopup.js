import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Label, Input, TextArea } from 'semantic-ui-react';
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

        window.onbeforeunload = this.onClose.bind(this);
        window.onpopstate = this.onClose.bind(this);
    }
    
    render() {
        const { blockDetails } = this.state;

        return (
            <Modal 
                closeIcon 
                size='large' 
                open={!_.isEmpty(blockDetails)} 
                onClose={this.onClose.bind(this)}>
                <Modal.Header>{texts.blockDetails}</Modal.Header>
                <Modal.Content as={Form} className='dataPanel'>
                    <div className='dataPanelRow'>
                        <Label 
                            className='dataPanelLabel'
                            content={texts.hash}/>
                        <TextArea
                            className='dataPanelTextarea unresizable disabledTextarea'
                            size='large'
                            rows={2}
                            value={blockDetails.hash} 
                            disabled />


                        <Label 
                            className='dataPanelLabel'
                            content={texts.prev}/>
                        <TextArea
                            className='dataPanelTextarea unresizable disabledTextarea'
                            size='large'
                            rows={2}
                            value={blockDetails.prev_block} 
                            disabled />
                    </div>

                    <div className='dataPanelRow'>
                        <Label 
                            className='dataPanelLabel'
                            content={texts.time}/>
                        <Input
                            className='dataPanelInput'
                            size='large'
                            value={blockDetails.time} 
                            disabled />

                        <Label 
                            className='dataPanelLabel'
                            content={texts.height}/>
                        <Input
                            className='dataPanelInput'
                            size='large'
                            value={blockDetails.height}
                            disabled />
                    </div>

                    <div className='dataPanelRow'>
                        <Label 
                            className='dataPanelLabel'
                            content={texts.index}
                            disabled />
                        <Input
                            className='dataPanelInput'
                            size='large'
                            value={blockDetails.block_index} 
                            disabled />

                        <Label 
                            className='dataPanelLabel'
                            content={texts.size}
                            disabled />
                        <Input
                            className='dataPanelInput'
                            size='large'
                            value={blockDetails.size} 
                            disabled />
                    </div>

                    <BlockTransactionsGrid transactions={blockDetails.tx} />
                </Modal.Content>
            </Modal>
        );
    }
    
    async loadDetails(block) {
        this.props.dispatch({ type: 'DATA_LOADING' });

        const result = await http.request(`${apiRoutes.BLOCKS}/${block.hash}`);
        console.log(result);
        this.setState({
            blockDetails: result.data
        }) 

        this.props.dispatch({ type: 'DATA_LOADED' });
    }

    onClose() {
        this.props.dispatch({ type: 'HIDE_DATA_DIALOG' })
    }
}

function mapStateToProps({ dataState }) {
    return { 
        dataLoading: dataState.dataLoading
    };
}

export default (connect(mapStateToProps)(BlockDetailsPopup));
