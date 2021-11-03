import React from 'react'
import { Box, Card, Avatar, useTheme } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'

const AuthWrapper = ({ children }) => {
  const theme = useTheme()
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        minHeight: 'inherit',
        mt: 6,
        mb: 5,
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          [theme.breakpoints.up('md')]: {
            width: '500px',
            p: 6,
          },
          [theme.breakpoints.down('md')]: {
            width: '450px',
            p: 2,
          },
        }}
      >
        <Avatar sx={{ m: 1, mt: 3, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        {children}
      </Card>
    </Box>
  )
}

export default AuthWrapper
