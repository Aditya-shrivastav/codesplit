import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Toolbar,
  AppBar,
  Typography,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import AppBarItems from './AppBarItems'
import SideBar from './SideBar'

const NavBar = () => {
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'))

  const [open, setOpen] = useState(false)

  return (
    <AppBar position='static' style={{ height: '100%' }}>
      <Container>
        <Toolbar>
          {matchDownSM && (
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 1 }}
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </IconButton>
          )}
          {matchDownSM ? (
            <SideBar setOpen={setOpen} open={open} />
          ) : (
            <>
              <Typography
                sx={{ letterSpacing: '1px', flexGrow: 1 }}
                variant='h4'
                component='h1'
              >
                <Link to='/'>CodeSplit</Link>
              </Typography>
              <AppBarItems />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
