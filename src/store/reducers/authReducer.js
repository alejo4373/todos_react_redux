import {
  RECEIVE_AUTH_SUCCESS,
  RECEIVE_AUTH_ERROR,
  SET_AUTH_LOADING
} from '../actionTypes/auth';

const initialState = {
  username: '',
  loggedIn: false
}

const authReducer = (state = initialState, { type, payload }) => {
  const newState = { ...state };
  switch (type) {
    case RECEIVE_AUTH_SUCCESS:
      newState.username = payload.username;
      newState.loggedIn = true;
      newState.loading = false;
      return newState;

    case RECEIVE_AUTH_ERROR:
      newState.loggedIn = false;
      newState.loading = false;
      return newState;

    case SET_AUTH_LOADING:
      newState.loading = true;
      return newState;


    default:
      return state;
  }
}

export default authReducer;
