export default (state = {}, action) => {
    switch(action.type) {
        case 'SHOW_DATA_DIALOG':
            return {
                ...state,
                DialogComponent: action.payload.DialogComponent,
                showDataDialog: true
            };            
        case 'HIDE_DATA_DIALOG':
            return {
                ...state,
                DialogComponent: null,
                showDataDialog: false
            };
        default:
            return state;
    }
};