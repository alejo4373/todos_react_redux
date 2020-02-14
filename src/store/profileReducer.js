import { RECEIVE_USER } from './actionTypes';

const profileReducer = (state = {}, { type, payload }) => {
  const newState = { ...state }
  switch (type) {
    case RECEIVE_USER:
      newState.user = payload.user
      return newState;

    default:
      return state;
  }
}

export default profileReducer
