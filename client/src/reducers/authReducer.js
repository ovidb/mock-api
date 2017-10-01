import { RECEIVE_USER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user || false;
    default:
      return state;
  }
}