import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import BlocksGrid from 'Components/grids/BlocksGrid';
import BlockDetailsPopup from 'Components/popups/BlockDetailsPopup';
import http from 'Services/http';
import apiRoutes from 'Config/apiRoutes';
import texts from 'Texts';

class BlocksPage extends Component {
    state = {
        filter: {
            nameLike: ''
        },
        blocks: []
    }

    async componentDidMount() {
        this.loadData();
    }

    render() {
        const { state } = this;
        
        return (          
            <div className='blocksPage'>
                <label className='label title'>
                    {texts.blocks}
                </label>

                <BlocksGrid 
                    blocks={state.blocks}                         
                    pageSize={state.pageSize} 
                    showDetails={this.showDetails.bind(this)} />
            </div>  
        );
    }

    async loadData() {
        this.props.dispatch({
            type: 'DATA_LOADING'
        });
        const result = await http.request(`${apiRoutes.BLOCKS}`);

        this.setState({
            blocks: _.isEmpty(result.data) ? [] : result.data
        }) 
        this.props.dispatch({
            type: 'DATA_LOADED'
        });
    }

    showDetails(block) {
        this.props.dispatch({
            type: 'SHOW_DATA_DIALOG',
            payload: {
                DialogComponent: <BlockDetailsPopup block={block} />,
            }
        });
    }
}

function mapStateToProps() {
    return { };
}

export default (connect(mapStateToProps)(BlocksPage));