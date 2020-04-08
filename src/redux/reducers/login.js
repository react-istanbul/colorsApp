const defaultState = {
  isUserLoggedIn: false,
  userName: 'Sinan',
  userAge: 18
}


const loginReducer = (state = defaultState, action) => {
  switch (action.type) {

    case 'USER_LOGGED_IN':
      return {
        ...state,
        userName: action.payload.userName,
        isUserLoggedIn: true
      }


    default:
      return state
  }
}


export default loginReducer