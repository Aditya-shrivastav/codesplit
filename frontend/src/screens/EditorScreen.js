import React from 'react'

import Editor from '../components/Editor'
import EditorSideNav from '../components/EditorSideNav'
import EditorTopNav from '../components/EditorTopNav'

const EditorScreen = () => {
  return (
    <div className="editor-screen">
      <EditorTopNav />
      <div className="m-auto editor-row">
        <div className="sidenav-column">
          <EditorSideNav />
        </div>
        <div className="detail-column">
          <h1></h1>
        </div>
        <div className="editor-column">
          <Editor />
        </div>
      </div>
    </div>
  )
}

export default EditorScreen
