import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Toolbar,
  AppBar,
  Typography,
  Button,
  Container,
} from '@mui/material'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Container>
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography
              sx={{ letterSpacing: '1px', flexGrow: 1 }}
              variant='h4'
              component='h1'
            >
              CodeSplit
            </Typography>
            <Link to='/login'>
              <Button color='inherit'>Login</Button>
            </Link>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default NavBar
