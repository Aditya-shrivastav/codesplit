import React, { useState, useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { oneDarkTheme, oneDark } from '@codemirror/theme-one-dark'

const Editor = (props) => {
  const [code, setCode] = useState('Hello Developers')

  const { room, socket } = props

  useEffect(() => {
    socket.on('recieve', (payload) => {
      setCode(payload.code)
      console.log("Editor", payload)
    })
  }, [socket, code])

  const onCodeChange = (value, update) => {
    setCode(value)
    socket.emit('change', {
      room,
      code: value,
    })
  }

  return (
    <>
      <CodeMirror
        className='editor'
        height='93vh'
        value={code}
        extensions={[cpp(), oneDarkTheme, oneDark]}
        onChange={(value, viewUpdate) => {
          onCodeChange(value, viewUpdate)
        }}
        theme='dark'
        basicSetup={true}
        indentWithTab={true}
        editable={true}
        autoFocus={true}
        style={{ fontSize: '18px' }}
      />
    </>
  )
}

export default Editor
