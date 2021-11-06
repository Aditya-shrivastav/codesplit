import React from 'react'
import { Box, Stack } from '@mui/material'

import Editor from '../../components/EditorComponent/CodeEditor'
import EditorSideNav from '../../components/EditorComponent/EditorSideNav/'
import { border } from '@mui/system'

const EditorScreen = () => {
  return (
    <Box style={{ minHeight: 'calc(100vh - 8rem)' }}>
      <Stack container direction='row'>
        <EditorSideNav />
        <Stack
          direction='row'
          sx={{
            margin: 0,
            width: '97%',
          }}
        >
          <Box
            component='div'
            sx={{
              backgroundColor: '#212121',
              borderLeft: '0.5px solid grey',
              borderRight: '0.5px solid grey',
              width: '10%',
            }}
          ></Box>
          <Box
            component='div'
            sx={{
              width: '90%',
              borderLeft: '0.5px solid grey',
            }}
          >
            <Editor />
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default EditorScreen
