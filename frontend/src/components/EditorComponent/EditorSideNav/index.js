import React from 'react'
import { Box, ListItem, List, useTheme, IconButton } from '@mui/material'
import {
  Search,
  InsertDriveFileOutlined,
  Share,
  UploadFileOutlined,
  FileDownloadOutlined,
  SettingsOutlined,
} from '@mui/icons-material'

const EditorSideNav = () => {
  const theme = useTheme()
  const icons = [
    <UploadFileOutlined />,
    <Search />,
    <Share />,
    <InsertDriveFileOutlined />,
    <FileDownloadOutlined />,
    <SettingsOutlined />,
  ]
  return (
    <Box
      className='editor-sidenav-container'
      sx={{
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },
        backgroundColor: '#1b1b1b',
        borderRight: '0.5px solid grey',
      }}
    >
      <List>
        {icons.map((x, i) => (
          <ListItem
            key={i++}
            sx={{
              padding: '10px 0',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton sx={{ color: 'white' }}>{x}</IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default EditorSideNav
