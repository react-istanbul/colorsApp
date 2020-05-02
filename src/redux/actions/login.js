export function userLoggedIn(userEmail) {
  return {
    type: 'USER_LOGGED_IN',
    payload: {
      userEmail
    }
  }
}
