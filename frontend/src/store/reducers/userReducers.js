import * as types from '../constants'

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REGISTER_USER_REQUEST:
      return { loading: true }
    case types.REGISTER_USER_SUCCESSFULL:
      return {
        loading: false,
        userInfo: action.payload.data,
        success: action.payload.message,
      }
    case types.REGISTER_USER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
      return { loading: true }
    case types.LOGIN_USER_SUCCESSFULL:
      return {
        loading: false,
        userInfo: action.payload.data,
        success: action.payload.message,
      }
    case types.LOGIN_USER_FAIL:
      return { loading: false, error: action.payload }
    case types.LOGOUT_USER:
      return {}
    default:
      return state
  }
}
