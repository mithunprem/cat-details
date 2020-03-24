import { CAT_DETAILS, ERROR } from './types';
import fetchAPI from '../../api/fetchApi';
import { catDetailsFetchUrl } from '../../common/constants';

export const fetchCatDetails = () => dispatch => {
  dispatch(showLoadingState(true));

  fetchAPI(catDetailsFetchUrl)
    .then(({ response }) => {
      dispatch(fetchCatDetailsSuccess(response));
    })
    .catch(errors => dispatch(fetchCatDetailsError(errors)));
};

export const fetchCatDetailsSuccess = catDetails => {
  return dispatch => {
    dispatch(showLoadingState(false));
    dispatch({
      type: CAT_DETAILS.FETCH_SUCCESS,
      catDetails
    });
  };
};

export const fetchCatDetailsError = error => {
  return dispatch => {
    dispatch(showLoadingState(false));
    dispatch({
      type: ERROR.THROW,
      errorMessage: error.message
    });
  };
};

export const showLoadingState = isLoading => {
  return dispatch => {
    dispatch({
      type: CAT_DETAILS.SET_LOADING,
      isLoading
    });
  };
};
