export default (state = {}, action) => {
    switch(action.type) {
        case 'DATA_LOADING':
            return {
                ...state,
                dataLoading: true,
            };
        case 'DATA_LOADED':
            return {
                ...state,
                dataLoading: false,
            };   
        default:
            return state;
    }
};