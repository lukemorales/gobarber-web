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

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function logOut() {
  return {
    type: '@auth/LOG_OUT',
  };
}
