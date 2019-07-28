export function logInRequest(email, password) {
  return {
    type: '@auth/LOG_IN_REQUEST',
    payload: { email, password },
  };
}

export function logInSuccess(token, user) {
  return {
    type: '@auth/LOG_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_LAILURE',
  };
}
