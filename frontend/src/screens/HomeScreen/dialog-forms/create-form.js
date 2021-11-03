import React from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'

const CreateForm = (props) => {
  const { language, languages, setLanguage } = props

  return (
    <FormControl fullWidth={true} sx={{ mt: 3 }}>
      <InputLabel id='Language-select'>language</InputLabel>
      <Select
        id='language-select'
        label='Language'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.slice(0, 3).map((x) => (
          <MenuItem key={x} value={x}>
            {x}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CreateForm
