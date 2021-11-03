import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Stack,
  FormControl,
  TextField,
  Typography,
} from '@mui/material'

const LoginForm = (props) => {
  const { email, setEmail, password, setPassword, matchDownMD } = props

  return (
    <>
      <Typography variant='h4' component='h1'>
        Sign In
      </Typography>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField
          margin='normal'
          required
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autofocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          value={password}
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{ mt: 2, mb: 2, pt: 1.3, pb: 1.3 }}
          variant='contained'
          color='primary'
          size='large'
        >
          Sign In
        </Button>
        <Stack
          justifyContent='space-between'
          alignItems='center'
          direction={matchDownMD ? 'column' : 'row'}
        >
          <Link to='/change_password'>
            <Typography sx={{ mt: 1 }}>Forgot Password?</Typography>
          </Link>
          <Link to='/register'>
            <Typography sx={{ mt: 1 }}>
              Dont have an account? Register
            </Typography>
          </Link>
        </Stack>
      </FormControl>
    </>
  )
}

export default LoginForm
