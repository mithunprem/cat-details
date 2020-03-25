import { ERROR } from './types';

export const resetError = () => {
    return dispatch => {
        dispatch({
            type: ERROR.RESET
        });
    };
};
