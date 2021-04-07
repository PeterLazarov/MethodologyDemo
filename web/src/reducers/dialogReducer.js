import { pullAt } from 'lodash';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch(action.type) {
        case 'SHOW_DATA_DIALOG':
            let globalPopupDataForAdd = state.globalPopupData || [];
            globalPopupDataForAdd[action.payload.popupName] = action.payload.data;

            return {
                ...state,
                globalPopupData: globalPopupDataForAdd
            };            
        case 'HIDE_DATA_DIALOG':
            let globalPopupDataForPull = state.globalPopupData;
            pullAt(globalPopupDataForPull, action.payload.popupName)
            
            return {
                ...state,
                globalPopupData: globalPopupDataForPull
            };
        default:
            return state;
    }
};