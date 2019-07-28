import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '@/services/api';
import { logInSuccess } from './actions';
import history from '@/services/history';

export function* logIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('User is not a provider');
    return;
  }

  yield put(logInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/LOG_IN_REQUEST', logIn)]);
