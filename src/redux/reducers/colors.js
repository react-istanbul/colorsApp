const defaultState = {
  isLoading: null,
  error: null,
  colors: []
}

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_COLORS_STARTED':
      return {
        error: null,
        isLoading: true,
        colors: []
      }

    case 'GET_COLORS_SUCCESS':
      return {
        error: null,
        isLoading: false,
        colors: action.payload
      }

    case 'GET_COLORS_FAILED':
      return {
        isLoading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default loginReducer
