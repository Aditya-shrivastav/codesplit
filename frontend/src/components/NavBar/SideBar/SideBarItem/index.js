import React from 'react'
import { Link } from 'react-router-dom'
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
import { Info, ArrowBackIos } from '@mui/icons-material'

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
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary={x} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {ListItems.slice(3, 4).map((item, index) => (
          <Link key={index + 1} to={`/${item.toLowerCase()}`}>
            <ListItem button>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
}

export default SidebarItem
