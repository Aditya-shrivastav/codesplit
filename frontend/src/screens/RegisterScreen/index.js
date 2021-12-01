import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@mui/material'

import RegisterForm from '../../components/AuthComponent/AuthForm/RegisterForm'
import AuthWrapper from '../../components/AuthComponent/AuthWrapper'
import SnackMessage from '../../components/SnackMessage'

import { RegisterUser } from '../../store/actions/userActions'

const RegisterScreen = ({ _, history }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [snackOpen, setSnackOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const [variant, setVariant] = useState('success')

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { error, userInfo } = userRegister

  useEffect(() => {
    if (error) {
      setMessage(error)
      setVariant('error')
      setSnackOpen(true)
    }
  }, [error])

  useEffect(() => {
    if (userInfo) {
      history.replace('/login')
    }
  }, [history, userInfo])

  const handleSnackClose = (__, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackOpen(false)
  }

  const submitHandler = async () => {
    dispatch(
      RegisterUser(email, password, firstName, lastName, confirmPassword)
    )
  }

  const formProps = {
    password,
    email,
    confirmPassword,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
    submitHandler,
  }

  return (
    <Container sx={{ minHeight: '50vh' }}>
      <AuthWrapper>
        <RegisterForm formProps={formProps} />
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

export default RegisterScreen
