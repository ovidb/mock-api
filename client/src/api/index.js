// @flow
import type { GetUserResponse } from './types';

import axios from 'axios';

export const getUser = (): GetUserResponse =>
  axios
    .get('/api/current-user')
    .then(res => res.data);
