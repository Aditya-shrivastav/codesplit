import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Stack, Button, IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { LogoutUser } from '../../../store/actions/userActions'

const AppbarItems = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Stack direction='row' alignItems='center'>
        <Link style={{ margin: '0 5px' }} to='/'>
          <Button color='inherit'>Home</Button>
        </Link>
        <Link style={{ margin: '0 5px' }} to='/about'>
          <Button color='inherit'>About</Button>
        </Link>
        <Link style={{ margin: '0 5px' }} to='/contact'>
          <Button color='inherit'>Contact</Button>
        </Link>
        {userInfo ? (
          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem sx={{ pr: 3, pl: 3 }} onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem
                sx={{ pr: 3, pl: 3 }}
                onClick={() => {
                  dispatch(LogoutUser())
                  handleClose()
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link style={{ margin: '0 5px' }} to='/login'>
            <Button color='inherit'>Login</Button>
          </Link>
        )}
      </Stack>
    </>
  )
}

export default AppbarItems
