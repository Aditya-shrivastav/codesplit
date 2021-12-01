import axios from 'axios'
import * as types from '../constants'

export const RegisterUser =
  (email, password, firstName, lastName, confirmPassword) =>
  async (dispatch) => {
    try {
      dispatch({
        type: types.REGISTER_USER_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = {
        email,
        password,
        firstName,
        lastName,
        confirmPassword,
      }

      const response = await axios.post('/user/register', body, config)

      if (response.data.success) {
        dispatch({
          type: types.REGISTER_USER_SUCCESSFULL,
          payload: response.data,
        })
        dispatch({
          type: types.LOGIN_USER_SUCCESSFULL,
          payload: response.data,
        })
        localStorage.setItem('userInfo', JSON.stringify(response.data.data))
      } else {
        dispatch({
          type: types.REGISTER_USER_FAIL,
          payload: response.data.message,
        })
      }
    } catch (error) {
      dispatch({
        type: types.REGISTER_USER_FAIL,
        payload: error.message,
      })
    }
  }

export const LoginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: types.LOGIN_USER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = {
      email,
      password,
    }

    const response = await axios.post('/user/login', body, config)

    if (response.data.success) {
      dispatch({
        type: types.LOGIN_USER_SUCCESSFULL,
        payload: response.data,
      })
      localStorage.setItem('userInfo', JSON.stringify(response.data.data))
    } else {
      dispatch({
        type: types.LOGIN_USER_FAIL,
        payload: response.data.message,
      })
    }
  } catch (error) {
    dispatch({
      type: types.LOGIN_USER_FAIL,
      payload: error.message,
    })
  }
}

export const LogoutUser = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({
    type: types.LOGOUT_USER,
  })
}
