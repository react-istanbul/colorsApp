export function userLoggedIn(userName) {
  return {
    type: 'USER_LOGGED_IN',
    payload: {
      userName
    }
  }
}
