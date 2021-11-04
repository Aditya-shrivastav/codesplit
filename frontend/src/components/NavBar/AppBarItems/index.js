import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Button } from '@mui/material'

const AppbarItems = () => {
  return (
    <>
      <Stack direction='row'>
        <Link style={{ margin: '0 5px' }} to='/'>
          <Button color='inherit'>Home</Button>
        </Link>
        <Link style={{ margin: '0 5px' }} to='/about'>
          <Button color='inherit'>About</Button>
        </Link>
        <Link style={{ margin: '0 5px' }} to='/contact'>
          <Button color='inherit'>Contact</Button>
        </Link>
        <Link style={{ margin: '0 5px' }} to='/login'>
          <Button color='inherit'>Login</Button>
        </Link>
      </Stack>
    </>
  )
}

export default AppbarItems
