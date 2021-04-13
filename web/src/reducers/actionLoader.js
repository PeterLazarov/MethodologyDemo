
import { showDataDialog, hideDataDialog } from 'Reducers/dialogReducer';
import { dataLoading } from 'Reducers/dataReducer';

// eslint-disable-next-line import/no-anonymous-default-export
export const openPopupAction = (popupName, data) => {
    return showDataDialog({
        popupName,
        data
    })
};

export const closePopupAction = (popupName) => {
    return hideDataDialog({
        popupName,
    })
};

export const loadingAction = (isLoading) => {
    return dataLoading({ isLoading });
};