import React, { useState } from 'react'
import {
  Container,
  Box,
  Card,
  Avatar,
  Typography,
  Grid,
  FormControl,
  FormLabel,
  InputAdornment,
  OutlinedInput,
  Button,
  useTheme,
} from '@mui/material'
import { Mail, MailOutline, Person, PhoneAndroid } from '@mui/icons-material'

const ContactScreen = () => {
  const theme = useTheme()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const submitHandler = () => {
    console.log(name, email, phoneNumber, message)
    setName('')
    setEmail('')
    setMessage('')
    setPhoneNumber('')
  }

  return (
    <Container sx={{ minHeight: '50vh' }}>
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
              width: '600px',
              p: 6,
            },
            [theme.breakpoints.down('md')]: {
              width: '450px',
              p: 2,
            },
          }}
        >
          <Avatar sx={{ m: 1, mt: 3, bgcolor: 'secondary.main' }}>
            <MailOutline />
          </Avatar>
          <Typography variant='h4' component='h1'>
            Get In Touch
          </Typography>
          <Grid container sx={{ mt: 2 }}>
            <Grid
              sx={{
                [theme.breakpoints.up('md')]: {
                  pr: 1.3,
                },
              }}
              item
              xs={12}
              md={6}
            >
              <FormControl fullWidth sx={{ mt: 2 }}>
                <FormLabel id='name'>Full Name</FormLabel>
                <OutlinedInput
                  //margin='normal'
                  required
                  id='name'
                  type='name'
                  autoComplete='name'
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  startAdornment={
                    <InputAdornment position='start'>
                      <Person />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <FormLabel id='email'>Email Address</FormLabel>
                <OutlinedInput
                  required
                  type='email'
                  id='email'
                  value={email}
                  autoComplete='email'
                  onChange={(e) => setEmail(e.target.value)}
                  startAdornment={
                    <InputAdornment position='start'>
                      <Mail />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <FormLabel>Phone Number</FormLabel>
                <OutlinedInput
                  required
                  type='phone'
                  id='phone'
                  value={phoneNumber}
                  autoComplete='email'
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  startAdornment={
                    <InputAdornment position='start'>
                      <PhoneAndroid />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid
              sx={{
                [theme.breakpoints.up('md')]: {
                  pr: 1.3,
                },
              }}
              item
              xs={12}
              md={6}
            >
              <FormControl fullWidth sx={{ mt: 2 }}>
                <FormLabel>Message</FormLabel>
                <OutlinedInput
                  required
                  multiline
                  rows={9}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            sx={{ m: 2, p: 1.5, pr: 4.5, pl: 4.5 }}
            variant='contained'
            size='large'
            onClick={submitHandler}
          >
            Send Message
          </Button>
        </Card>
      </Box>
    </Container>
  )
}

export default ContactScreen
