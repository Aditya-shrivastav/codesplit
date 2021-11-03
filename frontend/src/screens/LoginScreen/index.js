import React, { useState } from 'react'
import { Container, useMediaQuery, useTheme } from '@mui/material'
import LoginForm from '../../components/AuthComponent/AuthForm/LoginForm'
import AuthWrapper from '../../components/AuthComponent/AuthWrapper'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const theme = useTheme()
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container sx={{ minHeight: '50vh' }}>
      <AuthWrapper>
        <LoginForm
          password={password}
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
          matchDownMD={matchDownMD}
        />
      </AuthWrapper>
    </Container>
  )
}

export default LoginScreen
