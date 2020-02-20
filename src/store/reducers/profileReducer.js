import { RECEIVE_USER } from '../actionTypes/profile';

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
