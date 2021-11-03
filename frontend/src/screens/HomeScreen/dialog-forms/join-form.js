import React from 'react'
import { TextField, FormControl } from '@mui/material'

const JoinForm = (props) => {
  const { setRoomId } = props

  return (
    <FormControl fullWidth={true} sx={{ mt: 3 }}>
      <TextField
        onChange={(e) => setRoomId(e.target.value)}
        id='enter-room-id'
        label='Room ID'
        variant='standard'
        autoFocus
      />
    </FormControl>
  )
}

export default JoinForm
