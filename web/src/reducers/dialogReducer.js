// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch(action.type) {
        case 'SHOW_DATA_DIALOG':
            const { payload } = action;
            let allPopupData = state.allPopupData;
            allPopupData[payload.popupName] = payload.data;

            return {
                ...state,
                allPopupData
            };            
        case 'HIDE_DATA_DIALOG':
            return {
                ...state,
                allPopupData: []
            };
        default:
            return state;
    }
};