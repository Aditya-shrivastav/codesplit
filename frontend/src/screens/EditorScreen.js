import React from 'react'
import Split from 'react-split'

import Editor from '../components/EditorComponent/CodeEditor'
import EditorSideNav from '../components/EditorSideNav'
import EditorTopNav from '../components/EditorTopNav'

const EditorScreen = () => {
  return (
    <div className='editor-screen'>
      <EditorTopNav />
      <div className='m-auto editor-row'>
        <div className='sidenav-column'>
          <EditorSideNav />
        </div>
        <Split
          className='split-screen-column'
          sizes={[12, 88]}
          minSize={[5, 95]}
          expandToMin={false}
          gutterSize={3}
          gutterAlign='center'
          snapOffset={30}
          dragInterval={1}
          direction='horizontal'
          cursor='col-resize'
        >
          <div className='detail-column'>
            <h1 className='m-0'></h1>
          </div>
          <div className='editor-column'>
            <Editor />
          </div>
        </Split>
      </div>
    </div>
  )
}

export default EditorScreen
