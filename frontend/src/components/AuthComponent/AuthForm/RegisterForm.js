import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  FormControl,
  TextField,
  Typography,
  Grid,
  useTheme,
} from '@mui/material'

const RegisterForm = ({ formProps }) => {
  const theme = useTheme()
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  } = formProps

  return (
    <>
      <Typography variant='h4' component='h1'>
        Register
      </Typography>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <Grid container direction='row'>
          <Grid
            sx={{
              [theme.breakpoints.up('sm')]: {
                pr: 1.3,
              },
            }}
            item
            xs={12}
            sm={6}
          >
            <TextField
              margin='normal'
              fullWidth
              required
              id='first-name'
              label='First Name'
              name='first-name'
              autoComplete='name'
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid
            sx={{
              [theme.breakpoints.up('sm')]: {
                pl: 1.3,
              },
            }}
            item
            xs={12}
            sm={6}
          >
            <TextField
              margin='normal'
              fullWidth
              required
              id='last-name'
              label='Last Name'
              name='last-name'
              autoComplete='name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
        </Grid>
        <TextField
          margin='normal'
          required
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
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
        <TextField
          margin='normal'
          required
          fullWidth
          name='confirm-password'
          label='Confirm Password'
          type='password'
          id='confirm-password'
          value={confirmPassword}
          autoComplete='current-password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          sx={{ mt: 2, mb: 2, pt: 1.3, pb: 1.3 }}
          variant='contained'
          color='primary'
          size='large'
        >
          Register
        </Button>
        <Link to='/login'>
          <Typography textAlign='center' sx={{ mt: 1 }}>
            Already have an account? Log In
          </Typography>
        </Link>
      </FormControl>
    </>
  )
}

export default RegisterForm
