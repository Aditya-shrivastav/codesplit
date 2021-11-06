import React, { useState, useRef, useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { oneDarkTheme, oneDark } from '@codemirror/theme-one-dark'
import { EditorView } from '@codemirror/view'

const Editor = () => {
  const [code, setCode] = useState('Hello World')

  return (
    <>
      <CodeMirror
        className='editor'
        height='calc(100vh - 7rem)'
        value={'Hello Developer!!!'}
        extensions={[cpp(), oneDarkTheme, oneDark]}
        onChange={(value, viewUpdate) => {
          setCode(value)
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
