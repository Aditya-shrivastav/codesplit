import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, useMediaQuery, useTheme } from '@mui/material'

import LoginForm from '../../components/AuthComponent/AuthForm/LoginForm'
import AuthWrapper from '../../components/AuthComponent/AuthWrapper'
import SnackMessage from '../../components/SnackMessage'

import { LoginUser } from '../../store/actions/userActions'

const LoginScreen = ({ _, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [snackOpen, setSnackOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const [variant, setVariant] = useState('success')

  const theme = useTheme()
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { error, userInfo } = userLogin

  useEffect(() => {
    if (error) {
      setMessage(error)
      setVariant('error')
      setSnackOpen(true)
    }
  }, [error])

  useEffect(() => {
    if (userInfo) {
      history.replace('/')
    }
  }, [history, userInfo])

  const handleSnackClose = (_, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackOpen(false)
  }

  const submitHandler = () => {
    dispatch(LoginUser(email, password))
  }

  return (
    <Container sx={{ minHeight: '50vh' }}>
      <AuthWrapper>
        <LoginForm
          password={password}
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
          matchDownMD={matchDownMD}
          submitHandler={submitHandler}
        />
      </AuthWrapper>
      <SnackMessage
        variant={variant}
        message={message}
        snackOpen={snackOpen}
        handleSnackClose={handleSnackClose}
      />
    </Container>
  )
}

export default LoginScreen
