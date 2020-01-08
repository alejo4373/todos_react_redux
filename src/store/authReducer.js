import { RECEIVE_AUTH_USER } from './actionTypes';

const authReducer = (state = {}, { type, payload }) => {
  const newState = { ...state };
  switch (type) {
    case RECEIVE_AUTH_USER:
      const { user } = payload
      newState.user = user;
      return newState;

    default:
      return newState;
  }
}

export default authReducer;
