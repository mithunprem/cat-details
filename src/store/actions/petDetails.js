import { PET_DETAILS, ERROR } from './types';
import fetchAPI from '../../api/fetchApi';
import { petDetailsFetchUrl } from '../../common/constants';

export const fetchPetDetails = () => dispatch => {
  dispatch(showLoadingState(true));

  fetchAPI(petDetailsFetchUrl)
    .then(({ response }) => {
      dispatch(fetchPetDetailsSuccess(response));
    })
    .catch(errors => dispatch(fetchPetDetailsError(errors)));
};

export const fetchPetDetailsSuccess = petDetails => {
  return dispatch => {
    dispatch(showLoadingState(false));
    dispatch({
      type: PET_DETAILS.FETCH_SUCCESS,
      petDetails
    });
  };
};

export const fetchPetDetailsError = error => {
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
      type: PET_DETAILS.SET_LOADING,
      isLoading
    });
  };
};
