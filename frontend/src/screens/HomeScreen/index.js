import React, { useState } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import Image from 'material-ui-image'
import { useTheme } from '@emotion/react'
import { languages } from '../../data/languages'

import CreateForm from './dialog-forms/create-form'
import JoinForm from './dialog-forms/join-form'

const HomeScreen = () => {
  // states
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('create')
  const [language, setLanguage] = useState('C++')
  const [roomId, setRoomId] = useState('')

  // themes and
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'))

  const handleCreate = () => {
    setType('create')
    setOpen(true)
  }

  const handleJoin = () => {
    setType('join')
    setOpen(true)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: '80vh' }}>
        <Container sx={{ minHeight: 'inherit' }}>
          <Grid
            sx={{ minHeight: 'inherit' }}
            justifyContent='center'
            alignItems='center'
            container
          >
            <Grid
              sx={{
                mt: 2,
                [theme.breakpoints.down('md')]: {
                  mt: 5,
                },
              }}
              item
              xs={12}
              md={6}
            >
              <Stack justifyContent={matchDownMD ? 'center' : 'flex-start'}>
                <Typography
                  sx={{ letterSpacing: '1px' }}
                  variant={matchDownSM ? 'h2' : 'h1'}
                  textAlign={matchDownMD ? 'center' : 'flex-start'}
                  component='h1'
                >
                  CodeSplit
                </Typography>

                <Typography
                  sx={{ letterSpacing: '1px' }}
                  textAlign={matchDownMD ? 'center' : 'flex-start'}
                  variant={matchDownSM ? 'h4' : 'h2'}
                  component='h1'
                >
                  Collaborate in Real Time
                </Typography>

                <Stack
                  sx={{
                    mt: 6,
                    [theme.breakpoints.down('md')]: {
                      mt: 3,
                    },
                  }}
                  justifyContent={matchDownMD ? 'center' : 'flex-start'}
                  direction='row'
                >
                  <Button
                    sx={{
                      width: '150px',
                      borderRadius: '25px',
                      pt: 1.3,
                      pb: 1.3,
                      pr: 3.4,
                      pl: 3.4,
                    }}
                    color='primary'
                    variant='contained'
                    size='large'
                    onClick={handleCreate}
                  >
                    Create
                  </Button>
                  <Button
                    sx={{
                      ml: 2,
                      width: '150px',
                      borderRadius: '25px',
                      pt: 1.3,
                      pb: 1.3,
                      pr: 3.4,
                      pl: 3.4,
                    }}
                    color='secondary'
                    variant='contained'
                    size='large'
                    onClick={handleJoin}
                  >
                    Join
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              sx={{
                [theme.breakpoints.down('md')]: {
                  padding: '25px',
                },
                [theme.breakpoints.down('sm')]: {
                  padding: '15px',
                },
              }}
              item
              xs={12}
              md={6}
            >
              <Image cover color='transparent' src='/images/mac.png' />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Dialog fullWidth={true} open={open} onClose={handleCreate}>
        <DialogTitle>
          {type === 'create' ? 'Create New Room' : 'Join Existing Room'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {type === 'create'
              ? 'Choose a language to start'
              : 'Enter room id to join'}
          </DialogContentText>
          {type === 'create' ? (
            <CreateForm
              setLanguage={setLanguage}
              language={language}
              languages={languages}
            />
          ) : (
            <JoinForm setRoomId={setRoomId} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default HomeScreen
