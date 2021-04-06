// eslint-disable-next-line import/no-anonymous-default-export
export const openPopupAction = (popupName, data) => {
    return {
        type: 'SHOW_DATA_DIALOG',
        payload: {
            popupName,
            data
        }
    }
};

export const loadingAction = (isLoading) => {
    return {
        type: isLoading ? 'DATA_LOADING' :'DATA_LOADED',
    }
};