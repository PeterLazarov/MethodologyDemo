// eslint-disable-next-line import/no-anonymous-default-export
export const openPopupAction = (popupComponent) => {
    return {
        type: 'SHOW_DATA_DIALOG',
        payload: {
            DialogComponent: popupComponent,
        }
    }
};