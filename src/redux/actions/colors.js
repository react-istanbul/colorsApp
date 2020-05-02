export function getColors() {
  return async (dispatch) => {
    dispatch({
      type: 'GET_COLORS_STARTED'
    })

    try {
      const res = await fetch('https://reqres.in/api/colors')
      const { data } = await res.json()

      dispatch({
        type: 'GET_COLORS_SUCCESS',
        payload: data
      })
    } catch (error) {
      dispatch({
        type: 'GET_COLORS_FAILED',
        payload: error
      })
    }
  }
}
