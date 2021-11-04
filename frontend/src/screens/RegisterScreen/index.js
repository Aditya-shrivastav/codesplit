import React, { useState } from 'react'
import { Container } from '@mui/material'
import RegisterForm from '../../components/AuthComponent/AuthForm/RegisterForm'
import AuthWrapper from '../../components/AuthComponent/AuthWrapper'

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
  }

  return (
    <Container sx={{ minHeight: '50vh' }}>
      <AuthWrapper>
        <RegisterForm formProps={formProps} />
      </AuthWrapper>
    </Container>
  )
}

export default RegisterScreen
