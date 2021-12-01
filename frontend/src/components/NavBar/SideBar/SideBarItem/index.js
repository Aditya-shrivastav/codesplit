import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  List,
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  styled,
} from '@mui/material'
import {
  InfoOutlined,
  ArrowBackIos,
  HomeOutlined,
  EmailOutlined,
  PersonOutline,
  LogoutOutlined,
  LoginOutlined,
} from '@mui/icons-material'
import { LogoutUser } from '../../../../store/actions/userActions'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const SidebarItem = (props) => {
  const { open, setOpen } = props
  const ListItems = ['Home', 'About', 'Contact', 'Login']
  const IconList = [
    <HomeOutlined />,
    <InfoOutlined />,
    <EmailOutlined />,
    <LoginOutlined />,
  ]

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <Box onClick={() => setOpen(!open)} sx={{ width: 250 }}>
      <DrawerHeader key='closeBtn'>
        <IconButton>
          <ArrowBackIos />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {ListItems.slice(0, 3).map((x, index) => (
          <Link key={index + 1} to={x === 'Home' ? '/' : `/${x.toLowerCase()}`}>
            <ListItem button>
              <ListItemIcon>{IconList[index]}</ListItemIcon>
              <ListItemText primary={x} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {!userInfo &&
          ListItems.slice(3, 4).map((item, index) => (
            <Link key={index + 1} to={`/${item.toLowerCase()}`}>
              <ListItem button>
                <ListItemIcon>{IconList[3]}</ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            </Link>
          ))}
        {userInfo && (
          <>
            <Link to='/user/profile'>
              <ListItem button>
                <ListItemIcon>
                  <PersonOutline />
                </ListItemIcon>
                <ListItemText primary={'Profile'} />
              </ListItem>
            </Link>
            <ListItem button onClick={() => dispatch(LogoutUser())}>
              <ListItemIcon>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText primary={'Logout'} />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  )
}

export default SidebarItem
