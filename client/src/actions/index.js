// @flow
import { GetUserResponse } from '../api/types';
import { FETCH_USER, RECEIVE_USER } from './types';

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const receiveUser = (user: GetUserResponse) => ({
  type: RECEIVE_USER,
  user,
});
