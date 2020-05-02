const defaultState = {
  isUserLoggedIn: false,
  userEmail: null
}

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        ...state,
        userEmail: action.payload.userEmail,
        isUserLoggedIn: true
      }

    default:
      return state
  }
}

export default loginReducer
