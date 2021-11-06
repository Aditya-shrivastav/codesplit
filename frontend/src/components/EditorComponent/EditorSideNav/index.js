import React from 'react'
import { Stack, ListItem, List, useTheme } from '@mui/material'
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
    <Stack
      sx={{
        width: '3%',
        [theme.breakpoints.down('md')]: {
          width: '10%',
        },
        backgroundColor: '#1b1b1b',
        borderRight: '0.5px solid grey',
      }}
      direction='column'
    >
      <List>
        {icons.map((x) => (
          <ListItem
            sx={{
              color: 'white',
              padding: '10px 0',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {x}
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default EditorSideNav
